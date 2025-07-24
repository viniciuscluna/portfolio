import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Contact from "./Contact";

const ContactSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'pt' ? 'Entre em' : 'Get in'} <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">{language === 'pt' ? 'Contato' : 'Touch'}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração.' 
              : 'Let\'s talk about your next project or collaboration opportunity.'
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-gray-300 leading-relaxed">
                {language === 'pt'
                  ? 'Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou apenas para conversar sobre tecnologia. Entre em contato através das minhas redes sociais!'
                  : 'I\'m always open to discussing new opportunities, interesting projects, or just talking about technology. Get in touch through my social networks!'
                }
              </p>
            </div>
            
            <Contact />
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm">
                {language === 'pt'
                  ? 'Respondo normalmente em até 24 horas'
                  : 'I usually respond within 24 hours'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
