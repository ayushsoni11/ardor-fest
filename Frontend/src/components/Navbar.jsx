import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ['Events', 'Gallery', 'Team', 'Contact Us'];

  return (
    <div className='fixed bg-[var(--brownbg)] px-2 py-1 sm:rounded-b-3xl min-w-full sm:min-w-[92vw]  z-200  sm:mx-10 items-center flex sm:flex-row justify-between mt-0'>

      {/* Logo */}
      <div className='logo'>
        <img className='w-[12vw] sm:w-[10vw] sm:h-[10vh]' src="images/RA_FINGERPRINT.png" alt="logo" />
      </div>

      {/* Hamburger Button - visible only on mobile */}
      <div className="sm:hidden ">
        <button onClick={toggleMenu} className="text-[var(--cream2bg)] text-3xl ">
          {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Nav Links + Buttons (Desktop) */}
      <div className='hidden sm:flex flex-row items-center gap-20 justify-between'>
        {navLinks.map((text, i) => (
          <a
            key={i}
            className="cursor-pointer text-[var(--cream2bg)] text-2xl px-3 py-1 rounded-4xl transition-all duration-300 hover:bg-[var(--greenbg)]"
          >
            {text}
          </a>
        ))}

      </div>

      <div className='text-2xl font-semibold hidden sm:block sm:flex flex-row gap-5 justify-between items-center '>
        <button className='bg-[var(--greenbg)] text-[var(--cream2bg)] px-4 py-1 rounded-4xl hover:bg-[var(--creambg)] hover:text-[var(--bluebg)] transition-all duration-300'>
          Login
        </button>
        <button className='bg-[var(--greenbg)] text-[var(--cream2bg)] px-4 py-1 rounded-4xl hover:bg-[var(--creambg)] hover:text-[var(--bluebg)] transition-all duration-300'>
          Sign Up
        </button>

      </div>



      {/* Mobile Menu (only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-[100%] right-0 w-[80vw] bg-[var(--brownbg)] px-4 py-4 flex flex-col items-start gap-4 sm:hidden z-40">
          {navLinks.map((text, i) => (
            <a
              key={i}
              onClick={() => setIsMenuOpen(false)} // close menu on click
              className="text-[var(--cream2bg)] text-lg w-full px-2 py-1 rounded hover:bg-[var(--greenbg)] transition-all duration-300 "
            >
              {text}
            </a>
          ))}
          <div className='flex flex-row gap-20 '>

            <button className='bg-[var(--greenbg)] w-[20vw] text-center text-[var(--cream2bg)] px-2 py-1 rounded-4xl hover:bg-[var(--creambg)] hover:text-[var(--bluebg)] transition-all duration-300'>
              Login
            </button>
            <button className='bg-[var(--greenbg)] w-[20vw] text-center text-[var(--cream2bg)] px-2 py-1 rounded-4xl hover:bg-[var(--creambg)] hover:text-[var(--bluebg)] transition-all duration-300'>
              Sign Up
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;

