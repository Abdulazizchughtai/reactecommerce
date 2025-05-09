
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/signup");
  };

  return (
    <div className="w-full bg-[#000300] text-white px-4">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-24">
        <h1 className="text-3xl font-bold text-[#00df9a]">AzizTech</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/resource">Resources</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            {user ? (
              <button onClick={handleLogout} className="hover:text-[#00df9a] transition">Sign out</button>
            ) : (
              <Link to="/signup" className="hover:text-[#00df9a] transition">Sign up</Link>
            )}
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 cursor-pointer">
          {nav ? <IoIosClose size={25} /> : <RiMenuSearchLine size={25} />}
        </div>


        <ul className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-[#000300] text-white flex flex-col items-center justify-center space-y-8 text-xl transition-transform duration-300 ${nav ? "translate-x-0" : "translate-x-full"}`}>
          <li onClick={toggleNav}><Link to="/home">Home</Link></li>
          <li onClick={toggleNav}><Link to="/company">Company</Link></li>
          <li onClick={toggleNav}><Link to="/resource">Resources</Link></li>
          <li onClick={toggleNav}><Link to="/help">Help</Link></li>
          <li onClick={toggleNav}><Link to="/contact">Contact</Link></li>
          <li>
            {user ? (
              <button onClick={() => { handleLogout(); toggleNav(); }} className="hover:text-[#00df9a] transition">Sign out</button>
            ) : (
              <Link to="/signup" onClick={toggleNav} className="hover:text-[#00df9a] transition">Sign up</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
