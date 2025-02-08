import { useState, useEffect } from "react";
import logomain from "../assets/logomain-removebg-preview (1).png";
import facebook from "../assets/facebooklogo-removebg-preview.png";
import twitter from "../assets/twitterlogo-removebg-preview.png";
import instagram from "../assets/instagramlogo-removebg-preview.png";
import glogo from "../assets/g+logo-removebg-preview.png";
import travelagencytag from "../assets/Travelagencytag.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timer, setTimer] = useState(null);


  // Function to handle opening dropdown
  const handleMouseEnter = (setDropdown) => {
    if (timer) clearTimeout(timer); // Clear any existing timer
    setDropdown(true);
  };

  // Function to handle closing dropdown with delay
  const handleMouseLeave = (setDropdown) => {
    const newTimer = setTimeout(() => {
      setDropdown(false);
    }, 200); // Delay of 500ms (adjust as needed)
    setTimer(newTimer);
  };

 

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const icon1 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
    </svg>
  );

  const icon2 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
    </svg>
  );

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-neutral-950 max-h-[8vh] w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 fixed top-0 left-0 z-50">
  <img src={logomain} className=" pt-12 sm:pt-8 h-auto max-h-[12vh]" alt="Logo" />
  <Link to="/Buynow">
    <button className="bg-lime-500 text-white  px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base">
      Buy Now
    </button>
  </Link>
</div>
<div className="border-t border-teal-500 border-[2px] fixed top-[8vh] w-full z-50"></div>

<div className="bg-neutral-50 h-auto min-h-[8vh] w-full flex flex-wrap items-center justify-between px-4 sm:px-8 py-2 mt-[8vh]">
  <div className="flex flex-wrap items-center gap-x-1 sm:space-x-2">
    {icon1}
    <a
      href="mailto:support@travelagency.com"
      className="text-gray-400 text-xs sm:text-sm"
    >
      support@travelagency.com
    </a>
    <span className="hidden sm:inline text-gray-400">|</span>
    {icon2}
    <a href="tel:+9173386831" className="text-gray-400 text-xs sm:text-sm">
      +91 73386831
    </a>
  </div>

  <div className="flex flex-wrap items-center gap-x-2 sm:space-x-4 mt-2 sm:mt-0">
    <select className="border-gray-300 border px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-400">
      <option value="en">English</option>
      <option value="fr">German</option>
      <option value="es">Russian</option>
    </select>
    <div className="flex gap-2 sm:gap-4">
      <img src={facebook} alt="Facebook" className="h-4 sm:h-5" />
      <img src={twitter} alt="Twitter" className="h-4 sm:h-5" />
      <img src={instagram} alt="Instagram" className="h-4 sm:h-5" />
      <img src={glogo} alt="Google+" className="h-4 sm:h-5" />
    </div>
  </div>
</div>


