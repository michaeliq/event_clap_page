import ContactSection from "src/components/Contact";
import type { Route } from "./+types/eventos_corporativos";
import HeroSectionEventosCorporativos from "src/containers/eventos_corporativos/HeroSection";
import InfoSectionEventosCorporativos from "src/containers/eventos_corporativos/InfoSection";
import StepSectionEventosCorporativos from "src/containers/eventos_corporativos/StepSection";
import GallerySectionEventosCorporativos from "src/containers/eventos_corporativos/GallerySection";
import Speakers from "src/components/Speakers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eventos Corporativos - Event Clap" },
    { name: "description", content: "Eventos Corporativos Event Clap!" },
  ];
}

export default function Page() {
  return(
    <div className="">
      <HeroSectionEventosCorporativos/>
      <InfoSectionEventosCorporativos/>
      <StepSectionEventosCorporativos/>
      <GallerySectionEventosCorporativos/>
      <Speakers/>
      <ContactSection/>
    </div>
  );
}