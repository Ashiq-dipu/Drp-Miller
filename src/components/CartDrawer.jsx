import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    itemCount,
    subtotal,
    openCheckout
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) closeCart();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B0A09] border-l border-white/10 text-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#141210]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2D0891] flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-archivo text-lg font-bold uppercase tracking-tight">
                  Your Cart
                </h2>
                <p className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-archivo text-base font-bold text-white">
                    Your bag is currently empty
                  </h3>
                  <p className="text-xs text-white/60 max-w-xs leading-relaxed">
                    Explore the official Gutter to Greatness collection of hoodies, tees, and gear.
                  </p>
                </div>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-2 px-6 py-3 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-[#2D0891]/30 cursor-pointer"
                >
                  Shop Merchandise
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="bg-[#141210] border border-white/10 rounded-2xl p-4 flex gap-4 items-center group transition-colors hover:border-white/20"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl bg-white overflow-hidden p-2 shrink-0 flex items-center justify-center border border-white/10">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== item.cdnImg) {
                          e.currentTarget.src = item.cdnImg;
                        }
                      }}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-archivo text-xs sm:text-sm font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        aria-label="Remove item"
                        className="text-white/40 hover:text-red-400 transition-colors p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#A78BFA] bg-[#2D0891]/30 px-2 py-0.5 rounded">
                        Size: {item.size}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-white/40">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-xs font-bold text-white">
                        {item.price}
                      </span>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/20 rounded-lg bg-black/40 overflow-hidden font-mono text-xs">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-white min-w-[24px] text-center font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#141210] space-y-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-emerald-400 font-bold uppercase">Free</span>
                  ) : (
                    <span className="text-white">${shipping.toFixed(2)}</span>
                  )}
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-white/40">
                    Add ${(75 - subtotal).toFixed(2)} more for free delivery
                  </p>
                )}
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm">
                  <span className="font-bold uppercase tracking-wider text-white">Total</span>
                  <span className="font-archivo text-lg font-black text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={openCheckout}
                className="w-full py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#2D0891]/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-6 text-[10px] font-mono text-white/50">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3 h-3 text-[#A78BFA]" /> Tracked Global Shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-[#A78BFA]" /> 100% Secure Checkout
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

