"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BusinessTrust() {
  const [activeImage, setActiveImage] = useState(1);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setActiveImage(index + 1);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Heading */}
      <div className=" mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 max-w-5xl leading-tight">
        Trusted by businesses for well over two decades, at the heart of our consultancy is a promise of true independence and brilliant delivery.
      </h2>
      </div>

      <div
        className="flex flex-col lg:flex-row gap-8 md:gap-12"
        ref={containerRef}
      >
        {/* Desktop Image Container - Hidden on Mobile */}
        <div className="hidden lg:block lg:w-1/2 h-[400px] md:h-[500px] lg:min-h-[70vh] sticky top-24 self-start">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image 1 */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeImage === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image
                  src="/Images/BusinessTrustImages/frame1.svg"
                  alt="Real World Experience"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeImage === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image
                  src="/Images/BusinessTrustImages/frame2.svg"
                  alt="Ceaseless Dedication"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeImage === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image
                  src="/Images/BusinessTrustImages/frame3.svg"
                  alt="Innovative Solutions"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text content with mobile images */}
        <div className="lg:w-1/2 space-y-16">
          {/* Section 1 */}
          <section ref={sectionRefs[0]} className="scroll-mt-24">
            {/* Mobile Image 1 - Visible only on mobile */}
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image
                src="/Images/BusinessTrustImages/frame1.svg"
                alt="Real World Experience"
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Real World Experience
            </h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              No home grown consultants here...our team all have industry
              experience, having held IT leadership positions in industry for
              many years. We recognise the importance of being with you
              throughout the whole lifecycle of concept to benefit realisation
              and ensure that the same people who talk to you upfront see the
              project through to fruition. As independent market experts, we
              ensure that our advice is tailored exclusively to benefit you. We
              are emotionally invested in your success, by your success,
              blending advanced business strategies with cutting-edge digital
              solutions.
            </p>
          </section>

          {/* Section 2 */}
          <section ref={sectionRefs[1]} className="scroll-mt-24">
            {/* Mobile Image 2 - Visible only on mobile */}
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image
                src="/Images/BusinessTrustImages/frame2.svg"
                alt="Ceaseless Dedication"
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ceaseless Dedication
            </h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              At Leading Resolutions "Ceaseless Dedication" isn't just a
              motto—it's the core of our practice. Our relentless commitment to
              driving your business forward is evident in every strategy we
              design and every solution we implement. We stay ahead of the curve
              to ensure your business does too. Our relentless commitment to
              driving your business forward is evident in every strategy we
              design and every solution we implement. We stay ahead of the curve
              to ensure your business does too.
            </p>
          </section>

          {/* Section 3 */}
          <section ref={sectionRefs[2]} className="scroll-mt-24">
            {/* Mobile Image 3 - Visible only on mobile */}
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image
                src="/Images/BusinessTrustImages/frame3.svg"
                alt="Innovative Solutions"
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Innovative Solutions
            </h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              Our innovative approach combines the latest technologies with
              proven methodologies to deliver solutions that are both
              cutting-edge and reliable. We don't just follow trends—we set
              them, ensuring your business remains competitive in an
              ever-changing digital landscape. Our relentless commitment to
              driving your business forward is evident in every strategy we
              design and every solution we implement. We stay ahead of the curve
              to ensure your business does too.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}