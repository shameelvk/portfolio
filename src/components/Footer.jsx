import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/shameelvk', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/shameel__vk', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/shamee.l__', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed-shameel-vk-848816265', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark py-12 relative">
      <div className="container-custom">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Mohammed Shameel VK. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with <span className="text-primary">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
