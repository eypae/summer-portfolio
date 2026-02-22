import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Listings from "@/components/Listings";
import Services from "@/components/Services";

const Page = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Listings />
        <Services />
      </main>
      <Footer />
    </div>
  );
};
export default Page;
