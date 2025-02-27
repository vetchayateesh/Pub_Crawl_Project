import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Booking request submitted! We will contact you shortly to confirm your reservation.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="section-subtitle">Get in Touch</h2>
          <h3 className="section-title">Contact & Reservations</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-2xl font-serif font-bold mb-6">Book a Table</h4>
              <p className="text-gray-600 mb-6">
                Reserve your table online or call us directly. For parties of 8 or more, 
                please contact us by phone to discuss your requirements.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select</option>
                    {['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Book Now
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-2xl font-serif font-bold mb-6">Find Us</h4>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 mb-6">
                {/* This would be a map in a real application */}
                {/* <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Would Be Here</p>
                </div> */}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Address</h5>
                  <p className="text-gray-600">vadodara - Gujarat</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Phone</h5>
                  <p className="text-gray-600">+91 7013639877</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Email</h5>
                  <p className="text-gray-600">vetchayateesh@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Opening Hours</h5>
                  <p className="text-gray-600">Monday - Friday: 12pm - 11pm</p>
                  <p className="text-gray-600">Saturday: 11am - 11pm</p>
                  <p className="text-gray-600">Sunday: 12pm - 10pm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;