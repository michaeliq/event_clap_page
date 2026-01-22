import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_bodas.webp";
import bodas_con_alma from "../../assets/Bodas con alma,.webp"

export default function InfoSectionBodas() {
    return (
        <section
            className="info_section_bodas relative"
            id="info_section_bodas"
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
            <img className="decoration_2_info_section_bodas absolute top-[129px] left-0" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_info_section_bodas"
                style={{
                    width: "38.5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}
            >
                                <img className="subtitle_info_info_section_bodas " src={bodas_con_alma} alt="Bodas con almas" />

                <h2 className="title_info_info_section_bodas font-normal text-[40px] text-[#886891]">
                    diseñadas para contar<br/> tu historia.
                </h2>
                <p className="description_info_info_section_bodas text-[22px]" style={{ width: "80%" }}>
                    <span className="font-bold">No hacemos “bodas”.</span>  Creamos experiencias que hablan de ustedes, de su esencia, de su amor y de los detalles que los hacen únicos. Nuestro enfoque mezcla diseño, narrativa emocional y producción impecable.
                </p>
            </div>
            <div
                style={{
                    width: "38.5%",
                    position: "relative",
                }}
                className="img_info_section_bodas flex justify-end align-center "
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
            <img className="decoration_1_info_section_bodas absolute top-0 right-0 " src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}