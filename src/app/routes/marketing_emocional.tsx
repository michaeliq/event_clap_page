import ContactSection from "src/components/Contact";
import CompInfoMarkeringEmocional from "src/containers/marketing_emocional/CompInfo";
import CompServicesMarketingEmocional from "src/containers/marketing_emocional/CompServices";
import GallerySection from "src/containers/marketing_emocional/GallerySection";
import HeroSectionMarketingEmocional from "src/containers/marketing_emocional/HeroSection";
import InfoSectionMarkeringEmocional from "src/containers/marketing_emocional/InfoSection";
import StepSectionMarketingEmocional from "src/containers/marketing_emocional/StepSection";

export default function Page() {
  return (
  <>
    <HeroSectionMarketingEmocional/>
    <InfoSectionMarkeringEmocional/>
    <CompServicesMarketingEmocional/>
    <GallerySection/>
    <CompInfoMarkeringEmocional/>
    <StepSectionMarketingEmocional/>
    <ContactSection/>
  </>
);
}