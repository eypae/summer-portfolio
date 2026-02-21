"use client";
import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import VerticalLines from "./VerticalLines";
import Image from "next/image";
import { properties } from "@/constants/constants";

interface Listing {
  title: string;
  type: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  image: string;
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [result, setResult] = useState<object>();

  const handleOnClick = async () => {
    const results = await fetch("/api/propertyguru", {
      method: "POST",
      body: JSON.stringify({}),
    }).then((res) => res.json());
    setResult(results);
  };

  return (
    <section id="listings" className="relative bg-white py-8">
      <VerticalLines color="black" />
      <div className="max-w-360 mx-auto global-padding relative mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.name}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>

      <main className="hero bg-base-200 min-h-screen flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-8">
              Let&apos;s scrape something!
            </h1>
            <p className="mb-2">
              Click the button to test out your new scraper.
            </p>
            <p className="text-sm text-zinc-700 italic mb-6">
              Psst. Make sure you{" "}
              <a
                className="text-blue-500 underline"
                href="https://spacejelly.dev"
                target="_blank"
              >
                build it first
              </a>
              !
            </p>
            <p className="mb-6">
              <button className="button-container bg-blue-500 text-white" onClick={handleOnClick}>
                Get Started
              </button>
            </p>
            {result && (
              <div className="grid">
                <pre className="bg-zinc-200 text-left py-4 px-5 rounded overflow-x-scroll">
                  <code>{JSON.stringify(result, undefined, 2)}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Listings;
