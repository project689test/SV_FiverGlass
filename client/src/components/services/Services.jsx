import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Industrial Tank FRP Lamination",
      desc: "Protect tanks from corrosion, chemical damage and leakage.",
      image: "/services/tank.jpg",
      icon: "🏭"
    },
    {
      title: "Automobile FRP Parts",
      desc: "Lightweight and high-strength body parts for vehicles.",
      image: "/services/auto.jpg",
      icon: "🚗"
    },
    {
      title: "Water Park Slides",
      desc: "Durable and attractive fiberglass slides for water parks.",
      image: "/services/slides.jpg",
      icon: "🌊"
    },
    {
      title: "Theme Park Sculptures",
      desc: "Creative and weather-resistant fiberglass sculptures.",
      image: "/services/sculpture.jpg",
      icon: "🎢"
    },
    {
      title: "FRP Sheets & Canopies",
      desc: "High-quality roofing sheets and custom canopies.",
      image: "/services/sheets.jpg",
      icon: "🏠"
    },
    {
      title: "Custom FRP Molds",
      desc: "Precision molding for exact product specifications.",
      image: "/services/molds.jpg",
      icon: "📐"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mt-1 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full opacity-80"></div>
        </motion.div>

        {/* Dynamic Service Grid mapping using stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              className="h-full rounded-2xl bg-white dark:bg-[#0D1628] shadow-sm transform transition-all duration-300 "
            >
              <ServiceCard {...item} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
