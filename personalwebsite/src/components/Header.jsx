import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-3/4 min-w-[550px]">
      <nav className="container mx-auto px- py-7">
        <div className="flex items-center w-full justify-center-custom">
          <div className="flex space-x-10 justify-end w-1/4">
            <a href="#about" className="text-2xl sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 hover:text-gray-800">About</a>
            <a href="#skills" className="text-2xl sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 hover:text-gray-800">Skills</a>
          </div>
          <a href="#" className="text-6xl sm:text-lg md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 px-10">Andrew Choi</a>
          <div className="flex space-x-10 justify-start w-1/4">
            <a href="#projects" className="text-2xl sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#resume" className="text-2xl sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 hover:text-gray-800">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;