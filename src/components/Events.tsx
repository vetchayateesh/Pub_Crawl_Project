import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Music, Users, Utensils } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
};

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events: Event[] = [
    {
      id: 1,
      title: 'Live Jazz Night',
      date: 'Every Friday, 8pm',
      description: 'Enjoy the smooth sounds of our resident jazz trio while sipping on our signature cocktails.',
      icon: <Music className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Wine Tasting Evening',
      date: 'First Thursday of the month, 7pm',
      description: 'Sample a selection of fine wines paired with complementary small plates.',
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Sunday Roast',
      date: 'Every Sunday, 12pm-4pm',
      description: 'Our famous Sunday roast with all the trimmings, perfect for family gatherings.',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Private Dining',
      date: 'Available upon request',
      description: 'Host your special occasion in our elegant private dining room, with bespoke menus.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

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
    <section id="events" className="section bg-interior-pattern bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container-custom relative z-10 text-white">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="section-subtitle">Join Us</h2>
          <h3 className="section-title">Upcoming Events</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-accent"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full text-white">
                  {event.icon}
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">{event.title}</h4>
                  <p className="text-accent mb-2">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Book an Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;