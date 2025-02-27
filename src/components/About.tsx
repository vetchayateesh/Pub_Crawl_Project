import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-subtitle">Our Story</h2>
          <h3 className="section-title">About Pub Crawl</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-6">
              Established in 2010, Croft House has become a beloved fixture in the community, 
              known for its exceptional food, carefully curated drinks selection, and warm,
              Whether you're joining us for a casual lunch, an intimate dinner, or a special

              inviting atmosphere.
            </p>
            <p className="text-lg mb-6">
              Our head chef brings over 20 years of culinary expertise to create dishes that 
              celebrate local, seasonal ingredients while honoring traditional cooking methods.
            </p>
            <p className="text-lg">
              Whether you're joining us for a casual lunch, an intimate dinner, or a special 
              celebration, we strive to make every visit to Pub Crawl memorable.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Croft House interior" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
