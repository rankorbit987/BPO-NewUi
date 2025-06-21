"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white px-[20px] lg:px-20 py-4 ">
      <div className="flex justify-between items-center w-full text-black">
        {/* Logo */}
        <div className="text-2xl font-light">
          <span className="font-bold">leading</span>resolutions
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-semibold text-black">
              Case Studies
            </Link>
            <Link href="/" className="font-semibold text-black">
              About us
            </Link>
            <Link href="/" className="font-semibold text-black">
              Careers
            </Link>
            <Link href="/" className="font-semibold text-black">
              Journal
            </Link>
          </div>
          <div className="ml-20">
            <Link href="/">
              <button className="border border-black rounded-full px-6 py-2 font-semibold text-black transition duration-300 hover:bg-blue-500 hover:text-white">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="focus:outline-none" aria-label="Open menu">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-l-3xl shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <Link href="/" className="text-xl font-semibold">
            Case Studies
          </Link>
          <Link href="/" className="text-xl font-semibold">
            About us
          </Link>
          <Link href="/" className="text-xl font-semibold">
            Careers
          </Link>
          <Link href="/" className="text-xl font-semibold">
            Journal
          </Link>
          <Link href="/">
            <button className="mt-8 border border-white rounded-full px-8 py-3 font-semibold text-black bg-white transition duration-300 hover:bg-blue-500 hover:text-white">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
