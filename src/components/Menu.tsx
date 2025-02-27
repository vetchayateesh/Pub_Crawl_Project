import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const menuCategories: MenuCategory[] = [
    {
      id: 'starters',
      name: 'Starters',
      items: [
        {
          id: 1,
          name: 'Crispy Calamari',
          description: 'Lightly dusted and fried, served with lemon aioli',
          price: '£9.50',
        },
        {
          id: 2,
          name: 'Wild Mushroom Arancini',
          description: 'Crispy risotto balls with truffle mayo',
          price: '£8.95',
        },
        {
          id: 3,
          name: 'Smoked Salmon',
          description: 'With pickled cucumber, dill crème fraîche',
          price: '£10.50',
        },
        {
          id: 4,
          name: 'Roasted Beetroot Salad',
          description: 'With goat cheese, walnuts and honey dressing',
          price: '£8.25',
        },
      ],
    },
    {
      id: 'mains',
      name: 'Main Courses',
      items: [
        {
          id: 5,
          name: 'Slow-Roasted Pork Belly',
          description: 'With apple purée, crackling and cider jus',
          price: '£18.95',
        },
        {
          id: 6,
          name: 'Pan-Seared Sea Bass',
          description: 'With crushed new potatoes, samphire and lemon butter sauce',
          price: '£21.50',
        },
        {
          id: 7,
          name: 'Aged Sirloin Steak',
          description: '28-day aged beef with triple-cooked chips and peppercorn sauce',
          price: '£26.95',
        },
        {
          id: 8,
          name: 'Wild Mushroom Risotto',
          description: 'With truffle oil and parmesan crisp',
          price: '£16.50',
        },
      ],
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 9,
          name: 'Sticky Toffee Pudding',
          description: 'With butterscotch sauce and vanilla ice cream',
          price: '£7.95',
        },
        {
          id: 10,
          name: 'Dark Chocolate Fondant',
          description: 'With salted caramel ice cream',
          price: '£8.50',
        },
        {
          id: 11,
          name: 'Lemon Posset',
          description: 'With shortbread and fresh berries',
          price: '£7.25',
        },
        {
          id: 12,
          name: 'Cheese Selection',
          description: 'Local and continental cheeses with crackers and chutney',
          price: '£10.95',
        },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        {
          id: 13,
          name: 'House Red Wine',
          description: 'Smooth and medium-bodied',
          price: '£6.50 / £24.95',
        },
        {
          id: 14,
          name: 'Craft Beer Selection',
          description: 'Ask your server for today\'s selection',
          price: '£5.95',
        },
        {
          id: 15,
          name: 'Signature Cocktails',
          description: 'Seasonal ingredients, expertly mixed',
          price: '£9.95',
        },
        {
          id: 16,
          name: 'Artisan Coffee',
          description: 'Locally roasted beans',
          price: '£3.50',
        },
      ],
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="menu" className="section bg-secondary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-subtitle">Culinary Delights</h2>
          <h3 className="section-title">Our Menu</h3>
        </motion.div>

        <div className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {menuCategories
                .find((cat) => cat.id === activeCategory)
                ?.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif font-bold">{item.name}</h4>
                      <span className="text-accent font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;