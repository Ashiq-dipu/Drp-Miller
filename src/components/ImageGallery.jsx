import React from 'react';

export default function ImageGallery() {
  const images = [
    {
      src: "/images/brand-speaking.jpg",
      title: "Keynote Delivery",
      subtitle: "Moving audiences from passive listening to radical action",
      span: "md:col-span-2 md:row-span-2",
      height: "h-80 md:h-[480px]"
    },
    {
      src: "/images/ben-crump.jpg",
      title: "Civil Rights Dialogue",
      subtitle: "Town Hall with Attorney Ben Crump",
      span: "md:col-span-1",
      height: "h-64 md:h-[228px]"
    },
    {
      src: "/images/reader-youth.jpg",
      title: "Youth Empowerment",
      subtitle: "Building the next generation of resilient leaders",
      span: "md:col-span-1",
      height: "h-64 md:h-[228px]"
    },
    {
      src: "/images/netroots-stage-1.jpg",
      title: "National Forums",
      subtitle: "Netroots Nation Keynote Stage",
      span: "md:col-span-1",
      height: "h-64 md:h-[228px]"
    },
    {
      src: "/images/brand-coaching.jpg",
      title: "Executive Advisory",
      subtitle: "From the block to the corporate boardroom",
      span: "md:col-span-2",
      height: "h-64 md:h-[228px]"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111215] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold block mb-3">
              Moments of Impact
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12]">
              On stage. In the community. <br />
              <span className="italic">In the boardroom.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm sm:text-base font-light leading-relaxed">
            A visual record of 26+ years dedicated to breaking ceilings, inspiring leaders, and lifting communities across the nation.
          </p>
        </div>

        {/* Asymmetric Editorial Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group shadow-2xl bg-black border border-white/10 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full ${img.height} object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 opacity-90`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  {img.title}
                </span>
                <p className="font-editorial text-lg sm:text-xl text-white font-normal">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

