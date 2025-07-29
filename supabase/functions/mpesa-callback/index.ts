import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const callbackData = await req.json();
    console.log('M-Pesa callback received:', JSON.stringify(callbackData, null, 2));

    const { Body } = callbackData;
    const { stkCallback } = Body;

    const checkoutRequestId = stkCallback.CheckoutRequestID;
    const merchantRequestId = stkCallback.MerchantRequestID;
    const resultCode = stkCallback.ResultCode;
    const resultDesc = stkCallback.ResultDesc;

    // Find the payment record
    const { data: payment, error: findError } = await supabase
      .from('payments')
      .select('*')
      .eq('checkout_request_id', checkoutRequestId)
      .single();

    if (findError) {
      console.error('Error finding payment:', findError);
      throw findError;
    }

    let paymentStatus = 'failed';
    let orderStatus = 'failed';
    let mpesaReceiptNumber = null;

    if (resultCode === 0) {
      // Payment successful
      paymentStatus = 'success';
      orderStatus = 'completed';
      
      // Extract M-Pesa receipt number from callback items
      const callbackMetadata = stkCallback.CallbackMetadata;
      if (callbackMetadata && callbackMetadata.Item) {
        const receiptItem = callbackMetadata.Item.find((item: any) => 
          item.Name === 'MpesaReceiptNumber'
        );
        if (receiptItem) {
          mpesaReceiptNumber = receiptItem.Value;
        }
      }
    }

    // Update payment record
    const { error: updatePaymentError } = await supabase
      .from('payments')
      .update({
        status: paymentStatus,
        response_code: resultCode.toString(),
        response_description: resultDesc,
        mpesa_receipt_number: mpesaReceiptNumber
      })
      .eq('checkout_request_id', checkoutRequestId);

    if (updatePaymentError) {
      console.error('Error updating payment:', updatePaymentError);
      throw updatePaymentError;
    }

    // Update order status
    const { error: updateOrderError } = await supabase
      .from('orders')
      .update({ status: orderStatus })
      .eq('id', payment.order_id);

    if (updateOrderError) {
      console.error('Error updating order:', updateOrderError);
      throw updateOrderError;
    }

    console.log(`Payment ${paymentStatus} for order ${payment.order_id}`);

    return new Response(
      JSON.stringify({ 
        ResultCode: 0, 
        ResultDesc: "Callback processed successfully" 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error processing M-Pesa callback:', error);
    return new Response(
      JSON.stringify({
        ResultCode: 1,
        ResultDesc: "Error processing callback"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});