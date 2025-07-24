import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 my-6">
      <a
        className="group flex items-center px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start max-w-xs"
        href="https://github.com/viniciuscluna"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="mr-3 group-hover:rotate-12 transition-transform duration-300"
          icon={faGithub}
          style={{ fontSize: 18 }}
        />
        <span className="font-medium">{t('contact.github')}</span>
      </a>
      <a
        className="group flex items-center px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start max-w-xs"
        href="https://www.linkedin.com/in/viniciuscluna"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="mr-3 group-hover:rotate-12 transition-transform duration-300"
          icon={faLinkedin}
          style={{ fontSize: 18 }}
        />
        <span className="font-medium">{t('contact.linkedin')}</span>
      </a>
    </div>
  );
};

export default Contact;
