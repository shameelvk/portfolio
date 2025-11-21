import { useState } from 'react';
import { skillsData } from '../data/data';
import { FaReact, FaMobile, FaTools, FaPlug } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: FaReact },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'tools', label: 'Tools', icon: FaTools },
    { id: 'integrations', label: 'Integrations', icon: FaPlug },
  ];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container-custom">
        <h2 className="section-title">My Skills</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-gray text-gray-400 hover:text-white hover:bg-dark-gray/80'
              }`}
            >
              <category.icon className="text-lg" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData[activeCategory]?.map((skill, index) => (
              <div
                key={index}
                className="bg-dark-gray p-6 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-red-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
