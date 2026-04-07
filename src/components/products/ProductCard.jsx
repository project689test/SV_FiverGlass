import React from 'react';

const ProductCard = ({ title, image }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-[#0D1628] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full">
      
      {/* Image Container */}
      <div className="w-full h-56 sm:h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
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

export default ProductCard;
