'use client';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import LinkedinButton from '../UI/Buttons/ContactLinkedinBtn';

export default function ContactUs() {
  return (
    <section id='contact-form' className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
      {/* Left Content */}
      <div className="flex flex-col justify-center space-y-8 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight">
          Drive Innovation in Your <br className="hidden md:inline" /> Business – Contact Us
        </h1>

        <p className="text-base md:text-lg">
          Connect with us to elevate your business through technology. At Leading Resolutions,
          we craft custom business benefiting technology strategies to drive your success.
          Get in touch to lead with innovation.
        </p>

        <div className="w-full flex justify-start">
          <LinkedinButton />
        </div>

        <div>
          <h4 className="text-sm font-medium">Call us</h4>
          <p className="text-lg font-semibold mt-1">01793 488 000</p>
        </div>

        <div>
          <h4 className="text-sm font-medium">Email us</h4>
          <p className="text-lg font-semibold mt-1">hello@leadingresolutions.com</p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div>
            <h4 className="font-semibold">Swindon</h4>
            <p className="text-sm mt-1 leading-relaxed">
              Coped Hall Business Park <br />
              Royal Wootton Bassett <br />
              Swindon <br />
              SN4 8DP
            </p>
            
          </div>

          <div>
            <h4 className="font-semibold">London</h4>
            <p className="text-sm mt-1 leading-relaxed">
              Aldgate Tower <br />
              2 Leman Street <br />
              London <br />
              E1 8FA
            </p>
            
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-[#cba6ff] p-6 sm:p-8 rounded-2xl shadow-md relative text-black">
        <div className="absolute top-6 right-6 flex -space-x-2">
          <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
        </div>

        <h3 className="text-lg font-semibold mb-4">Send Enquiry</h3>
        <p className="text-sm mb-6">If you have any questions, please feel free to drop us a line</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <input
            type="email"
            placeholder="Email*"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            placeholder="Comments / Questions..."
            rows="4"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <label className="flex items-start text-sm gap-2 ">
            <input type="checkbox" className="mt-1 cursor-pointer" />
            <span>
              I agree to receive other communications from Leading Resolutions.
            </span>
          </label>

          <p className="text-xs leading-relaxed">
            You can unsubscribe from these communications at any time. For more information on how to unsubscribe,
            our privacy practices, and how we are committed to protecting and respecting your privacy,
            please review our Privacy Policy. <br /><br />
            By clicking submit below, you consent to allow Leading Resolutions to store and process
            the personal information submitted above to provide you the content requested.
          </p>

          <button
            type="submit"
            className="bg-black text-white rounded-md px-6 py-3 hover:bg-white hover:text-black hover:border-2 transition mt-2 cursor-pointer w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
