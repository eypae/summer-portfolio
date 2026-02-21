import PropertyImage1 from "@/public/images/PropertyImage1.jpg";
import PropertyImage2 from "@/public/images/PropertyImage2.jpg";
import PropertyImage3 from "@/public/images/PropertyImage3.jpg";
import PropertyImage4 from "@/public/images/PropertyImage4.jpg";
import PropertyImage5 from "@/public/images/PropertyImage5.jpg";
import PropertyImage6 from "@/public/images/PropertyImage6.jpg";

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
    name: "422A Northshore Drive",
    price: "S$988,000",
    type: "HDB",
    beds: 3,
    baths: 2,
  },
  {
    photo: PropertyImage2,
    name: "Joo Chiat Place",
    price: "S$6,300,000",
    type: "Terraced House",
    beds: 5,
    baths: 6,
  },
  {
    photo: PropertyImage3,
    name: "The Giverny Residences",
    price: "S$9,979,000",
    type: "Condominium",
    beds: 4,
    baths: 5,
  },
  {
    photo: PropertyImage4,
    name: "8 @ Mount Sophia",
    price: "S$1,430,000",
    type: "Condominium",
    beds: 1,
    baths: 1,
  },
  {
    photo: PropertyImage5,
    name: "Watertown",
    price: "S$1,199,999",
    type: "Condominium",
    beds: 3,
    baths: 2,
  },
  {
    photo: PropertyImage6,
    name: "Mosella, Muswell Hill",
    price: "S$4,899,999",
    type: "Bungalow",
    beds: 5,
    baths: 5,
  },
];
