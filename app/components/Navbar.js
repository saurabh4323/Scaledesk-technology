"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Careers", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="max-w-[1440px] w-full mx-auto px-6 xl:px-12 h-[80px] flex items-center justify-between">
        {/* Brand */}
        <Link 
          href="/" 
          className="text-white text-[20px] font-bold tracking-tight"
        >
          ScaleDesk<span className="text-[#FF9500]">.</span> Technology
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="group relative text-[#cccccc] hover:text-[#ffffff] text-[14px] font-medium tracking-[0.08em] uppercase py-2 transition-colors duration-300"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF9500] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
          
          <Link 
            href="#" 
            className="ml-6 px-7 py-3 border-[1.5px] border-[#FF9500] text-[#FF9500] text-[14px] font-medium tracking-tight uppercase hover:bg-[#FF9500] hover:text-[#000000] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#1f1f1f]">
          <div className="px-6 py-5 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[#cccccc] text-[14px] font-medium tracking-[0.08em] uppercase hover:text-[#ffffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="#" 
                className="inline-flex justify-center px-7 py-3 border-[1.5px] border-[#FF9500] text-[#FF9500] text-[14px] font-medium tracking-tight uppercase hover:bg-[#FF9500] hover:text-[#000000] transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
