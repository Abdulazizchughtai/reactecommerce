import React, { useState } from 'react';
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handlenav = () => setNav(!nav);

  return (
    <div className="w-full bg-[#000300] text-white px-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-24">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#00df9a]">AzizTech</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/home">Home</Link></li>
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/company">Company</Link></li>
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/resource">Resources</Link></li>
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to ="/help">Help</Link></li>
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/signup">Sign up</Link></li>
        </ul>

        
        <div
          onClick={handlenav}
          className="md:hidden cursor-pointer z-50 hover:scale-110 transition-transform duration-300"
        >
          {nav ? <IoIosClose size={25} /> : <RiMenuSearchLine size={25} />}
        </div>

        
        <div
          className={`md:hidden fixed top-0 right-0 w-[60%] h-full bg-[#000300] border-l border-gray-900 z-40 transition-transform duration-500 ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold text-[#00df9a]">AzizTech</h1>
           
          </div>
          <ul className="uppercase p-4 space-y-4">
          <li className="border-b border-gray-600 pb-2"><Link to="/home" 
          onClick={() => setNav(false)}
    className="hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300"
  >
    Home
  </Link>
</li>

<li className="border-b border-gray-600 pb-2">
  <Link
    to="/company"
    onClick={() => setNav(false)}
    className="hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300"
  >
    Company
  </Link>
</li>

<li className="border-b border-gray-600 pb-2 hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300">
  <Link to ="/resource" 
  onClick={() => setNav(false)}
  >Resources</Link>
</li>

<li className="border-b border-gray-600 pb-2 hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300">
 <Link to ="/help"
 onClick={() => setNav(false)}
 >Help</Link> 
</li>

<li className="border-b border-gray-600 pb-2">
  <Link
    to="/contact"
    onClick={() => setNav(false)}
    className="hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300"
  >
    Contact 
  </Link>
  </li>
  <li className="hover:text-[#00df9a] focus:text-[#00df9a] active:text-[#00df9a] transition duration-300 cursor-pointer"><Link to="/signup"
  onClick={() => setNav(false)}
  >Sign up</Link></li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