{/* //////////////////////////// */}

      <nav className="bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
  <img src={travelagencytag} className="h-[80px]" alt="Travel Agency Tag" />

  {/* Mobile and Desktop Menu */}
  <ul className="hidden md:flex space-x-8">
  <li
        className="relative"
        onMouseEnter={() => handleMouseEnter(setHomeDropdown)}
        onMouseLeave={() => handleMouseLeave(setHomeDropdown)}
      >
      <Link
        to="/Home"
        className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]"
      >
        Home
      </Link>
      {homeDropdown && (
        <ul className="absolute top-full left-0 bg-white shadow-lg border rounded-md mt-2 w-48 z-30">
          <li className="hover:bg-teal-100">
            <Link to="/Home" className="block px-4 py-2 text-gray-700">
              Home Version 1
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/Home" className="block px-4 py-2 text-gray-700">
              Home Version 2
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/homevd" className="block px-4 py-2 text-gray-700">
              Home Version 3
            </Link>
          </li>
        </ul>
      )}
    </li>

    {/* Other menu items */}
    <li>
      <Link
        to="/about"
        className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/Gallery"
        className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]"
      >
        Gallery
      </Link>
    </li>

    {/* Pages Dropdown */}
    <li
        className="relative"
        onMouseEnter={() => handleMouseEnter(setPagesDropdown)}
        onMouseLeave={() => handleMouseLeave(setPagesDropdown)}
      >
      <p className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]">
        Pages
      </p>
      {pagesDropdown && (
        <ul className="absolute top-full left-0 bg-white shadow-lg border rounded-md mt-2 w-48 z-30">
          <li className="hover:bg-teal-100">
            <Link to="/Flight" className="block px-4 py-2 text-gray-700">
              Flights
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/Hotel" className="block px-4 py-2 text-gray-700">
              Hotels
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/rentacar" className="block px-4 py-2 text-gray-700">
              Rent a Car
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/cruises" className="block px-4 py-2 text-gray-700">
              Cruises
            </Link>
          </li>
        </ul>
      )}
    </li>

    {/* Blog Dropdown */}
    <li
        className="relative"
        onMouseEnter={() => handleMouseEnter(setBlogDropdown)}
        onMouseLeave={() => handleMouseLeave(setBlogDropdown)}
      >
      <Link
        to="/blog"
        className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]"
      >
        Blog
      </Link>
      {blogDropdown && (
        <ul className="absolute top-full left-0 bg-white shadow-lg border rounded-md mt-2 w-48 z-30">
          <li className="hover:bg-teal-100">
            <Link to="/blog" className="block px-4 py-2 text-gray-700">
              Right Blog
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/blog" className="block px-4 py-2 text-gray-700">
              Left Blog
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/blog" className="block px-4 py-2 text-gray-700">
              Right Post
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/blog" className="block px-4 py-2 text-gray-700">
              Left Post
            </Link>
          </li>
          <li className="hover:bg-teal-100">
            <Link to="/blog" className="block px-4 py-2 text-gray-700">
              Full Post
            </Link>
          </li>
        </ul>
      )}
    </li>

    {/* Contacts link */}
    <li>
      <Link
        to="/Contacts"
        className="text-gray-500 hover:text-teal-400 hover:underline underline-offset-[52px]"
      >
        Contacts
      </Link>
    </li>
  </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
{/* Mobile Menu (Hamburger) */}
{/* Adjustments for mobile view (visible on smaller screens) */}
<div className="md:hidden">
  <button onClick={toggleMobileMenu} className="text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
  {mobileMenuOpen && (
    <ul className="space-y-4 py-4 px-6">
      <li>
        <button
          className="text-gray-500 hover:text-teal-400 w-full text-left"
          onClick={() => toggleDropdown(setHomeDropdown)}
        >
          Home
        </button>
        {homeDropdown && (
          <ul className="pl-4">
            <li>
              <Link to="/Home" className="text-gray-500 block py-2">
                Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/Home" className="text-gray-500 block py-2">
                Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/Homevideo" className="text-gray-500 block py-2">
                Home Version 3
              </Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <Link to="/about" className="text-gray-500 block py-2">
          About Us
        </Link>
      </li>

      <li>
        <Link to="/Gallery" className="text-gray-500 block py-2">
          Gallery
        </Link>
      </li>

      {/* Pages Dropdown */}
      <li>
        <button
          className="text-gray-500 hover:text-teal-400 w-full text-left"
          onClick={() => toggleDropdown(setPagesDropdown)}
        >
          Pages
        </button>
        {pagesDropdown && (
          <ul className="pl-4">
            <li>
              <Link to="/Flight" className="text-gray-500 block py-2">
                Flights
              </Link>
            </li>
            <li>
              <Link to="/Hotel" className="text-gray-500 block py-2">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/rentacar" className="text-gray-500 block py-2">
                Rent a Car
              </Link>
            </li>
            <li>
              <Link to="/cruises" className="text-gray-500 block py-2">
                Cruises
              </Link>
            </li>
          </ul>
        )}
      </li>

      {/* Blog Dropdown */}
      <li>
        <button
          className="text-gray-500 hover:text-teal-400 w-full text-left"
          onClick={() => toggleDropdown(setBlogDropdown)}
        >
          Blog
        </button>
        {blogDropdown && (
          <ul className="pl-4">
            <li>
              <Link to="/blog" className="text-gray-500 block py-2">
                Right Blog
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-500 block py-2">
                Left Blog
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-500 block py-2">
                Right Post
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-500 block py-2">
                Left Post
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-500 block py-2">
                Full Post
              </Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <Link to="/Contacts" className="text-gray-500 block py-2">
          Contacts
        </Link>
      </li>
    </ul>
  )}
</div>
</nav>


 </div>
  );
};
export default Navbar;
