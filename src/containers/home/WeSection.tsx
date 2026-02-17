import circle_1 from "../../assets/circle_1.webp";
import circle_2 from "../../assets/circle_2.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_info_section from "../../assets/img_info_section.webp";
import experiencias_alma from "../../assets/experiencias con alma_png.webp";

export default function WeSectionHome() {
    return (
        <section
            className="we_section_home relative flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-5"
            id="we_section_home"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "675px",
                boxSizing: "border-box",
            }}
        >
            <img className="decoration_2_we_section_home absolute top-[5%] md:top-[10%] left-0 w-[50px] md:w-auto" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_we_section_home w-full md:w-[38.5%] flex flex-col items-center md:items-start justify-center gap-6"
                style={{
                }}
            >
                <p className="tag_info_we_section_home text-[#720742] text-center md:text-left text-[22px] bg-[#EDF0F7] py-1 px-4 rounded-sm">
                    Somos EventClap
                </p>
                <h2 className="title_info_we_section_home font-bold text-center md:text-left text-[40px] text-[#886891] uppercase">
                    más que eventos:
                </h2>
                <img className="subtitle_info_we_section_home " src={experiencias_alma} alt="Experiencias con alma"/>
                <p className="description_info_we_section_home text-[22px] text-center md:text-left md:pr-10">
                    <span className="font-bold">Co–creamos contigo.</span> Diseñamos momentos que conectan, transforman y dejan huella. <br /><br />
                    Fusionamos emoción, tecnología y propósito para que cada experiencia cuente una historia que se recuerde y se comparta.
                </p>
                <button
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "8px 30px",
                        marginTop: "15px",
                        border: "1px solid #D6769A",
                        borderRadius: "25px",
                        boxShadow: "2px 2px 6px #0008",
                    }}
                    className="cta_info_we_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                    Conoce nuestra esencia
                </button>
            </div>
            <div
                style={{
                    position: "relative",
                }}
                className="img_we_section_home flex justify-end align-center w-full md:w-[38.5%]"
            >
                <img
                    src={circle_2}
                    alt="Decoración web Event Clap"
                    
                    className="absolute w-[150px] md:w-auto bottom-0 -left-3 md:-left-[10%] md:bottom-[10%] md:scale-[1.1]"
                />
                <img src={img_info_section} className="relative w-[90%] md:w-[80%] h-auto md:min-w-[500px] z-100" alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_we_section_home absolute bottom-[5%] right-0 w-[150px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}