import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { title: "FRP Storage Tanks", image: "/tank.webp" },
    { title: "Custom Canopies", image: "/molds.jpg" },
    { title: "Park Benches & Dustbins", image: "/banches.jpg" },
    { title: "Planters & Pots", image: "/planters.jpg" },
    { title: "FRP Gratings", image: "/gratings.jpg" },
    { title: "Ducting Systems", image: "/duct.jpg" },
    { title: "FRP Doors", image: "/products/doors.jpg" },
    { title: "FRP Sheets", image: "/products/sheets.jpg" },
    { title: "FRP Louvers", image: "/products/louvers.jpg" }
  ];

  const displayedProducts = showAll ? products : products.slice(0, 6);

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
    <section className="w-full py-20 bg-white dark:bg-[#060C1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 inline-block">
            Our Catalog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mt-1 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-6 rounded-full opacity-80"></div>
        </motion.div>

        {/* Dynamic Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {displayedProducts.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              className="h-full rounded-2xl bg-white dark:bg-[#0D1628] shadow-sm transform transition-all duration-300"
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic View All Toggle Button */}
        {products.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none flex items-center gap-2"
            >
              {showAll ? "View Less" : "View All Products"}
              <svg className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Products;
