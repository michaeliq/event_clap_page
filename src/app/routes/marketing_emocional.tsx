import ContactSection from "src/components/Contact";
import GallerySection from "src/containers/marketing_emocional/GallerySection";
import HeroSectionMarketingEmocional from "src/containers/marketing_emocional/HeroSection";
import InfoSectionMarkeringEmocional from "src/containers/marketing_emocional/InfoSection";
import StepSectionMarketingEmocional from "src/containers/marketing_emocional/StepSection";

export default function Page() {
  return (
  <>
    <HeroSectionMarketingEmocional/>
    <InfoSectionMarkeringEmocional/>
    <StepSectionMarketingEmocional/>
    <GallerySection/>
    <ContactSection/>
  </>
);
}