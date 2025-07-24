import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'pt' ? 'Sobre' : 'About'} <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Engenheiro de Software com experiência em desenvolvimento de soluções inovadoras, especializado em arquiteturas escaláveis e tecnologias modernas.' 
              : 'Software Engineer with experience in developing innovative solutions, specialized in scalable architectures and modern technologies.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {language === 'pt' ? 'Minha História' : 'My Story'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'pt' 
                  ? 'Engenheiro de Software com experiência no desenvolvimento de soluções inovadoras para e-commerce no Mercado Livre, utilizando tecnologias como Go, C# e Java. Possuo sólida vivência na criação de aplicações globais de larga escala na Dell Technologies e atualmente aprofundo meus conhecimentos em Arquitetura de Software na FIAP.'
                  : 'Software Engineer with experience in developing innovative e-commerce solutions at Mercado Livre, using technologies like Go, C#, and Java. I have solid experience creating large-scale global applications at Dell Technologies and am currently deepening my knowledge in Software Architecture at FIAP.'
                }
              </p>
              <p className="text-gray-300 leading-relaxed">
                {language === 'pt'
                  ? 'Busco aplicar minha experiência em padrões de projeto, Domain-Driven Design e sistemas robustos para construir soluções de alta performance e escalabilidade. Minha paixão está em criar arquiteturas que transformem negócios e proporcionem experiências excepcionais aos usuários.'
                  : 'I seek to apply my experience in design patterns, Domain-Driven Design, and robust systems to build high-performance and scalable solutions. My passion lies in creating architectures that transform businesses and provide exceptional user experiences.'
                }
              </p>
            </div>
          </div>

          {/* Stats or Skills */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
              <div className="text-gray-300 text-sm">
                {language === 'pt' ? 'Anos de Experiência' : 'Years of Experience'}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-gray-300 text-sm">
                {language === 'pt' ? 'Empresas de Tecnologia' : 'Tech Companies'}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300 text-sm">
                {language === 'pt' ? 'Certificações' : 'Certifications'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
