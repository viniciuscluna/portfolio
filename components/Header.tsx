import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";
import classNames from "classnames";

const Header = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            width={40}
            height={0}
            className="h-8 mr-3"
            src="/assets/images/vllogo.png"
            alt="Vinícius Luna"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vinícius Luna
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setMenuOpened(prev => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            menuOpened ? "" : "hidden"
          )}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <MenuItem
                sectionName="about"
                menuName="About Me"
                setMenu={() => setCurrentMenu(0)}
                isSelected={currentMenu === 0}
              />
            </li>
            <li>
              <MenuItem
                sectionName="career"
                menuName="Career"
                setMenu={() => setCurrentMenu(1)}
                isSelected={currentMenu === 1}
              />
            </li>
            <li>
              <MenuItem
                sectionName="skills"
                menuName="Skills"
                setMenu={() => setCurrentMenu(2)}
                isSelected={currentMenu === 2}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
