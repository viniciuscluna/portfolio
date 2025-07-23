import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.career': 'Carreira',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // About/Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Vinícius Luna',
    'hero.role': 'Engenheiro de Software',
    'hero.description': 'Desenvolvedor apaixonado por criar soluções inovadoras e escaláveis',
    'hero.currentCompany': 'Mercado Livre',
    'hero.techStack': 'Go • C# • Java • React • Microserviços',
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça um pouco sobre minha jornada e paixão pela tecnologia',
    'about.description': 'Sou um Engenheiro de Software apaixonado por resolver problemas complexos e criar soluções inovadoras. Com experiência sólida em desenvolvimento de aplicações escaláveis, atualmente trabalho no Mercado Livre desenvolvendo soluções para e-commerce de alta performance.',
    'about.experience': 'anos de experiência',
    'about.projects': 'projetos entregues',
    'about.technologies': 'tecnologias dominadas',
    'about.companies': 'empresas',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologias e ferramentas que uso para construir aplicações escaláveis e de alta performance',
    'skills.languages': 'Linguagens',
    'skills.frontend': 'Front-End',
    'skills.backend': 'Back-End',
    'skills.architecture': 'Arquitetura & Padrões',
    'skills.databases': 'Bancos de Dados',
    'skills.cloud': 'Cloud & DevOps',
    'skills.summary.title': 'Resumo Profissional',
    'skills.summary.text': 'Engenheiro de Software com experiência no desenvolvimento de soluções inovadoras para e-commerce no Mercado Livre, utilizando tecnologias como Go, C# e Java. Sólida vivência na criação de aplicações globais de larga escala na Dell Technologies e atualmente aprofundando conhecimentos em Arquitetura de Software na FIAP. Busco aplicar minha experiência em padrões de projeto e sistemas robustos para construir soluções de alta performance e escalabilidade.',
    'skills.certifications': 'Certificações',
    'skills.languages.spoken': 'Idiomas',
    'skills.portuguese': 'Português',
    'skills.english': 'Inglês',
    'skills.native': 'Nativo',
    'skills.advanced': 'Avançado',
    
    // Career Section
    'career.title': 'Experiência Profissional',
    'career.subtitle': 'Minha jornada profissional e crescimento contínuo',
    'career.present': 'Presente',
    'career.education': 'Educação',
    'career.mercadolibre.role': 'Engenheiro de Software',
    'career.mercadolibre.period': 'Mar 2023 - Presente',
    'career.mercadolibre.description': 'Desenvolvimento de soluções inovadoras para e-commerce utilizando Go, C# e Java. Trabalhando com arquiteturas de microserviços para sistemas de alta escala e performance.',
    'career.dell.role': 'Desenvolvedor Full Stack Senior',
    'career.dell.period': 'Fev 2021 - Mar 2023',
    'career.dell.description': 'Desenvolvimento de aplicações globais de larga escala utilizando .NET Core, React e Azure. Responsável pela criação de APIs robustas e interfaces modernas.',
    'career.actioncargo.role': 'Desenvolvedor .NET',
    'career.actioncargo.period': 'Jan 2020 - Jan 2021',
    'career.actioncargo.description': 'Desenvolvimento de sistemas logísticos utilizando .NET Framework e SQL Server. Foco em otimização de processos e automação de workflows.',
    'career.fiap.title': 'Pós-Graduação em Arquitetura de Software',
    'career.fiap.period': '2024 - 2025',
    'career.fatec.title': 'Análise e Desenvolvimento de Sistemas',
    'career.fatec.period': '2017 - 2020',
    
    // Projects Section
    'projects.title': 'Projetos',
    'projects.subtitle': 'Alguns dos meus trabalhos recentes mostrando diferentes tecnologias e abordagens',
    'projects.sourceCode': 'Código Fonte',
    'projects.viewProject': 'Ver Projeto',
    'projects.liveDemo': 'Demo ao Vivo',
    
    // Individual Projects
    'projects.portfolio.title': 'Portfólio Pessoal',
    'projects.portfolio.description': 'Meu portfólio pessoal construído com Next.js, TypeScript e Tailwind CSS, apresentando design moderno e sistema de internacionalização.',
    
    'projects.harryPotter.title': 'Harry Potter App',
    'projects.harryPotter.description': 'Descubra e pesquise personagens do universo Harry Potter usando Next.js e React Query com design moderno e responsivo.',
    
    'projects.netCore.title': '.NET 7 Logging API',
    'projects.netCore.description': 'API de logging de alta performance com parsing paralelo, armazenamento MongoDB, UI React e deployment Docker para gerenciamento escalável de logs.',
    
    'projects.javaSales.title': 'Infraestrutura de Vendas Java',
    'projects.javaSales.description': 'Arquitetura de microserviços construída com Java Spring, com Docker, Kafka, MongoDB, Prometheus e API Gateway para escalabilidade empresarial.',
    
    'projects.oficina.title': 'Oficina na Nuvem',
    'projects.oficina.description': 'Sistema de gerenciamento de oficina baseado na nuvem com UI moderna, construído usando TypeScript e implantado na Vercel para performance otimizada.',
    
    'projects.mercado.title': 'Mercado na Nuvem',
    'projects.mercado.description': 'Plataforma de e-commerce construída com TypeScript, apresentando UI/UX moderna, deployment na nuvem e arquitetura escalável para soluções de marketplace online.',
    
    'projects.ddd.title': 'Domain-Driven Design Sample',
    'projects.ddd.description': 'Implementação abrangente de DDD em C# mostrando padrões de arquitetura limpa, modelagem de domínio e melhores práticas para aplicações empresariais.',
    
    // Contact Section
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Pronto para dar vida às suas ideias! Entre em contato para discutirmos como posso ajudar em seu próximo projeto.',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.description': 'Interessado em trabalhar juntos ou apenas quer bater um papo sobre tecnologia? Ficarei feliz em conversar com você!',
    
    // Footer
    'footer.about': 'Engenheiro de Software apaixonado por criar soluções inovadoras e escaláveis. Sempre em busca de novos desafios e oportunidades de crescimento.',
    'footer.location': 'São Paulo, Brasil',
    'footer.quickLinks': 'Links Rápidos',
    'footer.connect': 'Conecte-se',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    'footer.using': 'usando',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.career': 'Career',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // About/Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Vinícius Luna',
    'hero.role': 'Software Engineer',
    'hero.description': 'Passionate developer creating innovative and scalable solutions',
    'hero.currentCompany': 'Mercado Libre',
    'hero.techStack': 'Go • C# • Java • React • Microservices',
    'about.title': 'About Me',
    'about.subtitle': 'Learn a bit about my journey and passion for technology',
    'about.description': 'I\'m a Software Engineer passionate about solving complex problems and creating innovative solutions. With solid experience in developing scalable applications, I currently work at Mercado Libre developing high-performance e-commerce solutions.',
    'about.experience': 'years of experience',
    'about.projects': 'delivered projects',
    'about.technologies': 'mastered technologies',
    'about.companies': 'companies',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I use to build scalable, high-performance applications',
    'skills.languages': 'Languages',
    'skills.frontend': 'Front-End',
    'skills.backend': 'Back-End',
    'skills.architecture': 'Architecture & Patterns',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.summary.title': 'Professional Summary',
    'skills.summary.text': 'Software Engineer with experience developing innovative e-commerce solutions at Mercado Libre, using technologies like Go, C#, and Java. Strong background in creating large-scale global applications at Dell Technologies and currently deepening knowledge in Software Architecture at FIAP. I seek to apply my experience in design patterns and robust systems to build high-performance and scalable solutions.',
    'skills.certifications': 'Certifications',
    'skills.languages.spoken': 'Languages',
    'skills.portuguese': 'Portuguese',
    'skills.english': 'English',
    'skills.native': 'Native',
    'skills.advanced': 'Advanced',
    
    // Career Section
    'career.title': 'Professional Experience',
    'career.subtitle': 'My professional journey and continuous growth',
    'career.present': 'Present',
    'career.education': 'Education',
    'career.mercadolibre.role': 'Software Engineer',
    'career.mercadolibre.period': 'Mar 2023 - Present',
    'career.mercadolibre.description': 'Developing innovative e-commerce solutions using Go, C#, and Java. Working with microservices architectures for high-scale and high-performance systems.',
    'career.dell.role': 'Senior Full Stack Developer',
    'career.dell.period': 'Feb 2021 - Mar 2023',
    'career.dell.description': 'Developing large-scale global applications using .NET Core, React, and Azure. Responsible for creating robust APIs and modern interfaces.',
    'career.actioncargo.role': '.NET Developer',
    'career.actioncargo.period': 'Jan 2020 - Jan 2021',
    'career.actioncargo.description': 'Developing logistics systems using .NET Framework and SQL Server. Focus on process optimization and workflow automation.',
    'career.fiap.title': 'Post-Graduate in Software Architecture',
    'career.fiap.period': '2024 - 2025',
    'career.fatec.title': 'Systems Analysis and Development',
    'career.fatec.period': '2017 - 2020',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my recent work showcasing different technologies and approaches',
    'projects.liveDemo': 'Live Demo',
    'projects.viewProject': 'View Project',
    'projects.sourceCode': 'Source Code',
    'projects.portfolio.title': 'Personal Portfolio',
    'projects.portfolio.description': 'My personal portfolio built with Next.js, TypeScript and Tailwind CSS, featuring modern design and internationalization system.',
    'projects.harryPotter.title': 'Harry Potter App',
    'projects.harryPotter.description': 'Discover and search characters in the Harry Potter universe using Next.js and React Query with a modern, responsive design.',
    'projects.netCore.title': '.NET 7 Logging API',
    'projects.netCore.description': 'High-performance logging API with parallel parsing, MongoDB storage, React UI, and Docker deployment for scalable log management.',
    'projects.javaSales.title': 'Java Sales Infrastructure',
    'projects.javaSales.description': 'Microservices architecture built with Java Spring, featuring Docker, Kafka, MongoDB, Prometheus, and API Gateway for enterprise scalability.',
    'projects.oficina.title': 'Oficina na Nuvem',
    'projects.oficina.description': 'Cloud-based workshop management system with modern UI, built using TypeScript and deployed on Vercel for optimal performance.',
    'projects.mercado.title': 'Mercado na Nuvem',
    'projects.mercado.description': 'E-commerce platform built with TypeScript, featuring modern UI/UX, cloud deployment, and scalable architecture for online marketplace solutions.',
    'projects.ddd.title': 'Domain-Driven Design Sample',
    'projects.ddd.description': 'Comprehensive DDD implementation in C# showcasing clean architecture patterns, domain modeling, and best practices for enterprise applications.',
    
    // Contact Section
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'I\'m always open to new opportunities and interesting conversations',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.description': 'Interested in working together or just want to chat about technology? I\'d be happy to talk with you!',
    
    // Footer
    'footer.about': 'Software Engineer passionate about creating innovative and scalable solutions. Always seeking new challenges and growth opportunities.',
    'footer.location': 'São Paulo, Brazil',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.using': 'using',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
