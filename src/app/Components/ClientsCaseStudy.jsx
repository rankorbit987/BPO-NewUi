"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ContactUsButton from "../UI/Buttons/contactusBtn";

export default function ClientCaseStudies() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-16 flex flex-col items-start mx-auto bg-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-10 text-black">
        Real Results. Real Businesses. Real Growth.
      </h1>

      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <ContactUsButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">

        {/* Case 1 - Customer Support */}
        <div className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-5 md:p-8 min-h-[320px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/ClientCaseImages/customer-support.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed relative z-10">
            "BPO Brigade transformed our customer support. Customers now get help much faster."
          </p>
          <div className="flex justify-between items-end mt-8 relative z-10">
            <span className="text-sm md:text-lg font-semibold uppercase tracking-wider">
              National Retailer
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Statistic 1 - Customer Support Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-5 md:p-8 min-h-[320px] md:col-span-3 group transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/ClientCaseImages/customer-support-metrics.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <p className="text-3xl lg:text-6xl font-bold text-white">85%</p>
          <p className="text-base md:text-xl font-medium text-white mt-4">
            Same-day resolution for 85% of customer issues
          </p>
        </div>

        {/* Statistic 2 - Back Office Metrics */}
        <div className="relative rounded-xl overflow-hidden flex flex-col justify-between p-5 md:p-8 min-h-[320px] md:col-span-3 group transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/ClientCaseImages/time-savings.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <p className="text-3xl lg:text-6xl font-bold text-white">300+</p>
          <p className="text-base md:text-xl font-medium text-white mt-4">
            Hours saved monthly with back-office automation
          </p>
        </div>

        {/* Case 2 - Back Office Automation */}
        <div className="relative rounded-xl overflow-hidden text-white flex flex-col justify-between p-5 md:p-8 min-h-[320px] md:col-span-4 group transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(rgba(8,59,76,0.7), rgba(8,59,76,0.7)), url('/images/ClientCaseImages/backoffice-automation.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed relative z-10">
            "BPO Brigade rebuilt our back-office — faster operations, fewer errors, big savings."
          </p>
          <div className="flex justify-between items-end mt-8 relative z-10">
            <span className="text-sm md:text-lg font-semibold uppercase tracking-wider">
              Financial Services Provider
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-all duration-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}