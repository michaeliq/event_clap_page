import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_bodas.webp";
import bodas_con_alma from "../../assets/Bodas con alma,.webp"

export default function InfoSectionBodas() {
    return (
        <section
            className="info_section_bodas relative flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-5"
            id="info_section_bodas"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "675px",
                boxSizing: "border-box",
            }}
        >
            <img className="decoration_2_info_section_bodas absolute top-[129px] left-0 w-[50px] md:w-auto" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_info_section_bodas md:w-[38.5%]"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}
            >
                                <img className="subtitle_info_info_section_bodas " src={bodas_con_alma} alt="Bodas con almas" />

                <h2 className="title_info_info_section_bodas font-normal text-[40px] text-[#886891] text-center md:text-left">
                    diseñadas para contar<br/> tu historia.
                </h2>
                <p className="description_info_info_section_bodas text-[22px] text-center md:text-left md:w-[80%]">
                    <span className="font-bold">No hacemos “bodas”.</span>  Creamos experiencias que hablan de ustedes, de su esencia, de su amor y de los detalles que los hacen únicos. Nuestro enfoque mezcla diseño, narrativa emocional y producción impecable.
                </p>
            </div>
            <div
                style={{
                    position: "relative",
                }}
                className="img_info_section_bodas flex justify-end align-center md:w-[38.5%]"
            >
                <img
                    src={circle_2}
                    alt="Decoración web Event Clap"
                    className="absolute w-[150px] md:w-auto bottom-0 -left-3 md:-left-[10%] md:bottom-[10%] md:scale-[1.1]"
                />
                <img src={img_info_section} className="relative w-[90%] h-auto md:min-w-[500px] z-100" alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_info_section_bodas absolute bottom-0 z-1 md:top-0 -right-10 md:right-0 " src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}