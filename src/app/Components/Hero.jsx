"use client"
import React from 'react'
import ContactUsButton from '../UI/Buttons/contactusBtn'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-20 py-20 md:py-0">
      <div className="text-center md:text-left w-full ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight sm:leading-snug">
          Your{' '}
          <span className="inline-block relative">
            <div className="flip-wrapper">
              <ul className="flip5">
                <li className="bg-green-400">Get Done</li>
                <li className="bg-blue-400">Build Fast</li>
                <li className="bg-purple-400">Scale Smart</li>
                <li className="bg-yellow-400">Growth</li>
                <li className="bg-pink-400">Results</li>
              </ul>
            </div>
          </span>{' '}
          <br className="hidden sm:block" />
          Technology Consultancy
        </h1>

        <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
          <ContactUsButton />
        </div>
      </div>

      <style jsx>{`
        .flip-wrapper {
          height: 60px;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
          border-radius: 8px;
          
        }

        @media (min-width: 640px) {
          .flip-wrapper {
            height: 70px;
          }
        }

        @media (min-width: 768px) {
          .flip-wrapper {
            height: 80px;
          }
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }

        li {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font: inherit;
          color: black;
          padding: 0 0.75rem;
          border-radius: 8px;
        }

        @media (min-width: 640px) {
          li {
            height: 70px;
            padding: 0 1rem;
          }
        }

        @media (min-width: 768px) {
          li {
            height: 80px;
          }
        }

        .flip5 {
          animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
        }

        @keyframes flip5 {
          0% { margin-top: -300px; }
          5% { margin-top: -240px; }
          20% { margin-top: -240px; }
          25% { margin-top: -180px; }
          40% { margin-top: -180px; }
          45% { margin-top: -120px; }
          60% { margin-top: -120px; }
          65% { margin-top: -60px; }
          80% { margin-top: -60px; }
          85% { margin-top: 0px; }
          99.99% { margin-top: 0px; }
          100% { margin-top: -300px; }
        }

        @media (min-width: 640px) {
          @keyframes flip5 {
            0% { margin-top: -350px; }
            5% { margin-top: -280px; }
            20% { margin-top: -280px; }
            25% { margin-top: -210px; }
            40% { margin-top: -210px; }
            45% { margin-top: -140px; }
            60% { margin-top: -140px; }
            65% { margin-top: -70px; }
            80% { margin-top: -70px; }
            85% { margin-top: 0px; }
            99.99% { margin-top: 0px; }
            100% { margin-top: -350px; }
          }
        }

        @media (min-width: 768px) {
          @keyframes flip5 {
            0% { margin-top: -400px; }
            5% { margin-top: -320px; }
            20% { margin-top: -320px; }
            25% { margin-top: -240px; }
            40% { margin-top: -240px; }
            45% { margin-top: -160px; }
            60% { margin-top: -160px; }
            65% { margin-top: -80px; }
            80% { margin-top: -80px; }
            85% { margin-top: 0px; }
            99.99% { margin-top: 0px; }
            100% { margin-top: -400px; }
          }
        }
      `}</style>
    </section>
  )
}