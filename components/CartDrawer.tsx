
import React from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  subtotal: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  subtotal, 
  onUpdateQuantity,
  onCheckout
}) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#F9F7F2] z-50 transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold tracking-tight">YOUR BAG ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
          <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-50">
              <p>Your bag is empty.</p>
              <button onClick={onClose} className="mt-4 underline">Start Shopping</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: item.product.bgColor || '#DCC7A1' }}>
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold">{item.product.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">PACK SIZE: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">₹{item.product.price}</span>
                    <div className="flex items-center border border-black rounded px-1">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-2 hover:bg-black/5"><Minus size={14}/></button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-2 hover:bg-black/5"><Plus size={14}/></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-200 space-y-4">
          <div className="flex justify-between items-center text-sm font-bold tracking-widest">
            <span>SUBTOTAL</span>
            <span>₹{subtotal}</span>
          </div>
          <button 
            disabled={cart.length === 0}
            onClick={onCheckout}
            className="w-full py-5 bg-black text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:bg-gray-400"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
