import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, Truck, CreditCard, ArrowLeft, ShoppingBag, Check, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const {
    cart,
    subtotal,
    itemCount,
    isCheckoutOpen,
    closeCheckout,
    clearCart
  } = useCart();

  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [copiedOrder, setCopiedOrder] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExp: '',
    cardCvc: ''
  });

  if (!isCheckoutOpen) return null;

  // Shipping calculation
  const freeShipping = subtotal >= 75;
  const shippingCost = shippingMethod === 'priority' ? 12.99 : (freeShipping ? 0 : 5.99);
  const estimatedTax = Number((subtotal * 0.08).toFixed(2));
  const orderTotal = (subtotal + shippingCost + estimatedTax).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment authorization & order generation
    setTimeout(() => {
      const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
      const generatedOrder = {
        orderId: `DPM-${randomOrderNum}`,
        customerName: `${formData.firstName} ${formData.lastName}`.trim() || 'Valued Supporter',
        email: formData.email || 'customer@example.com',
        address: `${formData.address}${formData.apt ? ', ' + formData.apt : ''}, ${formData.city}, ${formData.state} ${formData.zip}`,
        items: [...cart],
        total: orderTotal,
        shippingMethod: shippingMethod === 'priority' ? 'Priority Express (2-3 Days)' : 'Standard Ground (3-5 Days)',
        placedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setOrderData(generatedOrder);
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setOrderComplete(false);
    setOrderData(null);
    closeCheckout();
  };

  const copyOrderId = () => {
    if (orderData?.orderId) {
      navigator.clipboard.writeText(orderData.orderId);
      setCopiedOrder(true);
      setTimeout(() => setCopiedOrder(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 font-sans animate-in fade-in duration-200">
      
      <div className="bg-[#0e0c0a] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl text-white my-auto">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#151311] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2D0891] flex items-center justify-center text-white">
              {orderComplete ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="font-archivo text-base sm:text-lg font-bold uppercase tracking-tight">
                {orderComplete ? 'Order Confirmation' : 'Secure Checkout'}
              </h2>
              <p className="font-mono text-[11px] text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit Encrypted · Official Store</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close checkout"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          
          {/* ========================================================
              STATE A: ORDER CONFIRMATION / RECEIPT
          ======================================================== */}
          {orderComplete && orderData ? (
            <div className="space-y-8 max-w-2xl mx-auto py-4 text-center sm:text-left">
              
              {/* Success Badge */}
              <div className="flex flex-col items-center justify-center text-center space-y-3 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Order Received Successfully
                  </span>
                  <h3 className="font-archivo text-2xl sm:text-3xl font-black text-white">
                    Thank You, {orderData.customerName}!
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto">
                    Your official Dr. Paul Miller merchandise order has been processed. A receipt and shipping updates will be sent to <span className="text-white font-semibold">{orderData.email}</span>.
                  </p>
                </div>

                {/* Order ID Pill */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-white/50">ORDER ID:</span>
                  <span className="font-bold text-[#A78BFA]">{orderData.orderId}</span>
                  <button
                    onClick={copyOrderId}
                    className="p-1 hover:text-[#A78BFA] transition-colors cursor-pointer text-white/60"
                    title="Copy Order ID"
                  >
                    {copiedOrder ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Order Summary & Shipping Details */}
              <div className="grid sm:grid-cols-2 gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-xs font-mono">
                <div className="space-y-2 text-left">
                  <span className="text-white/40 uppercase tracking-wider block">Shipping To</span>
                  <p className="text-white font-sans text-sm font-semibold">{orderData.customerName}</p>
                  <p className="text-white/70 font-sans leading-relaxed">{orderData.address}</p>
                  <p className="text-white/50 pt-1 flex items-center gap-1.5 font-sans">
                    <Truck className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>{orderData.shippingMethod}</span>
                  </p>
                </div>

                <div className="space-y-2 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                  <span className="text-white/40 uppercase tracking-wider block">Order Details</span>
                  <p className="text-white font-sans text-sm">Placed: {orderData.placedAt}</p>
                  <p className="text-white/70 font-sans">Total Paid: <span className="font-bold text-white text-base">${orderData.total}</span></p>
                  <p className="text-emerald-400/90 font-sans text-[11px] pt-1">
                    Estimated Delivery: 3–5 Business Days
                  </p>
                </div>
              </div>

              {/* Purchased Items List */}
              <div className="space-y-3 text-left">
                <h4 className="font-mono text-xs uppercase tracking-wider text-white/50">
                  Purchased Items ({orderData.items.reduce((s, i) => s + i.quantity, 0)})
                </h4>
                <div className="divide-y divide-white/5 border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                  {orderData.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white p-1 shrink-0 flex items-center justify-center">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs font-bold text-white truncate">{item.name}</p>
                        <p className="font-mono text-[11px] text-white/50">
                          Size: {item.size} · Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold text-white">
                        ${(item.priceNum * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleClose}
                  className="px-8 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-[#2D0891]/30 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>

            </div>
          ) : (
            /* ========================================================
               STATE B: CHECKOUT FORM & SUMMARY
            ======================================================== */
            <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Customer, Shipping & Payment Form (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Customer Contact */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-white/70 font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">1</span>
                    Contact Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address (for tracking updates) *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-white/70 font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">2</span>
                    Shipping Address
                  </h3>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Street Address *"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                  <div className="grid sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="City *"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                    <input
                      type="text"
                      name="state"
                      required
                      placeholder="State / Region *"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                    <input
                      type="text"
                      name="zip"
                      required
                      placeholder="ZIP / Postal Code *"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Delivery Method Selection */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-white/70 font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">3</span>
                    Delivery Method
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setShippingMethod('standard')}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === 'standard'
                          ? 'border-[#7C3AED] bg-[#2D0891]/20 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold font-sans">Standard Ground</p>
                        <p className="text-[10px] text-white/50 font-mono">3–5 Business Days</p>
                      </div>
                      <span className="font-mono text-xs font-bold">
                        {freeShipping ? <span className="text-emerald-400">FREE</span> : '$5.99'}
                      </span>
                    </label>

                    <label
                      onClick={() => setShippingMethod('priority')}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === 'priority'
                          ? 'border-[#7C3AED] bg-[#2D0891]/20 shadow-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold font-sans">Priority Express</p>
                        <p className="text-[10px] text-white/50 font-mono">2–3 Business Days</p>
                      </div>
                      <span className="font-mono text-xs font-bold">$12.99</span>
                    </label>
                  </div>
                </div>

                {/* 4. Payment Information (Simulated Encrypted Form) */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-white/70 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">4</span>
                      Payment Method
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-mono">
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Card / Digital Pay</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="Card Number (•••• •••• •••• ••••)"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs font-mono focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                      <CreditCard className="w-4 h-4 text-white/40 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="cardExp"
                        required
                        placeholder="MM / YY"
                        value={formData.cardExp}
                        onChange={handleInputChange}
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs font-mono focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                      <input
                        type="password"
                        name="cardCvc"
                        required
                        placeholder="CVC / CVV"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        maxLength={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-xs font-mono focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className="w-full py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans text-xs uppercase font-bold tracking-wider transition-all shadow-xl shadow-[#2D0891]/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authorizing Payment...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Place Order · ${orderTotal}</span>
                    </>
                  )}
                </button>

                <p className="text-center font-mono text-[10px] text-white/40">
                  By clicking Place Order, your card will be authorized securely. Tracking info is dispatched immediately.
                </p>

              </div>

              {/* Right Column: Order Summary Sidebar (5 Cols) */}
              <div className="lg:col-span-5 bg-[#141210] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-archivo text-sm font-bold uppercase tracking-tight text-white">
                    Order Summary
                  </h3>
                  <span className="font-mono text-xs text-white/50">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.key} className="flex items-center gap-3 py-2 border-b border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-white p-1 shrink-0 flex items-center justify-center">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs font-semibold text-white truncate">{item.name}</p>
                        <p className="font-mono text-[10px] text-white/50">
                          Size: {item.size} · Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold text-white shrink-0">
                        ${(item.priceNum * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calculations */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Shipping</span>
                    <span>
                      {shippingCost === 0 ? <span className="text-emerald-400 font-semibold">FREE</span> : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Estimated Tax (8%)</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-lg text-white font-black">${orderTotal}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 border-t border-white/5 space-y-2 text-[11px] font-sans text-white/60">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>Free Standard Shipping on orders over $75</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>100% Quality Guaranteed · Official Merch</span>
                  </div>
                </div>

              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
