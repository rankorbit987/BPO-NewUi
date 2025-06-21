import Image from "next/image";
import Hero from "./Components/Hero";
import AccoladesSection from "./Components/Introduction";
import Services from "./Components/Services";
import ClientCaseStudies from "./Components/ClientsCaseStudy";
import BusinessTrust from "./Components/BusinessTrust";
import InTheNumbers from "./Components/IntheNumbers";

export default function Home() {
  return (
    <>
    <Hero/>
    <AccoladesSection/>
    <Services/>
    <ClientCaseStudies/>
    <BusinessTrust/>
    <InTheNumbers/>
    </>
  );
}
