import HeroSectionHome from "src/containers/home/HeroSection";
import type { Route } from "./+types/home";
import WeSectionHome from "src/containers/home/WeSection";
import ServicesSectionHome from "src/containers/home/ServicesSection";
import GallerySectionHome from "src/containers/home/GallerySection";
import WeddingSectionHome from "src/containers/home/WeddingSection";
import CorporateSectionHome from "src/containers/home/CorporateSection";
import BTLSectionHome from "src/containers/home/BTLSection";

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
    </>
  );
}
