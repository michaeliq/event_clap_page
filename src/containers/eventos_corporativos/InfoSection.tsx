import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_event_corp.webp";

export default function InfoSectionEventosCorporativos() {
    return (
        <section
            className="info_section_eventos_corporativos relative flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-5"
            id="info_section_eventos_corporativos"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "675px",
                boxSizing: "border-box",
            }}
        >
            <img className="decoration_2_info_section_eventos_corporativos absolute top-[129px] left-0 w-[50px] md:w-auto" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_info_section_eventos_corporativos md:w-[38.5%] mb-20 md:mb-0"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}
            >
                <h2 className="title_info_info_section_eventos_corporativos text-center md:text-left font-bold leading-[45px] text-[40px] text-[#390447] mb-3">
                    Donde las marcas conectan, <br />
                    <span className="font-normal">inspiran y movilizan.</span>
                </h2>
                <p className="description_info_info_section_eventos_corporativos text-center md:text-left  text-[22px] font-Barrow md:w-[80%]" >
                    Diseñamos experiencias corporativas que alinean estrategia, emoción y tecnología. Eventos que impulsan cultura, liderazgo y memorabilidad.
                </p>
            </div>
            <div
                style={{
                    position: "relative",
                }}
                className="img_info_section_eventos_corporativos flex justify-end align-center md:w-[38.5%]"
            >
                <img
                    src={circle_2}
                    alt="Decoración web Event Clap"
                    className="absolute w-[150px] md:w-auto bottom-0 -left-3 md:-left-[10%] md:bottom-[10%] md:scale-[1.1]"
                />
                <img src={img_info_section} className="relative w-[90%] h-auto md:min-w-[500px] z-100" alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_info_section_eventos_corporativos absolute bottom-0 z-1 md:top-0 -right-10 md:right-0" src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}