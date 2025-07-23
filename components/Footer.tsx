import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900/10 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Vinícius Luna</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>📍</span>
              <span>{t('footer.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.home')}
              </a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.about')}
              </a>
              <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.skills')}
              </a>
              <a href="#career" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.career')}
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.projects')}
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('nav.contact')}
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.connect')}</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/vinicius-luna-80014914a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/viniciuscluna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-gray-600/20 hover:border-gray-500/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:viniciuscluna@hotmail.com"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Vinícius Luna. {t('footer.rights')}
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{t('footer.madeWith')}</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>{t('footer.using')}</span>
              <span className="text-blue-400 font-medium">Next.js</span>
              <span>&</span>
              <span className="text-purple-400 font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
