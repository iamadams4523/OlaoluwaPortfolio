import { IoMdDownload } from 'react-icons/io';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/Olaoluwa Babatunde Isaac(Resume).pdf';
    link.download = 'Olaoluwa_Babatunde_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize(); // call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex items-center justify-between w-full border-b border-gray-400 p-4">
      {/* Name */}
      <div className="font-semibold font-[poppins] text-purple-600 text-[17px] lg:text-[22px]">
        Olaoluwa Babatunde
      </div>

      {/* Desktop Nav */}
      {!isMobile && (
        <ul className="flex gap-10 font-bold font-[poppins] text-[13px] lg:text-[18px]">
          <li>
            <a href="#about" className="hover:text-purple-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
      )}

      {/* Resume Button */}
      <div
        className="flex items-center space-x-2 p-2 border border-gray-300 rounded-lg hover:bg-purple-500 hover:text-white cursor-pointer"
        onClick={handleDownload}
      >
        <IoMdDownload className="w-3 h-3 lg:w-3 lg:h-4" />
        <p className="font-semibold font-[poppins] text-[11px] lg:text-[16px]">
          Resume
        </p>
      </div>
    </div>
  );
};

export default NavBar;
