import ContactSection from "src/components/Contact";
import GallerySection from "src/containers/activacion_btl/GallerySection";
import HeroSectionActivacionBTL from "src/containers/activacion_btl/HeroSection";
import InfoSectionActivacionBTL from "src/containers/activacion_btl/InfoSection";
import StepSectionActivacionBTL from "src/containers/activacion_btl/StepSection";

export default function Page() {
  return (<>
    <HeroSectionActivacionBTL/>
    <InfoSectionActivacionBTL/>
    <StepSectionActivacionBTL/>
    <GallerySection/>
    <ContactSection/>
  </>);
}