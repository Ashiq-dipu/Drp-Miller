import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dr. Paul Miller commanded our 1,200-seat convention hall like no other speaker in our 18-year history. You could hear a pin drop, followed by an immediate standing ovation.",
      author: "Marcus Vance",
      title: "Executive Director, National Leadership Summit",
      badge: "Convention Keynote"
    },
    {
      quote: "His blueprint for urban school leadership isn’t theoretical — he lived it. When he spoke to our district's principals and cabinet, the entire trajectory of our school year shifted.",
      author: "Dr. Elena Ramos",
      title: "Superintendent of Schools, Urban Consortium",
      badge: "School District Leadership"
    },
    {
      quote: "From the Block to the Boardroom opened minds that had been closed for decades. Dr. Miller has a transcendent ability to bridge corporate executives and real community realities.",
      author: "Terrance Coleman",
      title: "VP of People & Culture, Enterprise Global",
      badge: "Corporate Keynote"
    }
  ];

  return (
    <section id="proof" className="py-28 sm:py-36 bg-[#111215] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-semibold block mb-3">
            06 / Testimonials
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12]">
            What happens when <br />
            <span className="italic">he takes the stage.</span>
          </h2>
        </div>

        {/* 3 Clean Editorial Quote Blocks */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col justify-between pt-6 border-t border-white/15">
              <div>
                <p className="font-editorial italic text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
                  “{t.quote}”
                </p>
              </div>

              <div>
                <div className="font-editorial text-lg text-white font-normal">
                  {t.author}
                </div>
                <div className="text-xs text-white/60 font-light mt-0.5">
                  {t.title}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium mt-2">
                  {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
