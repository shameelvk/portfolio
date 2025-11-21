import { experienceData } from '../data/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-gray">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative pl-8 md:pl-12 pb-12 border-l-2 border-primary ${
                index === experienceData.length - 1 ? 'pb-0' : ''
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] ring-4 ring-dark-gray"></div>

              {/* Content */}
              <div className="bg-dark p-6 md:p-8 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-0">
                    {exp.position}
                  </h3>
                  <span className="text-primary font-medium text-sm md:text-base">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-primary" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm md:text-base flex">
                      <span className="text-primary mr-3">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-gray text-primary text-xs font-medium rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
