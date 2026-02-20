import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
};
export default Page;
