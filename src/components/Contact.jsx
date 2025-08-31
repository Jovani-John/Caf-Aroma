import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6c123e70-b648-423d-882b-da0fdfd7e8fe',
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4 // زيادة التأخير بين العناصر
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // زيادة المسافة في الحركة
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8, // زيادة مدة الحركة
        ease: "easeOut"
      }
    }
  };

  // متغيرات خاصة لكل قسم من أقسام المعلومات
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const SendIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
  );

  const AlertCircleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-30">
        <motion.div
          className="w-full h-full"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full transform rotate-45" 
               style={{
                 clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
               }}>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-25">
        <motion.div
          className="w-full h-full"
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 rounded-full transform -rotate-12" 
               style={{
                 clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
               }}>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto py-16 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Logo */}
        <motion.div className="flex items-center justify-between mb-16" variants={itemVariants}>
          <div className="flex items-center space-x-3">
          
          </div>
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-gray-300 transition-colors">Cocktails</a>
            <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-300 transition-colors">The Art</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="mb-20" 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800"
              variants={itemVariants}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your Email"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Subject"
                  />
                </motion.div>
                
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Your Message"
                  />
                </motion.div>
                
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-300/30 disabled:opacity-70 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <SendIcon />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircleIcon />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircleIcon />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Where to Find Us Section */}
        <motion.div 
          className="text-center text-white" 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-16 text-gray-300"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Where to Find Us
          </motion.h1>
          
          {/* Visit Our Cafe */}
          <motion.div 
            className="space-y-4 mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg uppercase tracking-wider">VISIT OUR CAFE</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-300">
              "Street 9, Maadi, Cairo, Egypt"
            </h2>
          </motion.div>
          
          {/* Contact Us */}
          <motion.div 
            className="space-y-4 mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400 text-lg uppercase tracking-wider">CONTACT US</p>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-light text-gray-300">(+20) 01552568856</p>
              <p className="text-2xl md:text-3xl font-light text-gray-300">jovanijohn40@gmail.com</p>
            </div>
          </motion.div>
          
          {/* Opening Hours */}
          <motion.div 
            className="space-y-6 mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-400 text-lg uppercase tracking-wider">OPEN EVERY DAY</p>
            <div className="space-y-3 text-xl md:text-2xl font-light text-gray-300">
              <motion.p
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                Mon-Thu : 11:00am – 12am
              </motion.p>
              <motion.p
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                Fri : 11:00am – 2am
              </motion.p>
              <motion.p
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Sat : 9:00am – 2am
              </motion.p>
              <motion.p
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              >
                Sun : 9:00am – 1am
              </motion.p>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.0 }}
          >
            <p className="text-gray-400 text-lg uppercase tracking-wider">SOCIALS</p>
            <div className="flex justify-center space-x-8">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              >
                <XIcon />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              >
                <FacebookIcon />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;