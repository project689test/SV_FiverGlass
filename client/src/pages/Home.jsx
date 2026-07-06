import React, { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import WhyChooseUs from '../components/why/WhyChooseUs';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

// Lazy load offscreen/footer components for Performance SEO (CLS, FCP, INP optimization)
const Testimonials = lazy(() => import('../components/testimonials/Testimonials'));
const Clients = lazy(() => import('../components/clients/Clients'));
const Contact = lazy(() => import('../components/contact/Contact'));

// Smooth visual placeholders to preserve structure and prevent Cumulative Layout Shift (CLS)
const SectionPlaceholder = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center bg-gray-50 dark:bg-[#060C1A] animate-pulse">
    <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      <main className="flex-grow">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="why"><WhyChooseUs /></div>
        
        <Suspense fallback={<SectionPlaceholder />}>
          <div id="testimonials"><Testimonials /></div>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder />}>
          <div id="clients"><Clients /></div>
        </Suspense>
        
        <Suspense fallback={<SectionPlaceholder />}>
          <div id="contact"><Contact /></div>
        </Suspense>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
