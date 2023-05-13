import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
  <div className="rounded-md shadow-sm my-3" role="group">
    <a
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      href="https://github.com/viniciuscluna"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faGithub}
        style={{ fontSize: 15 }}
      />
      Github
    </a>
    <a
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      href="https://www.linkedin.com/in/vinicius-luna-5b1262163/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faLinkedin}
        style={{ fontSize: 15 }}
      />
      LinkedIn
    </a>
  </div>
);

export default Contact;
