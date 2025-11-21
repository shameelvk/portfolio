import { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Mohammed Shameel', 'Developer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/shameelvk', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/shameel__vk', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/shamee.l__', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed-shameel-vk-848816265', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-dark">
      <div className="container-custom">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            I'm <span className="text-primary">{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>
          <p className="text-sm md:text-base tracking-[3px] uppercase font-medium mb-8 text-gray-300">
            Software Developer
          </p>

          {/* Social Links */}
          <ul className="flex space-x-6">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
