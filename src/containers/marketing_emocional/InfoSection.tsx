import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_marketing.webp";

export default function InfoSectionMarkeringEmocional() { 
    return (
        <section
            className="info_section_marketing_emocional relative flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-5"
            id="info_section_marketing_emocional"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "675px",
                boxSizing: "border-box", 
                
            }}
        >
            <img className="decoration_2_info_section_marketing_emocional absolute top-[129px] left-0 w-[50px] md:w-auto" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_info_section_marketing_emocional md:w-[38.5%] mb-20 md:mb-0"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}
            >
                <h2 className="title_info_info_section_marketing_emocional font-bold leading-[45px] text-center md:text-left text-[40px] text-[#390447] mb-3">
                    Estrategia que conecta.  <br />
                    <span className="font-normal">Emoción que convierte.</span>
                </h2>
                <p className="description_info_info_section_marketing_emocional text-[22px] font-Barrow md:w-[80%] text-center md:text-left">
                    <b>Diseñamos estrategias de marketing</b> que integran análisis, creatividad y experiencia emocional para posicionar marcas, activar audiencias y generar resultados medibles.
                </p>
            </div>
            <div
                style={{
                    position: "relative",
                }}
                 className="img_info_section_marketing_emocional flex justify-end align-center w-full md:w-[38.5%]"
            >
                <img
                    src={circle_2}
                    alt="Decoración web Event Clap"
                    className="absolute w-[150px] md:w-auto bottom-0 -left-3 md:-left-[10%] md:bottom-[10%] md:scale-[1.1]"
                />
                <img src={img_info_section} className="relative w-[90%] h-auto md:min-w-[500px] z-100"  alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_info_section_marketing_emocional absolute bottom-0 z-1 md:top-0 -right-10 md:right-0" src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}