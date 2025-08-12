import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
      
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-hunter-green min-h-screen px-8 md:px-12 lg:px-16 pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
      {/* First Container - LET'S TALK standalone */}
      <motion.div
        className="mb-2 md:mb-3 lg:mb-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora text-white leading-tight tracking-tight">
          LET'S TALK
        </h1>
      </motion.div>

      {/* Second Container - Two-column grid for company description and contact form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 xl:gap-20 items-start">
        {/* Left Column - Company description */}
        <motion.div
          className="max-w-sm md:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white text-opacity-90">
            We're Rwanda's trusted partner in baking—supplying bold bakers and food businesses with quality ingredients and tools that deliver results. From product to plate, we help you mix it, perfect it, and scale it—again and again.
          </p>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            {/* First row - Name fields */}
            <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 mb-3 md:mb-4 lg:mb-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name*"
                  className={`w-full bg-wet-sand text-dark-hunter-green placeholder-gray-600 border-none rounded-lg px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-luscious-lime ${
                    errors.firstName ? 'ring-2 ring-red-500' : ''
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name*"
                  className={`w-full bg-wet-sand text-dark-hunter-green placeholder-gray-600 border-none rounded-lg px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-luscious-lime ${
                    errors.lastName ? 'ring-2 ring-red-500' : ''
                  }`}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email field */}
            <div className="mb-3 md:mb-4 lg:mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
                className={`w-full bg-wet-sand text-dark-hunter-green placeholder-gray-600 border-none rounded-lg px-4 py-3 md:px-5 md:py-4 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-luscious-lime ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company field */}
            <div className="mb-3 md:mb-4 lg:mb-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company*"
                className={`w-full bg-wet-sand text-dark-hunter-green placeholder-gray-600 border-none rounded-lg px-4 py-3 md:px-5 md:py-4 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-luscious-lime ${
                  errors.company ? 'ring-2 ring-red-500' : ''
                }`}
                required
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Message field */}
            <div className="mb-4 md:mb-6 lg:mb-8">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message*"
                className={`w-full bg-wet-sand text-dark-hunter-green placeholder-gray-600 border-none rounded-lg px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-luscious-lime h-24 md:h-32 lg:h-40 xl:h-48 resize-none ${
                  errors.message ? 'ring-2 ring-red-500' : ''
                }`}
                required
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group bg-wet-sand text-dark-hunter-green font-sora font-bold rounded-xl overflow-hidden text-sm md:text-base lg:text-lg px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 flex items-center justify-center gap-3 md:gap-4 w-full md:w-auto transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Sliding background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-luscious-lime group-hover:h-full transition-all duration-400 ease-out" />
              
              {/* Text Stack Animation */}
              <div className="relative z-10 overflow-hidden">
                <div className="transform group-hover:-translate-y-full transition-transform duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </div>
                <div className="absolute top-full transform group-hover:-translate-y-full transition-transform duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </div>
              </div>

              {/* Arrow Icon */}
              {!isSubmitting && (
                <div className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 12H21M21 12L14 5M21 12L14 19"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;