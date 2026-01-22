import HeroSectionHome from "src/containers/home/HeroSection";
import type { Route } from "./+types/home";
import WeSectionHome from "src/containers/home/WeSection";
import ServicesSectionHome from "src/containers/home/ServicesSection";
import GallerySectionHome from "src/containers/home/GallerySection";
import WeddingSectionHome from "src/containers/home/WeddingSection";
import CorporateSectionHome from "src/containers/home/CorporateSection";
import BTLSectionHome from "src/containers/home/BTLSection";
import MarketingSectionHome from "src/containers/home/MarketingSection";
import TestimonialsSectionHome from "src/containers/home/Testimonials";
import ContactSection from "src/components/Contact";
import PartnerSection from "src/components/PartnerSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Event Clap" },
    { name: "description", content: "Bienvenidos a Event Clap!" },
  ];
}

export default function Home() {
  return(
    <>
      <HeroSectionHome/>
      <WeSectionHome/>
      <ServicesSectionHome/>
      <GallerySectionHome/>
      <WeddingSectionHome/>
      <CorporateSectionHome/>
      <BTLSectionHome/>
      <MarketingSectionHome/>
      <TestimonialsSectionHome/>
      <PartnerSection/>
      <ContactSection/>
    </>
  );
}
