"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-white py-12 sm:py-16 md:py-20 px-5 sm:px-10 md:px-16 lg:px-20 text-black"
    >
      {/* Intro paragraph */}
      <div className="mb-10 sm:mb-14 md:mb-16 max-w-5xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-10 text-black">
          At BPO Brigade, we believe every task deserves genuine care. We began small, serving local clients with one clear focus — quality. Through well-defined processes, continuous feedback, and full accountability, we built strong client trust from day one.
        </h1>
      </div>

      <div className="ml-auto max-w-4xl w-full">
        {/* Border line */}
        <div className="border-t-3 border-black mb-8 sm:mb-10 md:mb-12"></div>

        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-8 sm:mb-10 text-left">
          Our Growth and Values
        </h2>

        {/* Value 1 */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image
              src="/Images/IntroductionImages/0.jpg"
              alt="Integrity"
              width={250}
              height={100}
              className="object-contain w-full max-w-[180px] sm:max-w-[200px] md:max-w-[250px] h-auto"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              Today, we serve clients across industries including technology, retail, finance, and more. Yet, we remain true to our core values: Integrity in every action, Transparency in every update, and Respect for everyone we engage with.
            </p>
          </div>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image
              src="/Images/IntroductionImages/1.svg"
              alt="People Investment"
              width={180}
              height={100}
              className="object-contain w-full max-w-[150px] sm:max-w-[160px] md:max-w-[180px] h-auto"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              We invest deeply in people. Our teams receive ongoing training in empathy and problem-solving. We promote from within, encourage fresh ideas, and allow every team member to influence how we work.
            </p>
          </div>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-10 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image
              src="/Images/IntroductionImages/2.png"
              alt="Tools & Automation"
              width={80}
              height={80}
              className="object-contain w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              We embrace technology to make work smoother. By automating routine tasks, customizing scripts, and using real-time dashboards, we deliver faster and more accurate service while keeping full transparency with our clients.
            </p>
          </div>
        </div>

        {/* Value 4 */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          <div className="md:w-1/4 flex justify-center">
            <Image
              src="/Images/IntroductionImages/3.png"
              alt="Client Success Story"
              width={80}
              height={80}
              className="object-contain w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]"
            />
          </div>
          <div className="md:w-3/4 text-base sm:text-lg leading-relaxed">
            <p>
              One retail client faced soaring support calls. We stepped in, restructured workflows, reduced hold times by 40% within three months, and trained agents on empathetic communication. The result: happier customers and lower costs.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-10 text-base sm:text-lg leading-relaxed">
          <p>
            That is who we are. We listen first, act with care, and always deliver. With BPO Brigade, you gain dependable support, clear reporting, and a trusted partner committed to growing with you.
          </p>
        </div>
      </div>
    </section>
  );
}
