import React from "react";

type Props = {
  menuName: string;
  sectionName: string;
  isSelected: boolean;
  setMenu: () => void;
};

const MenuItem = ({ menuName, sectionName, isSelected, setMenu }: Props) => (
  <a
    href={`#${sectionName}`}
    onClick={setMenu}
    className={`
      relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg
      ${isSelected 
        ? 'text-blue-400 bg-white/10' 
        : 'text-gray-300 hover:text-white hover:bg-white/5'
      }
      before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
      before:bg-gradient-to-r before:from-blue-400 before:to-cyan-400 
      before:transform before:scale-x-0 before:transition-transform before:duration-300
      ${isSelected ? 'before:scale-x-100' : 'hover:before:scale-x-100'}
    `}
    aria-current={isSelected ? "page" : "false"}
  >
    {menuName}
  </a>
);

export default MenuItem;
