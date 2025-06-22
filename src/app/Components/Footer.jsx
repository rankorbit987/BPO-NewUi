"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import GetInTouchButton from "../UI/Buttons/GetInTouchBtn";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 pt-16 pb-10 text-sm overflow-x-hidden">
      {/* Top CTA Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        {/* CTA Text + Avatars */}
        <div className="flex-1">
          <div className="flex items-center mb-6 overflow-hidden">
            {[
              "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            ].map((src, i) => (
              <img
                key={i}
                src={src + "?w=96&q=80"}
                alt={`Team ${i + 1}`}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white object-cover ${
                  i > 0 ? "-ml-4" : ""
                } ${i === 0 ? "z-20" : i === 1 ? "z-10" : "z-0"}`}
              />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
            Talk to one of our
            <br />
            <span className="font-medium">friendly team members</span>
            <br />
            Let’s do something brilliant together.
          </h2>
          <div className="mt-6 sm:mt-8">
            <GetInTouchButton />
          </div>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col items-start text-left w-full sm:w-auto">
          <div className="relative group w-full sm:w-72 h-40 sm:h-44 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
              alt="Careers"
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <a
              href="#"
              className="absolute bottom-2 right-2 w-10 h-10 rounded-full flex items-center justify-center bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <h3 className="text-lg font-semibold mt-4">Careers</h3>
          <p className="mt-1 max-w-xs text-sm text-gray-300">
            Work with the UK’s Very Best Business Focused Technology
            Consultancy.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Awards Row */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-10 mb-10 overflow-hidden">
        <img
          src="/Images/IntroductionImages/0.jpg"
          alt="FT Award"
          className="h-12 sm:h-16 object-contain"
        />
        <img
          src="/Images/IntroductionImages/1.svg"
          alt="MCA"
          className="h-8 sm:h-10 object-contain"
        />
        <img
          src="/Images/IntroductionImages/2.png"
          alt="Cyber Essentials"
          className="h-8 sm:h-10 object-contain"
        />
        <img
          src="/Images/IntroductionImages/3.png"
          alt="MCA 2025"
          className="h-8 sm:h-10 object-contain"
        />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-4 overflow-hidden">
        {/* Policy Links */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
  <a href="#about-us" className="hover:text-white transition">About us</a>
  <a href="#services-section" className="hover:text-white transition">Services</a>
  <a href="/" className="hover:text-white transition">Careers</a>
  <a href="/" className="hover:text-white transition">Journal</a>
</div>

        {/* Social Icons & Credit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-gray-500 text-xs sm:text-sm">Follow Us On</span>
          <div className="flex gap-2 overflow-hidden">
            {[
              { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
              { icon: <FaXTwitter className="w-5 h-5" />, link: "#" },
              { icon: <FaInstagram className="w-5 h-5" />, link: "#" },
              { icon: <FaFacebook className="w-5 h-5" />, link: "#" },
              { icon: <FaPinterest className="w-5 h-5" />, link: "#" },
              { icon: <FaTiktok className="w-5 h-5" />, link: "#" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center transition hover:bg-white hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
