import PropertyImage1 from "@/public/images/PropertyImage1.jpg";
import PropertyImage2 from "@/public/images/PropertyImage2.jpg";
import PropertyImage3 from "@/public/images/PropertyImage3.jpg";
import PropertyImage4 from "@/public/images/PropertyImage4.jpg";
import PropertyImage5 from "@/public/images/PropertyImage5.jpg";
import PropertyImage6 from "@/public/images/PropertyImage6.jpg";
import teamworkBlack from "@/public/images/teamwork-black.png";
import marketingBlack from "@/public/images/digital-marketing-black.png";
import videographyBlack from "@/public/images/videography-icon-black.png";
import teamwork from "@/public/images/teamwork.jpg";
import videography from "@/public/images/videography.jpg";
import marketing from "@/public/images/digital-marketing.jpg";

export const awardsBase = [
  { logo: "era" as const, date: "November 2023", title: "STAR ACHIEVER" },
  { logo: "era" as const, date: "March 2024", title: "STAR ACHIEVER" },
  {
    logo: "era" as const,
    date: "March 2024",
    title: "OLYMPIANS TOP\nACHIEVERS",
  },
  {
    logo: "era" as const,
    date: "June 2024",
    title: "OLYMPIANS TOP\nACHIEVERS",
  },
  { logo: "siea" as const, date: "November 2025", title: "Rookies Award" },
  {
    logo: "siea" as const,
    date: "November 2025",
    title: "SALESPERSONS ACHIEVEMENTS\nAWARD (SILVER)",
  },
];

export const navItems = [
  { label: "About Me", id: "about" },
  { label: "Services", id: "services" },
];

export const stats = [
  { value: "100+", label: "Satisfied Clients" },
  { value: "5+", label: "Years of Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export const properties = [
  {
    photo: PropertyImage1,
    name: "32 Margaret Drive",
    price: "S$888,000",
    type: "HDB Flat",
    beds: 2,
    baths: 2,
    src: "https://www.propertyguru.com.sg/listing/hdb-for-sale-32-margaret-drive-60212918",
  },
  {
    photo: PropertyImage2,
    name: "Seascape, Sentosa Cove",
    price: "S$3,999,999",
    type: "Apartment",
    beds: 3,
    baths: 3,
    src: "https://www.propertyguru.com.sg/listing/for-sale-seascape-sentosa-cove-60149000",
  },
  {
    photo: PropertyImage3,
    name: "125 Bukit Merah View",
    price: "S$888,000",
    type: "HDB Flat",
    beds: 3,
    baths: 2,
    src: "https://www.propertyguru.com.sg/listing/hdb-for-sale-125-bukit-merah-view-60116299",
  },
  {
    photo: PropertyImage4,
    name: "City Gate, 371 Beach Road",
    price: "S$1,899,999",
    type: "Apartment",
    beds: 3,
    baths: 2,
    src: "https://www.propertyguru.com.sg/listing/for-sale-city-gate-60203901",
  },
  {
    photo: PropertyImage5,
    name: "The Seawind, Telok Kurau",
    price: "S$1,190,000",
    type: "Condominium",
    beds: 2,
    baths: 1,
    src: "https://www.propertyguru.com.sg/listing/for-sale-the-seawind-telok-kurau-60220650",
  },
  {
    photo: PropertyImage6,
    name: "J Gateway, Gateway Drive",
    price: "S$1,560,000",
    type: "Condominium",
    beds: 2,
    baths: 2,
    src: "https://www.propertyguru.com.sg/listing/for-sale-j-gateway-25620498",
  },
];

export const services = [
  {
    icon: videographyBlack,
    iconAlt: "videography-icon",
    title: "Professional Photography\n& Videography",
    description:
      "Capture your property through high-quality photos and cinematic video tours that make a strong first impression and create an emotional connection with potential buyers.",
    hoverImage: videography,
  },
  {
    icon: marketingBlack,
    iconAlt: "marketing-icon",
    title: "Digital Marketing",
    description:
      "Reach the right buyers through targeted social media campaigns that showcase your property to qualified audiences across multiple platforms.",
    hoverImage: marketing,
  },
  {
    icon: teamworkBlack,
    iconAlt: "collaboration-icon",
    title: "Networking, Database &\nCobroke Agents",
    description:
      "Leverage my extensive network of industry connections and buyer database to find the right match and negotiate the best deal for your property.",
    hoverImage: teamwork,
  },
];
