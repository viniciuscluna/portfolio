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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Greeting */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">{t('hero.greeting')}</span>
          </h1>
          <div className="h-20 md:h-24 flex items-center justify-center">
            <TextTransition
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              springConfig={presets.wobbly}
              inline={true}
              direction="up"
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.role')} at{" "}
          <span className="text-yellow-400 font-semibold">{t('hero.currentCompany')}</span>
          <br />
          {t('hero.description')}
          <br />
          <span className="text-purple-400 text-lg">{t('hero.techStack')}</span>
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Go", "C#/.NET", "Java", "React/TypeScript", "Azure", "Microservices", "DDD"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-10">
          <Contact />
        </div>

        {/* CTA Button */}
        <a
          href="#career"
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          {language === 'pt' ? 'Explore Minha Jornada' : 'Explore My Journey'}
          <svg
            className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
