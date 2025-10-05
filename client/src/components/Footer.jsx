import React from "react";
import brandlogo from "../assets/brand-logo.png";
import { scrollToSection } from "../utils/scroll";

function Footer() {
  return (
    <div className="p-4 lg:px-8 lg:py-6 xl:px-18 xl:py-10">
      <footer className="grid-cols-2 sm:grid-cols-none footer sm:footer-horizontal bg-main text-base-content">
        <img src={brandlogo} width={70} alt="logo" />
        <nav>
          <h6 className="opacity-100 footer-title font-bold text-black">
            Products
          </h6>
          <a className="link link-hover">New Arrivals</a>
          <a
            onClick={() => scrollToSection("best-sellers-section")}
            className="link link-hover"
          >
            Best Selling
          </a>
          <a className="link link-hover">Exclusive Discount</a>
        </nav>
        <nav>
          <h6 className="opacity-100 footer-title font-bold text-black">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="opacity-100 footer-title font-bold text-black">
            Follow Us
          </h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
        </nav>
      </footer>
      <div className="divider"></div>
      <footer className="footer footer-center bg-main">
        <aside className="grid-flow-col items-center italic font-thin text-xs">
          <p>© 2024 SimpliSeaTee. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
