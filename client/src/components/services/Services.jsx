import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Car, Waves, Sparkles, Layers, ChevronDown, ChevronUp, Umbrella, TreePine, Flower2, Grid } from 'lucide-react';

// Unified Service Card Component
const ServiceCard = ({ title, desc, image, icon: Icon }) => {
  return (
    <div className="group relative bg-white dark:bg-[#0D1628] rounded-2xl overflow-hidden border border-gray-100 dark:border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">

      {/* Top section: Image & Icon Badge */}
      <div className="relative h-64 overflow-hidden">
        {/* Image */}
        <img
          src={image}
          alt={`${title} - Sunny Verma Fiberglass`}
          title={`${title} - Fiberglass Fabrication India`}
          loading="lazy"
          width={400}
          height={256}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay for contrast and aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top-Right Icon Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm dark:bg-[#060C1A]/95 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center text-primary dark:text-[#00A1FF] transform group-hover:rotate-12 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom section: Title & Description */}
      <div className="p-6 flex flex-col flex-grow relative bg-white dark:bg-[#0D1628] transition-colors">
        {/* Hover accent top line effect */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />

        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
          {desc}
        </p>
      </div>

    </div>
  );
};

// Unified Product Card Component
const ProductCard = ({ title, image }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-[#0D1628] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary/40 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 h-full">

      {/* Image Container */}
      <div className="w-full h-56 sm:h-64 overflow-hidden relative">
        <img
          src={image}
          alt={`${title} - Sunny Verma Fiberglass`}
          title={`${title} - Custom Fiberglass Products`}
          loading="lazy"
          width={400}
          height={256}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* Bottom Bar: Title Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-5 flex items-center justify-start flex-grow transition-colors relative">
        {/* Small orange dot indicator */}
        <div className="w-3 h-3 rounded-full bg-secondary shadow-sm mr-4 flex-shrink-0"></div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
      </div>

    </div>
  );
};

// Main Services Component
const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const items = [
    // Services (First 5 items)
    {
      type: "service",
      title: "Industrial FRP Tank Manufacturer & Lamination",
      desc: "Protect industrial tanks from chemical leaks, corrosion, and wear with premium chemical-resistant lamination and fiberglass fabrication.",
      image: "/industrial-frp-tank-lamination.webp",
      icon: Factory
    },
    {
      type: "service",
      title: "Custom Automobile FRP Parts",
      desc: "High-strength, lightweight fiberglass bumpers, panels, and custom vehicle body parts manufactured for commercial and private transport.",
      image: "/custom-automobile-frp-parts.jpg",
      icon: Car
    },
    {
      type: "service",
      title: "Fiberglass Water Park Slides",
      desc: "Highly durable, colorfast, and weather-resistant custom fiberglass slides designed for amusement and theme parks.",
      image: "/fiberglass-water-park-slides.webp",
      icon: Waves
    },
    {
      type: "service",
      title: "Decorative Fiberglass Sculptures",
      desc: "Creative, weather-resistant, and structural fiberglass models and decorative sculptures engineered for museums and theme parks.",
      image: "/decorative-fiberglass-sculpture.jpg",
      icon: Sparkles
    },
    {
      type: "service",
      title: "FRP Sheets & Roofing Solutions",
      desc: "UV-protected, high-durability roofing sheets and structural canopies designed to withstand extreme Indian weather elements.",
      image: "/industrial-frp-roofing-sheets.webp",
      icon: Layers
    },
    // Products (Remaining 4 items)
    {
      type: "service",
      title: "Custom FRP Canopies & Domes",
      desc: "Beautifully styled, weather-resistant entrance canopies and architectural domes fabricated to fit residential and commercial spaces.",
      image: "/custom-frp-molds-canopies.jpg",
      icon: Umbrella
    },
    {
      type: "service",
      title: "FRP Public Benches & Domes",
      desc: "Maintenance-free, rust-resistant, and heavy-duty fiberglass park benches and trash bins for corporate and public settings.",
      image: "/frp-park-benches-dustbins.jpg",
      icon: TreePine
    },
    {
      type: "service",
      title: "Decorative Fiberglass Planters",
      desc: "Premium, lightweight, and corrosion-free fiberglass planters and pots designed for high-end interior landscaping and gardens.",
      image: "/decorative-fiberglass-planters.jpg",
      icon: Flower2
    },
    {
      type: "service",
      title: "Industrial FRP Gratings",
      desc: "Slip-resistant, chemical-proof, and high-load capacity fiberglass floor gratings and walkway covers designed for safety.",
      image: "/industrial-frp-gratings.jpg",
      icon: Grid
    }
  ];

  const displayedItems = showAll ? items : items.slice(0, 6);

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-[#0A1222] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 inline-block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mt-1">
            <span className="text-secondary">Our </span>
            <span className="text-secondary">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary mx-auto mt-6 rounded-full opacity-80 mb-6"></div>
          
          <h3 className="text-xl font-bold uppercase text-primary tracking-wider mb-2">Industries We Serve</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-[16px] leading-relaxed">
            We fabricate custom FRP components and solutions for chemical processing plants, automobile transit industries, municipal infrastructure utilities, amusement water parks, wastewater facilities, and architectural interior/exterior landscaping across North India.
          </p>
        </motion.div>

        {/* Dynamic Grid mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={`${item.type}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {item.type === 'service' ? (
                <ServiceCard title={item.title} desc={item.desc} image={item.image} icon={item.icon} />
              ) : (
                <ProductCard title={item.title} image={item.image} />
              )}
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              if (showAll) {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAll(!showAll);
            }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base bg-gradient-to-r from-[#0077FF] to-[#00A1FF] hover:from-[#0066DD] hover:to-[#0099EE] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>View Less</span>
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>View More</span>
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
