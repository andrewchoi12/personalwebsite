import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-3/4">
      <nav className="container mx-auto py-7">
        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <a href="#" onClick={handleLinkClick} className="text-xl font-bold text-gray-800">Andrew Choi</a>
          <div className="w-6"></div> {/* Empty div for spacing */}
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#about" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 text-center">About</a>
            <a href="#skills" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 text-center">Skills</a>
            <a href="#projects" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 text-center">Projects</a>
            <a href="#resume" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-800 text-center">Resume</a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center w-full justify-center-custom">
          <div className="flex space-x-10 justify-end w-1/4">
            <a href="#about" className="text-lg lg:text-xl text-gray-600 hover:text-gray-800">About</a>
            <a href="#skills" className="text-lg lg:text-xl text-gray-600 hover:text-gray-800">Skills</a>
          </div>
          <a href="#" className="text-3xl lg:text-5xl font-bold text-gray-800 px-10">Andrew Choi</a>
          <div className="flex space-x-10 justify-start w-1/4">
            <a href="#projects" className="text-lg lg:text-xl text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#resume" className="text-lg lg:text-xl text-gray-600 hover:text-gray-800">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;