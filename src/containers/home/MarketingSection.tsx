import circle_1 from "../../assets/circle_1.webp";
import circle_4 from "../../assets/circle_4.webp";
import img_marketing from "../../assets/img_mark_emc_section.webp";

export default function MarketingSectionHome() {
    return (
        <section
            className="marketing_section_home relative"
            id="marketing_section_home"
            style={{
                backgroundColor: "#FFF",
                width: "100%",
            }}
        >
            <img className="decoration_1_marketing_section_home absolute bottom-[10%] w-[100px] md:w-auto z-10 md:bottom-0 md:top-[10%] left-0 -rotate-y-[180deg]" src={circle_1} alt="Decoración Web Site Event Clap" />

            <div className="container_1_marketing_section_home flex flex-col-reverse md:flex-row justify-center items-center" style={{
                width: "100%",
                minHeight: "775px",
                boxSizing: "border-box",
            }}>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="img_marketing_section_home flex justify-center md:justify-start align-center md:w-[38.5%] w-[80%]"
                >
                    <img src={img_marketing} className="relative w-[100%] md:w-[70%] h-auto md:min-w-[500px]"  alt="Marketing digital de la mano de EventClap" />

                </div>
                <div
                    className="info_marketing_section_home w-[100%] md:w-[38.5%] flex flex-col justify-start align-center gap-4 my-10"
                    
                >
                    <h2 className="title_info_marketing_section_home font-normal text-[30px] md:text-[45px] text-[#390447] text-center md:text-right">
                        <span className="font-bold text-[#390447]">Campañas de</span><br />
                        marketing emocional
                    </h2>
                    <h4 className="font-bold text-[20px] md:text-[26px] text-center md:text-right">Producción 4.0</h4>
                    <p className="description_info_marketing_section_home px-5 md:px-[0px] text-[20px] md:text-[26px] text-center md:text-right w-full">
                        Sonido, video, iluminación, escenografía
                        digital y streaming profesional.
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
                        className="cta_info_marketing_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569] px-4 w-[80%] md:w-[60%] text-center self-center md:self-end">
                        Necesito producción técnica
                    </button>
                </div>
            </div>

            <img className="decoration_2_marketing_section_home absolute w-[45px] top-[5%] md:w-auto md:top-[25%] right-0 rotate-y-[180deg] rotate-x-[180deg]" src={circle_4} alt="Decoración Web Site Event Clap" />

        </section>
    )
}