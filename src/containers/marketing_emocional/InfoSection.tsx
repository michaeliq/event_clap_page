import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_marketing.webp";

export default function InfoSectionMarkeringEmocional() {
    return (
        <section
            className="info_section_marketing_emocional relative"
            id="info_section_marketing_emocional"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "675px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img className="decoration_2_info_section_marketing_emocional absolute top-[129px] left-0" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_info_section_marketing_emocional"
                style={{
                    width: "38.5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}
            >
                <h2 className="title_info_info_section_marketing_emocional font-bold leading-[45px] text-[40px] text-[#390447] mb-3">
                    Estrategia que conecta.  <br />
                    <span className="font-normal">Emoción que convierte.</span>
                </h2>
                <p className="description_info_info_section_marketing_emocional text-[22px] font-Barrow" style={{ width: "80%" }}>
                    <b>Diseñamos estrategias de marketing</b> que integran análisis, creatividad y experiencia emocional para posicionar marcas, activar audiencias y generar resultados medibles.
                </p>
            </div>
            <div
                style={{
                    width: "38.5%",
                    position: "relative",
                }}
                className="img_info_section_marketing_emocional flex justify-end align-center "
            >
                <img
                    src={circle_2}
                    alt="Decoración web Event Clap"
                    style={{
                        position: "absolute",
                        left: "4%",
                        bottom: "10%",
                        scale: "1.1"
                    }}
                />
                <img src={img_info_section} style={{ position: "relative", width: "80%", height: "auto", minWidth: "500px" }} alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_info_section_marketing_emocional absolute top-0 right-0 " src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}