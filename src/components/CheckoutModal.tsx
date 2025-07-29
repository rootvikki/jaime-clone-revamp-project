import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

console.log('CheckoutModal component loaded'); // Debug log

interface Product {
  name: string;
  price: number;
  description: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const CheckoutModal = ({ isOpen, onClose, product }: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    quantity: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.customerName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.customerEmail.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.customerPhone.trim()) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleCheckout = async () => {
    if (!product || !validateForm()) return;

    setIsLoading(true);
    try {
      const totalAmount = product.price * formData.quantity;

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          product_name: product.name,
          product_price: product.price,
          quantity: formData.quantity,
          total_amount: totalAmount,
          status: 'pending'
        })
        .select()
        .single();

      if (orderError) {
        throw orderError;
      }

      // Initiate M-Pesa payment
      const { data, error } = await supabase.functions.invoke('mpesa-stk-push', {
        body: {
          phone: formData.customerPhone,
          amount: totalAmount,
          orderId: order.id
        }
      });

      if (error) {
        throw error;
      }

      if (data.success) {
        toast({
          title: "Payment Request Sent",
          description: "Please check your phone to complete the payment using M-Pesa",
        });
        
        // Reset form and close modal
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          quantity: 1,
        });
        onClose();
      } else {
        throw new Error(data.error || "Payment initiation failed");
      }

    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) return null;

  const totalAmount = product.price * formData.quantity;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout - {product.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <p className="text-lg font-bold">KSh {product.price.toLocaleString()}</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="customerName">Full Name</Label>
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="customerEmail">Email Address</Label>
              <Input
                id="customerEmail"
                name="customerEmail"
                type="email"
                value={formData.customerEmail}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="customerPhone">Phone Number</Label>
              <Input
                id="customerPhone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
                placeholder="254712345678"
                required
              />
            </div>

            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount:</span>
                <span className="text-xl font-bold">KSh {totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <Button 
              onClick={handleCheckout} 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Pay with M-Pesa"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};