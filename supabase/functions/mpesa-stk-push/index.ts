import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey);

// M-Pesa credentials from environment
const consumerKey = Deno.env.get('MPESA_CONSUMER_KEY')!;
const consumerSecret = Deno.env.get('MPESA_CONSUMER_SECRET')!;
const shortcode = Deno.env.get('MPESA_SHORTCODE')!;
const passkey = Deno.env.get('MPESA_PASSKEY')!;

async function getAccessToken(): Promise<string> {
  const auth = btoa(`${consumerKey}:${consumerSecret}`);
  
  console.log('Getting access token with credentials:', { consumerKey, consumerSecret: consumerSecret ? '***hidden***' : 'missing' });
  
  const response = await fetch(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    }
  );
  
  const data = await response.json();
  console.log('Access token response:', data);
  
  if (!data.access_token) {
    throw new Error(`Failed to get access token: ${JSON.stringify(data)}`);
  }
  
  return data.access_token;
}

function generatePassword(): string {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const password = btoa(`${shortcode}${passkey}${timestamp}`);
  return password;
}

function getTimestamp(): string {
  return new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, amount, orderId } = await req.json();

    console.log('Processing M-Pesa payment:', { phone, amount, orderId });
    console.log('Environment check:', { 
      consumerKey: consumerKey ? 'present' : 'missing',
      consumerSecret: consumerSecret ? 'present' : 'missing',
      shortcode: shortcode ? 'present' : 'missing',
      passkey: passkey ? 'present' : 'missing'
    });

    if (!consumerKey || !consumerSecret || !shortcode || !passkey) {
      throw new Error('Missing M-Pesa credentials. Please check your environment variables.');
    }

    // Get access token
    const accessToken = await getAccessToken();
    
    // Generate password and timestamp
    const password = generatePassword();
    const timestamp = getTimestamp();
    
    // Format phone number (remove + and ensure it starts with 254)
    let formattedPhone = phone.replace(/\+/g, '').replace(/\s/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.slice(1);
    } else if (!formattedPhone.startsWith('254')) {
      formattedPhone = '254' + formattedPhone;
    }

    // STK Push request
    const stkPushData = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: `${supabaseUrl}/functions/v1/mpesa-callback`,
      AccountReference: `ORDER_${orderId}`,
      TransactionDesc: "Solar Product Payment"
    };

    console.log('Sending STK Push request:', stkPushData);

    const stkResponse = await fetch(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stkPushData),
      }
    );

    const stkResult = await stkResponse.json();
    console.log('STK Push response:', stkResult);

    if (stkResult.ResponseCode === '0') {
      // Save payment record
      const { error: paymentError } = await supabase
        .from('payments')
        .insert({
          order_id: orderId,
          merchant_request_id: stkResult.MerchantRequestID,
          checkout_request_id: stkResult.CheckoutRequestID,
          amount: amount,
          phone_number: formattedPhone,
          status: 'pending'
        });

      if (paymentError) {
        console.error('Error saving payment:', paymentError);
        throw paymentError;
      }

      // Update order status
      const { error: orderError } = await supabase
        .from('orders')
        .update({ status: 'processing' })
        .eq('id', orderId);

      if (orderError) {
        console.error('Error updating order:', orderError);
        throw orderError;
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'STK Push sent successfully',
          checkoutRequestId: stkResult.CheckoutRequestID,
          merchantRequestId: stkResult.MerchantRequestID
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    } else {
      throw new Error(`STK Push failed: ${stkResult.errorMessage || stkResult.ResponseDescription}`);
    }

  } catch (error) {
    console.error('Error in M-Pesa STK Push:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});