import ContactSection from "src/components/Contact";
import type { Route } from "./+types/eventos_corporativos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eventos Corporativos - Event Clap" },
    { name: "description", content: "Eventos Corporativos Event Clap!" },
  ];
}

export default function Page() {
  return(
    <div className="">
      <ContactSection/>
    </div>
  );
}