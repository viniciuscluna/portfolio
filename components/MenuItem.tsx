import React from "react";

const selectedCss =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
const nonSelectedCss =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

type Props = {
  menuName: string;
  sectionName: string;
  isSelected: boolean;
  setMenu: (item: number) => void;
};

const MenuItem = ({ menuName, sectionName, isSelected, setMenu }: Props) => (
  <a
    href={`#${sectionName}`}
    onClick={() => setMenu(0)}
    className={nonSelectedCss}
    aria-current={isSelected ? "page" : "false"}
  >
    {menuName}
  </a>
);

export default MenuItem;
