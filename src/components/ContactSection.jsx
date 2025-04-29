import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: 'Email',
      value: 'sb5757369@gmail.com',
  
    },
    {
      icon: <Phone className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: 'Phone',
      value: '+91 (9971298761)',
      link: 'tel:+9971298761',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: 'Location',
      value: 'N.I.T Faridabad (121005), HR',
      link: 'https://maps.app.goo.gl/nWMosaMYVQ9obwk68',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-primary dark:text-primary-light">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg opacity-0 transition-all duration-1000 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              {isSubmitted && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Thanks for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light`}
                    placeholder="xyz Jack"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.subject
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white dark:text-gray-900 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Currently available for freelance work and full-time opportunities.
              </p>
              <div className="flex items-center gap-2 text-primary dark:text-primary-light">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
