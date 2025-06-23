"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Leading Resolutions offer?",
    answer:
      "We deliver technology strategy, transformation, cyber, cloud, data, and resourcing services tailored to business needs.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our offices are based in Swindon and London, serving clients across the UK and internationally.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We are Cyber Essentials certified and adopt rigorous practices around data governance, compliance, and secure architectures.",
  },
  {
    question: "How can I start a new project?",
    answer:
      "Reach out via our Contact page. Our consultants will connect with you to understand your goals and next steps.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We support clients across finance, healthcare, energy, government, and other sectors undergoing complex transformations.",
  },
  {
    question: "Do you offer interim consulting?",
    answer:
      "Yes, we provide access to expert consultants and specialist teams for interim support across our core service areas.",
  },
  {
    question: "Can you help with merger & acquisition projects?",
    answer:
      "Absolutely. We offer full M&A support—from IT due diligence to post-merger integration and programme management.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our consultants have deep industry experience, often from C-level or senior delivery backgrounds, ensuring credibility and impact.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-white py-16 px-4 sm:px-6 lg:px-20 text-black w-full">
      <div className="">
        {/* Top border above heading */}
        <div className="border-t-[3px] border-black pt-12 mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Frequently Asked Questions
        </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-black font-medium text-lg transition-all cursor-pointer"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`mt-2 text-gray-700 text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
