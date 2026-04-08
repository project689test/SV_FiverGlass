import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { logo: "/appu_ghar.png", name: "Appu Ghar" },
    { logo: "/hindustan.jpeg", name: "Hindustan" },
    { logo: "/public/gip.jpeg", name: "GIP" },
    { logo: "/public/logo1.png", name: "Client Logo" },
    { logo: "/public/pollucon.jpg", name: "Pollucon" },
    { logo: "/public/swastik.jpg", name: "Swastik" },
    { logo: "/public/wow.png", name: "Worlds of Wonder" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full py-16 bg-white dark:bg-[#060C1A] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full mb-12"
        >
          <span className="text-gray-500 dark:text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-2 inline-block">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900 dark:text-white">
            Our Clients
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center"
        >
          {clients.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[200px] h-32 flex items-center justify-center p-6 bg-white dark:bg-[#0D1628] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer group relative"
            >
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className="w-full h-16 object-contain transition duration-300" 
              />
              
              {/* Optional Hover Glow element natively hidden */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 blur-xl transition-colors duration-500 pointer-events-none rounded-xl" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Clients;
