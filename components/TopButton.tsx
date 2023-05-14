import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopButton = () => (
  <div className="text-center my-4">
    <a
      href="#home"
      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >
      Go to Top
      <FontAwesomeIcon
        className="ml-2 mt-1"
        icon={faArrowUp}
        style={{ fontSize: 15 }}
      />
    </a>
  </div>
);

export default TopButton;
