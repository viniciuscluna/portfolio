import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";
import classNames from "classnames";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-detect current section based on scroll position
  useEffect(() => {
    const sections = [
      { id: 'home', index: 0 },
      { id: 'about', index: 1 },
      { id: 'skills', index: 2 },
      { id: 'career', index: 3 },
      { id: 'projects', index: 4 },
      { id: 'contact', index: 5 }
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      // Find the current section based on scroll position
      let currentSection = sections[0]; // Default to home
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      });
      
      setCurrentMenu(currentSection.index);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScrollSpy);
    
    // Call once to set initial state
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <nav className={classNames(
      "fixed w-full z-50 top-0 left-0 transition-all duration-300",
      scrolled 
        ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <Image
              width={40}
              height={40}
              className="h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-400 transition-all duration-300"
              src="/assets/images/vl_logo2.png"
              alt="Vinícius Luna"
            />
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Vinícius Luna
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <MenuItem
                sectionName="home"
                menuName={t('nav.home')}
                setMenu={() => setCurrentMenu(0)}
                isSelected={currentMenu === 0}
              />
              <MenuItem
                sectionName="about"
                menuName={t('nav.about')}
                setMenu={() => setCurrentMenu(1)}
                isSelected={currentMenu === 1}
              />
              <MenuItem
                sectionName="skills"
                menuName={t('nav.skills')}
                setMenu={() => setCurrentMenu(2)}
                isSelected={currentMenu === 2}
              />
              <MenuItem
                sectionName="career"
                menuName={t('nav.career')}
                setMenu={() => setCurrentMenu(3)}
                isSelected={currentMenu === 3}
              />
              <MenuItem
                sectionName="projects"
                menuName={t('nav.projects')}
                setMenu={() => setCurrentMenu(4)}
                isSelected={currentMenu === 4}
              />
              <MenuItem
                sectionName="contact"
                menuName={t('nav.contact')}
                setMenu={() => setCurrentMenu(5)}
                isSelected={currentMenu === 5}
              />
            </div>
            <LanguageSelector />
          </div>

          {/* Mobile menu button and language selector */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={() => setMenuOpened(!menuOpened)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpened ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={classNames(
        "md:hidden transition-all duration-300 ease-in-out",
        menuOpened 
          ? "max-h-80 opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-white/10">
          <MenuItem
            sectionName="home"
            menuName={t('nav.home')}
            setMenu={() => {
              setCurrentMenu(0);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 0}
          />
          <MenuItem
            sectionName="about"
            menuName={t('nav.about')}
            setMenu={() => {
              setCurrentMenu(1);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 1}
          />
          <MenuItem
            sectionName="skills"
            menuName={t('nav.skills')}
            setMenu={() => {
              setCurrentMenu(2);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 2}
          />
          <MenuItem
            sectionName="career"
            menuName={t('nav.career')}
            setMenu={() => {
              setCurrentMenu(3);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 3}
          />
          <MenuItem
            sectionName="projects"
            menuName={t('nav.projects')}
            setMenu={() => {
              setCurrentMenu(4);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 4}
          />
          <MenuItem
            sectionName="contact"
            menuName={t('nav.contact')}
            setMenu={() => {
              setCurrentMenu(5);
              setMenuOpened(false);
            }}
            isSelected={currentMenu === 5}
          />
        </div>
      </div>
    </nav>
  );
};
export default Header;
