import React from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const Career = () => {
  const { t } = useLanguage();
  
  return (
    <section id="career" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('career.title')} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Mercado Livre */}
            <div className="relative flex items-center">
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-sm font-medium">{t('career.mercadolibre.period')}</span>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <Image
                        src="/assets/images/mercado-livre.png"
                        alt="Mercado Livre"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('career.mercadolibre.role')}</h3>
                  <p className="text-purple-400 font-medium mb-3">{t('hero.currentCompany')}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('career.mercadolibre.description')}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Go</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Microservices</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">E-commerce</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dell Technologies */}
            <div className="relative flex items-center">
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <Image
                        src="/assets/images/dell.png"
                        alt="Dell Technologies"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-blue-400 text-sm font-medium">{t('career.dell.period')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('career.dell.role')}</h3>
                  <p className="text-blue-400 font-medium mb-3">Dell Technologies</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('career.dell.description')}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">.NET</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Azure</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Global Scale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cargo */}
            <div className="relative flex items-center">
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-slate-900"></div>
              
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm font-medium">{t('career.actioncargo.period')}</span>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <Image
                        src="/assets/images/action-cargo.png"
                        alt="Action Cargo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('career.actioncargo.role')}</h3>
                  <p className="text-green-400 font-medium mb-3">Action Cargo</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('career.actioncargo.description')}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Full-Stack</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">ERP/CRM</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Foreign Trade</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Business Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('career.education')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FIAP */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                <Image
                  src="/assets/images/fiap.jpg"
                  alt="FIAP"
                  width={32}
                  height={32}
                  className="object-contain rounded"
                />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('career.fiap.title')}</h4>
              <p className="text-purple-400 font-medium mb-2">FIAP</p>
              <p className="text-gray-400 text-sm">{t('career.fiap.period')}</p>
            </div>

            {/* FATEC */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                <Image
                  src="/assets/images/fatec.jpg"
                  alt="FATEC"
                  width={32}
                  height={32}
                  className="object-contain rounded"
                />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('career.fatec.title')}</h4>
              <p className="text-blue-400 font-medium mb-2">FATEC Zona Sul</p>
              <p className="text-gray-400 text-sm">{t('career.fatec.period')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
