import React from 'react';

const ServiceCard = ({ title, desc, image, icon }) => {
  return (
    <div className="group relative bg-white dark:bg-[#0D1628] rounded-2xl overflow-hidden border border-gray-100 dark:border-primary/20 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer">
      
      {/* Top section: Image & Icon Badge */}
      <div className="relative h-64 overflow-hidden">
        {/* Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
        />
        
        {/* Gradient Overlay for contrast and esthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Top-Right Icon Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm dark:bg-[#060C1A]/90 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
          <span className="text-2xl" role="img" aria-label="Service Icon">
            {icon}
          </span>
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

export default ServiceCard;
