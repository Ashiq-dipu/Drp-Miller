import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ExternalLink, ShoppingBag, X, Check, Truck, ShieldCheck, Sparkles, ChevronRight, Zap } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';
import { SHOP_URL, MERCH } from '../data/merchData';
import { useCart } from '../context/CartContext';

export default function ShopPage({ onOpenBooking }) {
  const { addToCart, openCheckout } = useCart();
  const { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Sync with route parameter or search query
  useEffect(() => {
    const queryId = productId || searchParams.get('product');
    if (queryId) {
      const found = MERCH.find(
        (m) => m.id === queryId || m.href.includes(queryId) || m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === queryId
      );
      if (found) {
        setSelectedProduct(found);
        setSelectedSize(found.sizes[0] || '');
        setQuantity(1);
      }
    }
  }, [productId, searchParams]);

  // Handle opening product modal
  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || '');
    setQuantity(1);
    setIsAdded(false);
    setSearchParams({ product: product.id });
  };

  // Handle closing product modal
  const handleCloseProduct = () => {
    setSelectedProduct(null);
    setIsAdded(false);
    setSearchParams({});
    if (productId) {
      navigate('/shop', { replace: true });
    }
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const size = selectedSize || selectedProduct.sizes[0] || 'L';
    addToCart(selectedProduct, size, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      handleCloseProduct();
    }, 700);
  };

  // Handle direct instant checkout
  const handleInstantCheckout = () => {
    if (!selectedProduct) return;
    const size = selectedSize || selectedProduct.sizes[0] || 'L';
    addToCart(selectedProduct, size, quantity);
    handleCloseProduct();
    openCheckout();
  };

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseProduct();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const categories = ['ALL', 'HOODIES', 'TEES', 'KIDS & BABY', 'ACCESSORIES'];

  const filtered = activeCategory === 'ALL'
    ? MERCH
    : MERCH.filter((p) => p.category === activeCategory);

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC SHOP HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="lrhL7_MFb0k" 
          title="Dr. Paul Miller Sovereign Brand & Monograph Shop" 
        />

        {/* Central Stage: Only Title at Middle Bottom (Always 1 Single Line) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 w-full text-center flex flex-col items-center">
          
          {/* Main Title */}
          <h1 className="font-archivo text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem] font-black uppercase tracking-tight text-white leading-none whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Gutter to Greatness Shop
          </h1>

        </div>

      </section>

      {/* ========================================================
          2. OFFICIAL MERCHANDISE CATALOGUE (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">
        <section id="shop" className="py-16 sm:py-24 border-b border-[#E2DDD3]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            
            {/* Section Header */}
            <div className="mb-10 pb-6 border-b border-[#0B0A09]/10">
              <p className="font-mono text-xs tracking-[0.25em] text-[#2D0891] font-bold uppercase">
                MERCH
              </p>
              <h2 className="mt-2 font-archivo text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B0A09]">
                Gutter to Greatness Shop
              </h2>
              <p className="mt-3 max-w-xl text-[#0B0A09]/75 text-sm sm:text-base leading-relaxed">
                Wear the mission. Tees, hoodies, and everyday gear from the official Dr. Miller store.
              </p>
            </div>

            {/* 2-Column Catalog Layout: Left Filter Sidebar + 3-Per-Row Product Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
              
              {/* Left Sidebar: Filter Categories */}
              <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-28">
                <div className="bg-white rounded-2xl border border-[#E5DFD5] p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD5] mb-4">
                    <h3 className="font-archivo text-xs uppercase tracking-widest font-black text-[#0B0A09]">
                      Categories
                    </h3>
                    <span className="font-mono text-[11px] text-[#2D0891] font-bold">
                      {filtered.length} Items
                    </span>
                  </div>

                  {/* Filter Option Buttons (3 items per row on mobile/tablet, vertical stack on desktop) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2">
                    {categories.map((cat) => {
                      const count = cat === 'ALL'
                        ? MERCH.length
                        : MERCH.filter((p) => p.category === cat).length;
                      const isSelected = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
                            isSelected
                              ? 'bg-[#2D0891] text-white font-bold shadow-md shadow-[#2D0891]/30'
                              : 'bg-[#F4EEE3]/50 hover:bg-[#F4EEE3] text-[#0B0A09]/80 hover:text-[#0B0A09] border border-[#E5DFD5]'
                          }`}
                        >
                          <span className="truncate">{cat}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ml-2 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-[#0B0A09]/5 text-[#0B0A09]/60'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>

              {/* Right Side: 3 Items Per Row Product Grid */}
              <div className="flex-1 min-w-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {filtered.map((m) => (
                    <div
                      key={m.name}
                      onClick={() => handleOpenProduct(m)}
                      className="group rounded-2xl border border-[#E5DFD5] bg-white overflow-hidden hover:border-[#2D0891]/50 hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer select-none"
                    >
                      <div className="aspect-square bg-white overflow-hidden p-4 flex items-center justify-center relative">
                        <img
                          src={m.img}
                          alt={m.name}
                          loading="lazy"
                          onError={(e) => {
                            if (e.currentTarget.src !== m.cdnImg) {
                              e.currentTarget.src = m.cdnImg;
                            }
                          }}
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0B0A09]/0 group-hover:bg-[#0B0A09]/5 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#0B0A09] text-white font-sans text-xs font-bold shadow-lg">
                            View Product
                          </span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 border-t border-[#E5DFD5]/70 bg-white flex flex-col justify-between flex-1">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#2D0891] font-semibold">
                            {m.category}
                          </span>
                          <h3 className="font-archivo text-xs sm:text-sm font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors leading-snug mt-1 line-clamp-2">
                            {m.name}
                          </h3>
                        </div>

                        <div className="mt-3 pt-3 border-t border-[#0B0A09]/5 flex items-center justify-between">
                          <span className="font-mono text-sm sm:text-base font-bold text-[#0B0A09]">
                            {m.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(m, m.sizes[0] || 'L', 1);
                              }}
                              title="Quick Add to Bag"
                              className="w-7 h-7 rounded-full bg-[#2D0891]/10 hover:bg-[#2D0891] hover:text-white text-[#2D0891] flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-sans text-[11px] font-bold text-[#2D0891] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                              <span>Details</span>
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>

      {/* ========================================================
          3. SINGLE PRODUCT MODAL & DETAIL VIEW
      ======================================================== */}
      {selectedProduct && (
        <div 
          onClick={handleCloseProduct}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[28px] sm:rounded-[36px] max-w-4xl w-full overflow-hidden shadow-2xl border border-black/10 my-auto text-[#0B0A09] animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#E5DFD5] flex items-center justify-between bg-[#FAF7F2]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0B0A09]/60">
                <span>Shop</span>
                <span>/</span>
                <span className="text-[#2D0891] font-bold">{selectedProduct.category}</span>
                <span>/</span>
                <span className="truncate max-w-[200px] sm:max-w-none text-[#0B0A09] font-semibold">
                  {selectedProduct.name}
                </span>
              </div>

              <button
                onClick={handleCloseProduct}
                aria-label="Close product view"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#0B0A09] hover:text-white border border-[#E5DFD5] flex items-center justify-center transition-colors cursor-pointer text-[#0B0A09]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: 2-Column Split */}
            <div className="p-6 sm:p-10 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Product Visual */}
              <div className="md:col-span-6 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 flex items-center justify-center border border-[#E5DFD5] relative group">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  onError={(e) => {
                    if (e.currentTarget.src !== selectedProduct.cdnImg) {
                      e.currentTarget.src = selectedProduct.cdnImg;
                    }
                  }}
                  className="w-full h-auto max-h-[360px] object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#2D0891] text-white text-[10px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm">
                  Official Merch
                </span>
              </div>

              {/* Product Details & Actions */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2D0891] font-bold">
                    {selectedProduct.category}
                  </span>
                  <h2 className="font-archivo text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B0A09] mt-1 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-[#0B0A09]">
                      {selectedProduct.price}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-bold uppercase">
                      In Stock
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed">
                  {selectedProduct.desc}
                </p>

                {/* Size Selector */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="uppercase tracking-wider font-bold text-[#0B0A09]">
                      Select Size:
                    </span>
                    <span className="text-[#2D0891] font-semibold">
                      Selected: {selectedSize}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'bg-[#2D0891] text-white shadow-md shadow-[#2D0891]/25 scale-105 border border-[#2D0891]'
                            : 'bg-[#FAF7F2] hover:bg-white text-[#0B0A09] border border-[#E5DFD5]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#0B0A09]">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-[#E5DFD5] rounded-xl bg-[#FAF7F2] overflow-hidden font-mono text-xs font-bold">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-white transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-[#0B0A09] bg-white min-w-[36px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-white transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#2D0891]/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag · {selectedProduct.price}</span>
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={handleInstantCheckout}
                      className="py-3 px-4 rounded-full bg-[#0B0A09] hover:bg-black text-white font-sans font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:scale-[1.01]"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Instant Checkout</span>
                    </button>

                    <button
                      onClick={() => {
                        handleCloseProduct();
                        if (onOpenBooking) onOpenBooking(`Bulk Order: ${selectedProduct.name}`);
                      }}
                      className="py-3 px-4 rounded-full border border-[#0B0A09]/20 hover:border-[#0B0A09] hover:bg-[#FAF7F2] text-[#0B0A09] font-sans font-semibold text-[11px] tracking-wider uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Bulk Inquiries</span>
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <a
                      href={selectedProduct.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#0B0A09]/50 hover:text-[#2D0891] transition-colors"
                    >
                      <span>Also available on Spreadshirt Partner Store</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Perks Checklist */}
                <div className="pt-2 border-t border-[#E5DFD5] grid grid-cols-2 gap-3 text-[11px] font-mono text-[#0B0A09]/70">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#2D0891]" />
                    <span>Tracked Global Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D0891]" />
                    <span>100% Quality Guaranteed</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
