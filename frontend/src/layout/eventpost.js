import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

import firstimg from '../img/eventpost/Annual Sports Day.jpeg';
import secondimg from '../img/eventpost/Science Fair.png';
import thirdimg from '../img/eventpost/CulturalFest.png';

const events = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: 'April 5, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'School Ground',
    description: 'Join us for an exciting day of sports and games! Prizes and refreshments available.',
    img: firstimg
  },
  {
    id: 2,
    title: 'Science Fair',
    date: 'May 15, 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'School Auditorium',
    description: 'Explore amazing science projects created by students and participate in fun experiments.',
    img: secondimg
  },
  {
    id: 3,
    title: 'Cultural Fest',
    date: 'June 20, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Open Grounds',
    description: 'Experience the vibrant culture of our school with dance, music, and food stalls.',
    img: thirdimg
  }
];

const EventPost = () => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [-15, 15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const springX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div style={styles.container}>
      {/* Heading Section */}
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Our Latest Event Posts 🎉
      </motion.h2>
      <motion.p
        style={styles.description}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover and participate in our upcoming exciting school events!
      </motion.p>

      {/* Event Cards */}
      <motion.div 
        style={styles.row}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {events.map(event => (
          <motion.div 
            key={event.id} 
            style={styles.col}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              style={{
                ...styles.eventPost,
                transformStyle: 'preserve-3d',
                rotateX: springX,
                rotateY: springY,
                backgroundColor: hovered ? '#f0f0f0' : '#fff',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div style={styles.card}>
                <motion.div 
                  style={styles.cardImgWrapper}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={event.img} 
                    alt={event.title}
                    style={styles.cardImgTop}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <div style={styles.cardBody}>
                  <h5 style={styles.cardTitle}>{event.title}</h5>
                  <p style={styles.cardText}><strong>Date:</strong> {event.date}</p>
                  <p style={styles.cardText}><strong>Time:</strong> {event.time}</p>
                  <p style={styles.cardText}><strong>Location:</strong> {event.location}</p>
                  <p style={styles.cardText}>{event.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '12px',
    padding: '10px',
    // background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  description: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#000',
    // backgroundColor: '#fff',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '20px',
    // boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  col: {
    flex: '1 1 300px',
    maxWidth: '300px',
    transition: 'transform 0.3s ease',
    perspective: '1000px'
  },
  eventPost: {
    marginTop: '20px',
    borderRadius: '12px',
  },
  card: {
    width: '100%',
    height: '500px',
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  },
  cardImgWrapper: {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    borderRadius: '12px 12px 0 0'
  },
  cardImgTop: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  cardBody: {
    padding: '20px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#007bff'
  },
  cardText: {
    color: '#555',
    fontSize: '0.95rem',
    marginBottom: '8px'
  }
};

export default EventPost;
