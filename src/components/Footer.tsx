import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Croft House</h4>
            <p className="text-gray-400 mb-4">
              A modern gastropub with traditional values, serving exceptional food and drinks.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 12pm - 11pm</li>
              <li>Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 10pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Vadodara - Gujarat </li>
              <li>limda</li>
            <li>7013639877</li>
              <li>vetchayateesh@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent w-full"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-light px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Croft House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;