
import React, { useState } from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "200W Monocrystalline Solar Panel",
      power: "200W",
      efficiency: "22%",
      warranty: "25 Years",
      price: 35000,
      description: "High efficiency monocrystalline solar panel perfect for residential use",
      image: "/lovable-uploads/b25cdd7a-571f-4d7a-bf30-e954a3167682.png",
      rating: 4.8,
      features: ["High Efficiency", "Weather Resistant", "Easy Installation"]
    },
    {
      id: 2,
      name: "585W High-Power Solar Panel",
      power: "585W",
      efficiency: "21.5%",
      warranty: "25 Years",
      price: 85000,
      description: "Maximum power output solar panel with durable frame and anti-reflective coating",
      image: "/lovable-uploads/b30be10a-484c-475e-854c-2fab35ddba22.png",
      rating: 4.9,
      features: ["Maximum Power Output", "Durable Frame", "Anti-Reflective Coating"]
    },
    {
      id: 3,
      name: "650W Premium Solar Panel",
      power: "650W",
      efficiency: "23%",
      warranty: "25 Years",
      price: 95000,
      description: "Industry leading efficiency with premium materials and extended warranty",
      image: "/lovable-uploads/18e39d79-f11e-43d5-9c74-b33913981055.png",
      rating: 4.9,
      features: ["Industry Leading Efficiency", "Premium Materials", "Extended Warranty"]
    },
    {
      id: 4,
      name: "585W Commercial Solar Panel",
      power: "585W",
      efficiency: "21.8%",
      warranty: "25 Years",
      price: 75000,
      description: "Commercial grade solar panel with high durability and cost effectiveness",
      image: "/lovable-uploads/1e6a7fd0-ee37-4df7-9c43-99ded41854f3.png",
      rating: 4.7,
      features: ["Commercial Grade", "High Durability", "Cost Effective"]
    },
    {
      id: 5,
      name: "300W Residential Solar Panel",
      power: "300W",
      efficiency: "20.5%",
      warranty: "25 Years",
      price: 55000,
      description: "Perfect for homes with reliable performance and easy maintenance",
      image: "/lovable-uploads/219e9d64-2c98-42ba-8c22-79a8d0813824.png",
      rating: 4.6,
      features: ["Perfect for Homes", "Reliable Performance", "Easy Maintenance"]
    }
  ];

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setIsCheckoutOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000d2e] mb-4">
            Premium Solar Panels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-efficiency solar panels designed to meet your energy needs with exceptional quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#e2950c] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.power}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-[#e2950c] mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#000d2e] mb-3">{product.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-gray-600">
                    <span className="font-semibold">Efficiency:</span> {product.efficiency}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Warranty:</span> {product.warranty}
                  </div>
                </div>
                
                <div className="mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="inline-block bg-[#39aa0b]/10 text-[#39aa0b] text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#0b79fc]">KSh {product.price.toLocaleString()}</div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleBuyNow(product)}
                      className="bg-[#39aa0b] hover:bg-[#2d8009] text-white p-2 rounded-lg transition-colors"
                    >
                      <ShoppingCart size={20} />
                    </button>
                    <button className="bg-[#0b79fc] hover:bg-[#0962d4] text-white p-2 rounded-lg transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0b79fc] hover:bg-[#0962d4] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
      
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;
