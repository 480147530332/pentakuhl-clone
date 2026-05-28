import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const serviceItems = [
    { name: "Air Freight", path: "#" },
    { name: "Sea Freight", path: "#" },
    { name: "Multi Modal Transport", path: "#" },
    { name: "Project Cargo", path: "#" },
    { name: "Custom Broking", path: "#" },
    { name: "Transit Warehouse And Fleet", path: "#" },
  ];

  // Removed old dropdown items array reference

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between lg:justify-center lg:gap-14 uppercase text-[14px] font-semibold tracking-wide text-black relative">
        
        {/* Mobile/Tablet Logo */}
        <Link to="/" className="lg:hidden font-bold normal-case text-[18px] text-orange-500">
          Penta Freight
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
          {/* HOME */}
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            Home
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            About Us
          </Link>

          {/* SERVICES DROPDOWN */}
          <div 
            className="relative group h-[78px] flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors duration-200"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <span>Services</span>
            <ChevronDown size={15} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-300" />
            
            <ul className="absolute top-[78px] left-1/2 -translate-x-1/2 w-[260px] bg-white border border-gray-100 shadow-xl rounded-b-xl py-3 normal-case font-medium text-[13.5px] text-gray-700 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              {serviceItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block px-6 py-2.5 hover:bg-gray-50 hover:text-orange-500 transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- PENTA KÜHL MAIN DIRECT LINK (NO DROPDOWN) --- */}
          <Link 
            to="/pentakuhl"
            className={`${
              location.pathname === "/pentakuhl" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            <span className="font-bold normal-case text-[15px]">
              Penta <span className="text-sky-500">KÜHL</span>
            </span>
          </Link>

          {/* INDUSTRIES */}
          <Link
            to="/industries"
            className={`${
              location.pathname === "/industries" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            Industries
          </Link>

          {/* CAREERS */}
          <Link
            to="/careers"
            className={`${
              location.pathname === "/careers" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            Careers
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "text-orange-500" : "text-black"
            } hover:text-orange-500 transition-colors duration-200`}
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-black hover:text-orange-500 focus:outline-none transition-colors"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <div
        className={`lg:hidden fixed top-[78px] left-0 w-full h-[calc(100vh-78px)] bg-white border-t border-gray-100 z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 uppercase text-[15px] font-semibold tracking-wide">
          <Link to="/" className="pb-2 border-b border-gray-50 hover:text-orange-500">
            Home
          </Link>

          <Link to="/about" className="pb-2 border-b border-gray-50 hover:text-orange-500">
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="flex items-center justify-between w-full pb-2 border-b border-gray-50 text-left uppercase font-semibold"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180 text-orange-500" : ""}`} />
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isServicesDropdownOpen ? "max-h-[300px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
              <ul className="pl-4 normal-case font-medium text-[14px] text-gray-600 flex flex-col gap-3.5 py-2">
                {serviceItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="hover:text-orange-500 block py-1">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Penta Kühl - Direct Link */}
          <Link to="/pentakuhl" className="pb-2 border-b border-gray-50 normal-case font-bold text-[16px]">
            Penta <span className="text-sky-500">KÜHL</span>
          </Link>

          <Link to="/industries" className="pb-2 border-b border-gray-50 hover:text-orange-500">
            Industries
          </Link>
          <Link to="/careers" className="pb-2 border-b border-gray-50 hover:text-orange-500">
            Careers
          </Link>
          <Link to="/contact" className="pb-2 border-b border-gray-50 hover:text-orange-500">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;