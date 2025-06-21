"use client"
import React from 'react'
import Image from 'next/image'

export default function AccoladesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-5 sm:px-10 md:px-16 lg:px-20 text-black">
      {/* Intro paragraph */}
      <div className="mb-10 sm:mb-14 md:mb-16">
        <p className="text-2xl sm:text-3xl md:text-4xl leading-normal sm:leading-relaxed md:leading-relaxed">
          We are the alternative to the Big 4. We are technology consultants with a difference; we get things done, offering independent advice with your best interests at heart, combining expertise, experience and commercial savvy to deliver your desired business outcomes.
        </p>
      </div>
      
      <div className="ml-auto max-w-4xl w-full">
        {/* Border line */}
        <div className="border-t border-black mb-8 sm:mb-10 md:mb-12"></div>

        <h2 className="text-3xl sm:text-4xl font-medium mb-8 sm:mb-10 text-left">Accolades</h2>

        {/* First accolade - Financial Times */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image 
              src="/Images/IntroductionImages/0.jpg"
              alt="Financial Times Badge"
              width={250}
              height={100}
              className="object-contain w-full max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              We are delighted to be recognised by the Financial Times as one of the UK's Leading Management Consultants 2025 for the fifth year running. This achievement highlights our expertise in Consumer Goods & Retail, Data Analytics & Big Data, Digital Transformation, and IT Strategy, showcasing our credibility to clients, peers, and industry leaders on a globally respected platform.
            </p>
          </div>
        </div>

        {/* Second accolade - MCA Membership */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image 
              src="/Images/IntroductionImages/1.svg"
              alt="MCA Membership"
              width={180}
              height={100}
              className="object-contain w-full max-w-[150px] sm:max-w-[160px] md:max-w-[180px] h-auto"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              Membership in the Management Consultancies Association (MCA) highlights our commitment to upholding the highest industry standards, ethics, and professionalism, while aligning with the UK's most reputable consulting firms to deliver greater value and trusted expertise to our clients.
            </p>
          </div>
        </div>

        {/* Third accolade - Cyber Essentials */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image 
              src="/Images/IntroductionImages/2.png"
              alt="Cyber Essentials Certified"
              width={80}
              height={80}
              className="object-contain w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              We are proud to be Cyber Essentials Certified, demonstrating our commitment to protecting our systems and data against cyber threats. This certification ensures we follow essential security measures to safeguard our business, customers, and partners from cyber risks.
            </p>
          </div>
        </div>

        {/* Fourth accolade - MCA Awards */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image 
              src="/Images/IntroductionImages/3.png"
              alt="MCA 2025 Finalist"
              width={80}
              height={80}
              className="object-contain w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              Leading Resolutions has been selected as a finalist in the Management Consultancies Association (MCA) awards in the Project Category for Social Value, for our collaboration with the European Association for Cardio–Thoracic Surgery (EACTS). The winners will be announced at the awards evening in November.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}