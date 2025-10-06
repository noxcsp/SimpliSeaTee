import { useState } from "react";
import brandlogo from "../assets/brand-logo.png";
import { scrollToSection } from "../utils/scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div id="navbar" className="p-4 px-6 navbar bg-main border-b-1 xl:px-24">
      <div className="navbar-start">
        <img src={brandlogo} alt="Logo" width={50} />
        <button className="text-xl title mx-3.5">SimpliSeaTee</button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <button onClick={() => scrollToSection("hero-section")}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("features-section")}>
              Features
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("best-sellers-section")}>
              Products
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("fyp-section")}>
              For You
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("our-story-section")}>
              About
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end sm:flex lg:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="rounded-full btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li>
                <button onClick={() => handleNavClick("hero-section")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("features-section")}>
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("best-sellers-section")}>
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("fyp-section")}>
                  For You
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("our-story-section")}>
                  About
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
