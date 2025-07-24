import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../contexts/LanguageContext";

const TopButton = () => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center py-8 bg-slate-900">
      <a
        href="#home"
        className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
      >
        {language === 'pt' ? 'Voltar ao Topo' : 'Back to Top'}
        <FontAwesomeIcon
          className="ml-2 group-hover:-translate-y-1 transition-transform duration-300"
          icon={faArrowUp}
          style={{ fontSize: 16 }}
        />
      </a>
    </div>
  );
};

export default TopButton;
