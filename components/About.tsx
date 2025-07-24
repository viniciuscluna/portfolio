import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Contact from "./Contact";
import classNames from "classnames";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const [index, setIndex] = useState(0);
  const { t, language } = useLanguage();

  const TEXTS = [
    t('hero.name'),
    t('hero.role'),
    `${t('hero.currentCompany')} Engineer`,
    ".NET & Go Specialist",
    "React Developer",
    "Software Architect",
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 sm:py-0 pt-24 sm:pt-28"
      style={{ overflowX: 'hidden', width: '100vw', maxWidth: '100%' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-20" style={{ overflow: 'hidden' }}>
        <div className="absolute top-[5%] left-[5%] w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-[10%] right-[5%] w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[10%] w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Greeting */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">{t('hero.greeting')}</span>
          </h1>
          <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center">
            <TextTransition
              className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
              springConfig={presets.wobbly}
              inline={true}
              direction="up"
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          {t('hero.role')} at{" "}
          <span className="text-cyan-400 font-semibold">{t('hero.currentCompany')}</span>
          <br />
          {t('hero.description')}
          <br />
          <span className="text-blue-400 text-base sm:text-lg">{t('hero.techStack')}</span>
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2 w-full max-w-4xl mx-auto">
          {["Go", "C#/.NET", "Java", "React/TypeScript", "Azure", "Microservices", "DDD"].map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-8 sm:mb-10">
          <Contact />
        </div>

        {/* CTA Button */}
        <a
          href="#career"
          className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          {language === 'pt' ? 'Explore Minha Jornada' : 'Explore My Journey'}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
