import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  

  const handleThemeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="w-11/12 mx-auto  flex justify-between  p-5 shadow-md shadow-gray-600 bg-white ">
      <h1 className="font-bold text-2xl cursor-pointer px-4 hover:text-blue-700">
        <Link to="/">Sumit Malviya</Link>
      </h1>
      <ul className="flex justify-between px-4">
      <li className="text-xl mx-5 cursor-pointer my-auto hover:text-blue-700">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl mx-5 cursor-pointer my-auto hover:text-blue-700">
          <Link to="/about">About</Link>
        </li>
        <li className="text-xl mx-5 cursor-pointer my-auto hover:text-blue-700">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-xl mx-5 cursor-pointer my-auto hover:text-blue-700">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-5 cursor-pointer my-auto" onClick={handleThemeMode}>
          {isDark ? <CiBrightnessUp size="25px" /> : <MdDarkMode size="25px" />}
        </li>
      </ul>
    </header>
  );
};

export default Header;
