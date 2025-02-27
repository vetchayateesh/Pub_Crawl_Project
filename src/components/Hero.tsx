import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to Pub Crawl
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A modern gastropub with traditional values, serving exceptional food and drinks in a warm, inviting atmosphere.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#menu" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
