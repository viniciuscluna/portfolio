import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')} <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Featured</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - Portfolio */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4">
                <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <span className="text-4xl">💼</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('projects.portfolio.title')}</h3>
              <p className="text-gray-400 mb-6 text-sm">
                {t('projects.portfolio.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium">Tailwind</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/viniciuscluna/portfolio"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
                >
                  {t('projects.sourceCode')}
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Harry Potter App */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4">
                <Image
                  src="/assets/images/HP.png"
                  className="w-full h-48 object-contain"
                  width={550}
                  height={500}
                  alt="Harry Potter App"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('projects.harryPotter.title')}</h3>
              <p className="text-gray-400 mb-6 text-sm">
                {t('projects.harryPotter.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React Query</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">TypeScript</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://react-harry-app.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  {t('projects.viewProject')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/viniciuscluna/react-harry-app"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
                >
                  {t('projects.sourceCode')}
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        {/* Project 3 - .NET 7 Logging API */}
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4">
              <Image
                src="/assets/images/net-core.png"
                className="w-full h-48 object-contain"
                width={500}
                height={400}
                alt="NET Core"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('projects.netCore.title')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('projects.netCore.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">.NET 7</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs font-medium">Docker</span>
            </div>
            <a
              href="https://github.com/viniciuscluna/LoggingReaderCompose"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
            >
              {t('projects.sourceCode')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Project 4 - Java Sales Infrastructure */}
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4">
              <Image
                src="/assets/images/spring.png"
                className="w-full h-48 object-contain"
                width={500}
                height={520}
                alt="Java Spring"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('projects.javaSales.title')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('projects.javaSales.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">Java Spring</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">Kafka</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Docker</span>
            </div>
            <a
              href="https://github.com/viniciuscluna/letscode-compose"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
            >
              {t('projects.sourceCode')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Project 5 - Oficina na Nuvem */}
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4 flex items-center justify-center">
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Oficina</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('projects.oficina.title')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('projects.oficina.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Next.js</span>
              <span className="px-3 py-1 bg-black/20 text-gray-300 rounded-full text-xs font-medium">Vercel</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://smart-oficina-ui.vercel.app"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                {t('projects.liveDemo')}
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="https://github.com/viniciuscluna/oficina-na-nuvem"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
              >
                {t('projects.sourceCode')}
              </a>
            </div>
          </div>
        </div>

        {/* Project 6 - DDD Sample */}
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4 flex items-center justify-center">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">DDD</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('projects.ddd.title')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('projects.ddd.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">C#</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">.NET</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">DDD</span>
            </div>
            <a
              href="https://github.com/viniciuscluna/Domain-Driven-Design-Sample"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
            >
              {t('projects.sourceCode')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Project 7 - Mercado na Nuvem */}
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-6 rounded-xl overflow-hidden bg-white/10 p-4 flex items-center justify-center">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">Mercado</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('projects.mercado.title')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('projects.mercado.description')}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">React</span>
              <span className="px-3 py-1 bg-black/20 text-gray-300 rounded-full text-xs font-medium">Vercel</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://mercado-nuvem.vercel.app"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
              >
                {t('projects.liveDemo')}
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="https://github.com/viniciuscluna/mercado-na-nuvem"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
              >
                {t('projects.sourceCode')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
