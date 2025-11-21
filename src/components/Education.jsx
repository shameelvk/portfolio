import { educationData, awardsData } from '../data/data';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark">
      <div className="container-custom">
        <h2 className="section-title">Education & Awards</h2>

        <div className="max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-3xl" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className="bg-dark-gray p-6 md:p-8 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="mt-3 md:mt-0 text-left md:text-right">
                      <p className="text-gray-400 text-sm mb-1">{edu.duration}</p>
                      <p className="text-primary font-semibold">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
              <FaTrophy className="text-3xl" />
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awardsData.map((award, index) => (
                <div
                  key={award.id}
                  className="bg-dark-gray p-6 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-l-4 border-primary animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <FaTrophy className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {award.title}
                      </h4>
                      <p className="text-primary text-sm font-medium mb-2">
                        {award.organization}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
