import React from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 01-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Comprehensive Solutions",
    desc: "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo."
  },
  {
    icon: (
      <div className="relative w-11 h-11">
        <div className="absolute inset-0 bg-gray-900 rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] font-bold tracking-widest">EXPERT</span>
        </div>
      </div>
    ),
    title: "Expertise and Experience",
    desc: "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h-2m-2 0H9m6 4H9" />
      </svg>
    ),
    title: "State-of-the-Art Facilities",
    desc: "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-600 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Why us
            </div>

            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Why choose<br />
              <span className="text-gray-400 font-light">Penta Freight.</span>
            </h2>
          </div>

          {/* RIGHT SIDE - FEATURES */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-10 lg:gap-0 lg:divide-x divide-gray-200">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`feature-card ${index !== 0 ? 'lg:pl-10' : ''}`}
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;