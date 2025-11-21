const About = () => {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="relative">
              <div className="border-[20px] border-white pb-8">
                <img
                  src="/assets/img/profile.jpg"
                  alt="Mohammed Shameel VK"
                  className="w-full h-[400px] object-cover -mt-16 ml-10 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              I'm Mohammed Shameel...
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a Front End and Mobile App Developer with a Bachelor of Science degree in 
              Computer Science from the University of Calicut. With <span className="text-primary font-semibold">1.7 years 
              of professional experience</span>, I specialize in building responsive and user-friendly 
              web and mobile applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My expertise lies in <span className="text-primary font-semibold">React Native, Next.js, and React.js</span>, 
              where I've successfully delivered high-quality applications. I'm proficient in integrating 
              REST APIs, implementing state management solutions, and creating seamless user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I have a proven ability to collaborate in Agile teams and contribute to fast development 
              cycles. As a quick learner focused on performance, clean code, and improving user experience, 
              I'm always seeking opportunities to grow and add value to software development teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
