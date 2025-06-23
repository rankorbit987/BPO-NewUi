"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ContactUsButton from "../UI/Buttons/contactusBtn";

export default function ClientCaseStudies() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-16 flex flex-col items-start bg-white max-w-[1440px] mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-10 text-black">
          We pride ourselves in delivering above and beyond to all of our clients
        </h1>
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <ContactUsButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-[1200px]">
        {/* Card 1 - With Background Image (wider) */}
        <div 
          className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-5 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer"
          style={{ 
            backgroundImage: "linear-gradient(rgba(67, 50, 42, 0.8), rgba(67, 50, 42, 0.8)), url('/images/ClientCaseImages/clientimg1.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-105"
               style={{ 
                 backgroundImage: "url('/images/ClientCaseImages/clientimg1.webp')",
                 zIndex: -1
               }}>
          </div>
          <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 bg-[#f8d448] text-black font-bold text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 md:py-1.5 rounded-md">
            A4
          </div>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light leading-relaxed md:leading-relaxed max-w-[95%] relative z-10">
            "Leading Resolutions not only delivered the projects and programmes,
            they also reduced our like-for-like programme fees by £1.5m in Year
            one"
          </p>
          <div className="flex justify-between items-end mt-4 sm:mt-6 md:mt-8 relative z-10">
            <span className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider">
              IT Procurement
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#43322a] transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Card 2 - Purple */}
        <div className="bg-[#e4c3f7] rounded-xl flex flex-col justify-between p-5 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] md:col-span-3">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">£1.5m</p> {/* Changed to text-black */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-black mt-3 sm:mt-4 md:mt-5"> {/* Changed to text-black */}
            Saving against delivery fees from previous suppliers
          </p>
        </div>

        {/* Card 3 - Blue */}
        <div className="relative bg-[#98ccf9] rounded-xl flex flex-col justify-between p-5 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] md:col-span-3">
          <div className="flex flex-col h-full justify-between">
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-black"> {/* Changed to text-black */}
              From <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">7</span> days
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium text-black mt-3 sm:mt-4 md:mt-5"> {/* Changed to text-black */}
              to 24 hours for initial customer response, vastly increasing
              overall customer satisfaction
            </p>
          </div>
        </div>

        {/* Card 4 - With Background Image (wider) */}
        <div 
          className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-5 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer"
          style={{ 
            backgroundImage: "linear-gradient(rgba(8, 59, 76, 0.8), rgba(8, 59, 76, 0.8)), url('/images/ClientCaseImages/clientimg2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-105"
               style={{ 
                 backgroundImage: "url('/images/ClientCaseImages/clientimg2.jpg')",
                 zIndex: -1
               }}>
          </div>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light leading-relaxed md:leading-relaxed max-w-[95%] relative z-10 text-end">
            "We share a set of values with Leading Resolutions that includes
            honesty, openness and integrity. We wanted to work with like-minded
            people. That's exactly what we got"
          </p>
          <div className="flex justify-between items-end mt-4 sm:mt-6 md:mt-8 relative z-10">
            <div className="text-end">
              <span className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider block">
                CIO
              </span>
              <span className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider block">
                NHS Property Services
              </span>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#083b4c] transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}