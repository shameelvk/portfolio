import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object for Google Apps Script
      const scriptFormData = new FormData();
      scriptFormData.append('name', formData.name);
      scriptFormData.append('email', formData.email);
      scriptFormData.append('subject', formData.subject);
      scriptFormData.append('message', formData.message);
      scriptFormData.append('formGoogleSheetName', 'responses');
      
      // Send to Google Apps Script
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyPf64u0VnhapErbdKX-GmXgCKyWXbEfEPUiujzI98X_vJqfGjdmLX6tpEDnqhXsd2YKw/exec',
        {
          method: 'POST',
          body: scriptFormData,
        }
      );

      const result = await response.json();
      
      if (result.result === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        console.error('Form submission error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Kottakkal, Malappuram, Kerala' },
    { icon: FaPhone, text: '+91 9747298401' },
    { icon: FaEnvelope, text: 'vkshameel1@gmail.com' },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-gray">
      <div className="container-custom">
        <h2 className="section-title">Contact Me</h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/20 p-4 rounded-lg">
                      <info.icon className="text-2xl text-primary" />
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-gray-400 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or 
                  opportunities to be part of your visions. Feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-transparent border border-white rounded-none text-white text-xs font-medium h-12 px-4 uppercase tracking-wider placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-transparent border border-white rounded-none text-white text-xs font-medium h-12 px-4 uppercase tracking-wider placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white rounded-none text-white text-xs font-medium h-12 px-4 uppercase tracking-wider placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white rounded-none text-white text-xs font-medium px-4 py-3 uppercase tracking-wider placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors min-h-[150px] w-full resize-none"
                    rows="6"
                  ></textarea>
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded mb-6">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded mb-6">
                    Something went wrong. Please try again.
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
