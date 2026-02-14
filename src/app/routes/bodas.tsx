import ContactSection from "src/components/Contact";

import type { Route } from "./+types/bodas";
import HeroSectionBodas from "src/containers/bodas/HeroSection";
import InfoSectionBodas from "src/containers/bodas/InfoSection";
import StepSectionBodas from "src/containers/bodas/StepSection";
import GallerySectionBodas from "src/containers/bodas/GallerySection";
import MentionSection from "src/containers/bodas/MentionSection";
import GalleryVideosSectionBodas from "src/containers/bodas/GalleryVideosSection";
import MaESectionBodas from "src/containers/bodas/MaESection";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bodas - Event Clap" },
    { name: "description", content: "Sección de Bodas Event Clap!" },
  ];
}

export default function Page() {
  return (
    <div className="">
      <HeroSectionBodas/>
      <InfoSectionBodas/>
      <StepSectionBodas/>
      <GallerySectionBodas/>
      <MentionSection/>
      <GalleryVideosSectionBodas/>
      <MaESectionBodas/>
      <ContactSection/>
    </div>
  );
}