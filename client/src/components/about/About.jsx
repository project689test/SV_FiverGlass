import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const checkList = [
    "Premium Quality FRP Materials",
    "On-Time Custom Fabrication Delivery",
    "Expert Technical Fiberglass Engineering Team",
    "Tailored Industrial FRP Solutions"
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 tracking-wide text-gray-900 dark:text-white">
              <span className="text-primary">We </span>
              <span className="text-secondary">Who</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Based in Noida, Delhi NCR, Sunny Verma Fiberglass (FRP) Products Manufacturer has established itself as an industry leader with over 20 years of experience. We specialize in custom fiberglass products and high-quality Fiberglass Reinforced Plastic (FRP) fabrication services across Punjab, Haryana, Delhi, Chandigarh, and all of India.
            </p>

            <ul className="space-y-4 mb-8">
              {checkList.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#00A1FF] flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 text-[17px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Mission & Manufacturing Process Boxes */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="relative bg-gradient-to-r from-orange-50 to-orange-50/20 dark:from-gray-800 dark:to-gray-900 rounded-r-xl border-l-[6px] border-orange-500 p-6 md:p-8 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 text-[16px] leading-relaxed">
                  To continuously deliver robust, innovative, and cost-effective fiber solutions that exceed client expectations, ensuring durability and safety in every mold.
                </p>
              </div>

              <div className="relative bg-gradient-to-r from-blue-50 to-blue-50/20 dark:from-gray-800 dark:to-gray-900 rounded-r-xl border-l-[6px] border-blue-500 p-6 md:p-8 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Manufacturing Process</h3>
                <p className="text-gray-600 dark:text-gray-300 text-[16px] leading-relaxed">
                  Our advanced engineering process begins with custom mold tooling, followed by precise chemical resin formulation, multi-layer glass fiber hand lay-up (FRP lamination), and controlled thermal curing to guarantee lifetime durability.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[300px] lg:h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl group mt-8 lg:mt-0"
          >
            {/* <video
              src="/about-video1.mp4"
              autoPlay
              muted
              loop
              playsInline */}
            <img
              src="/about-sunny-verma-fiberglass.jpg"
              alt="About Sunny Verma Fiberglass - Premium FRP Manufacturer in India"
              title="Sunny Verma Fiberglass Manufacturing Facility"
              loading="lazy"
              width={600}
              height={650}
              className="absolute w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500"
            />

            {/* Overlay Gradient for depth mapping */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent bg-blend-overlay"></div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 dark:bg-[#060C1A]/90 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4">
                <span className="text-primary text-4xl font-extrabold">20+</span>
                <span className="text-gray-800 dark:text-white font-bold leading-tight">
                  Years of <br /> Experience
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

