import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: "💻",
      skills: [
        { name: "Go", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "C#", level: 95, color: "from-blue-500 to-indigo-500" },
        { name: ".NET", level: 95, color: "from-blue-600 to-cyan-600" },
        { name: "Java", level: 80, color: "from-orange-500 to-red-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-teal-600" },
        { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      title: t('skills.frontend'),
      icon: "🎨",
      skills: [
        { name: "ReactJS", level: 90, color: "from-cyan-500 to-blue-500" },
        { name: "NextJS", level: 85, color: "from-gray-800 to-gray-600" },
        { name: "Redux Toolkit", level: 80, color: "from-blue-600 to-cyan-600" },
        { name: "Zustand", level: 75, color: "from-orange-500 to-red-500" },
        { name: "React Testing Library", level: 80, color: "from-green-500 to-teal-500" },
        { name: "SASS", level: 85, color: "from-teal-500 to-blue-500" },
      ]
    },
    {
      title: t('skills.backend'),
      icon: "⚙️",
      skills: [
        { name: "Web API", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "MVC", level: 90, color: "from-indigo-500 to-blue-500" },
        { name: "Entity Framework", level: 90, color: "from-blue-500 to-teal-500" },
        { name: "Dapper", level: 85, color: "from-green-500 to-blue-500" },
        { name: "RabbitMQ", level: 75, color: "from-orange-500 to-red-500" },
        { name: "SignalR", level: 70, color: "from-cyan-500 to-teal-500" },
      ]
    },
    {
      title: t('skills.architecture'),
      icon: "🏗️",
      skills: [
        { name: "Microservices", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Domain-Driven Design", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "SOLID Principles", level: 90, color: "from-green-500 to-teal-500" },
        { name: "Dependency Injection", level: 90, color: "from-blue-600 to-cyan-600" },
        { name: "Factory Pattern", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Hexagonal Architecture", level: 75, color: "from-indigo-500 to-blue-500" },
      ]
    },
    {
      title: t('skills.databases'),
      icon: "🗄️",
      skills: [
        { name: "SQL Server", level: 90, color: "from-red-500 to-orange-500" },
        { name: "MySQL", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-teal-500" },
        { name: "Elasticsearch", level: 70, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      title: t('skills.cloud'),
      icon: "☁️",
      skills: [
        { name: "Azure", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "AWS", level: 70, color: "from-orange-500 to-yellow-500" },
        { name: "Kubernetes", level: 75, color: "from-blue-600 to-teal-600" },
        { name: "Git Flow", level: 90, color: "from-gray-700 to-gray-500" },
        { name: "Azure DevOps", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "GitLab", level: 80, color: "from-orange-600 to-red-600" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title')} <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px rgba(139, 92, 246, 0.3)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('skills.certifications')} & {t('skills.languages.spoken')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                {t('skills.certifications')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Microsoft Azure Fundamentals</span>
                  <span className="text-blue-400 text-sm">2022</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">MTA: Software Development Fundamentals</span>
                  <span className="text-blue-400 text-sm">2021</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cambridge English: First (FCE)</span>
                  <span className="text-blue-400 text-sm">2016</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🌐</span>
                {t('skills.languages.spoken')}
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{t('skills.portuguese')}</span>
                    <span className="text-green-400 font-medium">{t('skills.native')}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{t('skills.english')}</span>
                    <span className="text-blue-400 font-medium">{t('skills.advanced')}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
