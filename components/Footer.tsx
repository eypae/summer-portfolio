"use client";

import React from "react";
import { motion } from "motion/react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaChevronUp,
} from "react-icons/fa";
import prguWhite from "@/public/images/prgu-white.png";
import VerticalLines from "./VerticalLines";
import MiniHeader from "./MiniHeader";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Image, { StaticImageData } from "next/image";

type SocialLink =
  | {
      type: "icon";
      icon: React.ComponentType<{ size?: number; className?: string }>;
      label: string;
      link: string;
    }
  | {
      type: "image";
      icon: StaticImageData;
      label: string;
      link: string;
    };

const socialLinks: SocialLink[] = [
  {
    type: "icon",
    icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/summerxia.23/",
  },
  {
    type: "icon",
    icon: FaFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/p/Summer-Xia-100093416880388/",
  },
  {
    type: "image",
    icon: prguWhite,
    label: "PropertyGuru",
    link: "https://www.propertyguru.com.sg/agent/summer-xia-14203520",
  },
  {
    type: "icon",
    icon: FaWhatsapp,
    label: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=6586687123&text=Hi%20Summer!%20I%20came%20across%20your%20website%20and%20I%20wish%20to%20learn%20more%20about%20your%20service.%20Thanks!",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="footer" className="relative bg-black ">
      <VerticalLines color="white" />
      <div className="global-padding pt-16 md:pt-21">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-8">
          {/* Left Column */}
          <div className="flex flex-col">
            <MiniHeader label="CONTACT ME" dark={true} />
            <div className="mb-5">
              <h2 className="text-white leading-none font-display text-[clamp(32px,5vw,56px)] font-bold mt-6">
                SUMMER XIA
              </h2>
              <p className="text-[#e4e4e4] font-display text-[14px] md:text-[16px] mt-2 font-medium">
                Your personal property consultant
              </p>
            </div>

            {/* Contact Me button */}
            <Link
              href="https://api.whatsapp.com/send?phone=6586687123&text=Hi%20Summer!%20I%20came%20across%20your%20website%20and%20I%20wish%20to%20learn%20more%20about%20your%20service.%20Thanks!"
              target="_blank"
            >
              <button className="button-container bg-white gap-2 hover:bg-gray-300 transition-colors duration-200">
                <p className="text-black text-[16px] font-bold font-display">
                  Contact Me
                </p>
                <GoArrowRight className="text-black" size={20} />
              </button>
            </Link>
          </div>

          {/* Right Column – Year + Social Links */}
          <div className="flex flex-col items-start gap-4 pr-24">
            <p className="text-[#e4e4e4] font-display text-[16px] md:text-[18px] font-medium">
              [2026]
            </p>
            <div className="flex flex-col gap-4 md:gap-6 mt-2">
              {socialLinks.map((link) => (
                <Link href={link.link} key={link.label} target="_blank">
                  <motion.button
                    whileHover={{ x: 2 }}
                    className="flex items-center gap-[14px] cursor-pointer group"
                  >
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      {link.type === "icon" ? (
                        <link.icon
                          size={20}
                          className="text-[#e4e4e4] group-hover:text-white transition-colors duration-200"
                        />
                      ) : (
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      )}
                    </div>

                    <p className="text-[#e4e4e4] text-[14px] md:text-[16px] group-hover:text-white transition-colors duration-200 font-normal">
                      {link.label}
                    </p>
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/30 mt-16 xl:mt-[116px] py-6 flex items-center justify-between">
          <p className="text-[14px] font-normal">
            <span className="text-[#7b7b7b]">© Made By </span>
            <span className="text-white">En Yang</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaChevronUp size={12} className="text-white translate-y-0.5" />
            <p className="text-white text-[14px] font-medium">Back to Top</p>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
