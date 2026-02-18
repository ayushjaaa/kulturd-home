
import React from 'react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  cart: CartItem[];
  subtotal: number;
  onBack: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, subtotal, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
      <div className="mb-12">
        <button onClick={onBack} className="flex items-center gap-2 mb-8 hover:underline text-sm font-bold tracking-widest uppercase">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Store
        </button>
        <h1 className="text-4xl font-bold tracking-tight">CHECK<br/>OUT</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: Form Fields */}
        <div className="flex-1 space-y-16">
          <section>
            <h2 className="text-xl font-bold mb-8">1. Contact Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Email</label>
                <input type="email" placeholder="email@address.com" className="w-full bg-transparent border-b border-black py-2 focus:outline-none placeholder:opacity-30" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-8">2. Shipping Address</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Address</label>
                <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Apartment, Suite, etc. (optional)</label>
                <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">City</label>
                  <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">State</label>
                  <select className="w-full bg-transparent border-b border-black py-2 focus:outline-none">
                    <option value="">Select State</option>
                    <option value="DL">Delhi</option>
                    <option value="MH">Maharashtra</option>
                    <option value="KA">Karnataka</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="GJ">Gujarat</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="WB">West Bengal</option>
                    <option value="TS">Telangana</option>
                    <option value="KL">Kerala</option>
                    <option value="PB">Punjab</option>
                    <option value="HR">Haryana</option>
                    <option value="GA">Goa</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">PIN Code</label>
                <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-8">3. Payment Method</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Credit Card Details</label>
                <input type="text" placeholder="Card number" className="w-full bg-transparent border-b border-black py-2 focus:outline-none placeholder:opacity-30" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Details</label>
                <input type="text" placeholder="MM/YY  CVV" className="w-full bg-transparent border-b border-black py-2 focus:outline-none placeholder:opacity-30" />
              </div>
            </div>
          </section>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#F9F7F2] p-8 rounded shadow-sm sticky top-12">
            <h2 className="text-xl font-bold mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: item.product.bgColor || '#DCC7A1' }}>
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-tight">{item.product.name}, {item.size}</h4>
                      <p className="text-[10px] opacity-60 uppercase mt-1">QTY: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-sm">₹{item.product.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Subtotal:</span>
                <span className="font-bold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Shipping:</span>
                <span className="font-bold">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Tax:</span>
                <span className="font-bold">₹0</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg font-bold pt-8 mt-4 border-t-2 border-black">
              <span>Total:</span>
              <span>₹{subtotal}</span>
            </div>

            <button 
              className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest mt-8 hover:opacity-90 transition-opacity"
              onClick={() => alert("Order Placed Successfully!")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
