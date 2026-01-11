import circle_1 from "../../assets/circle_1.webp";
import circle_4 from "../../assets/circle_4.webp";
import img_marketing from "../../assets/img_mark_emc_section.webp";
import para_sentirse from "../../assets/para sentirse.webp"

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
            <img className="decoration_1_marketing_section_home absolute top-[10%] left-0 -rotate-y-[180deg]" src={circle_1} alt="Decoración Web Site Event Clap" />

            <div className="container_1_marketing_section_home" style={{
                width: "100%",
                minHeight: "775px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div
                    style={{
                        width: "38.5%",
                        position: "relative",
                    }}
                    className="img_marketing_section_home flex justify-start align-center "
                >
                    <img src={img_marketing} style={{ position: "relative", width: "80%", height: "auto", minWidth: "500px" }} alt="Marketing digital de la mano de EventClap" />

                </div>
                <div
                    className="info_marketing_section_home"
                    style={{
                        width: "38.5%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "space-evenly",
                        gap: "30px",
                    }}
                >
                    <h2 className="title_info_marketing_section_home font-normal text-[45px] text-[#390447] text-right">
                        <span className="font-bold text-[#390447]">Campañas de</span><br />
                        marketing emocional
                    </h2>
                    <h4 className="font-bold text-[26px]">Producción 4.0</h4>
                    <p className="description_info_marketing_section_home text-[26px] text-right" style={{ width: "85%" }}>
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
                        className="cta_info_marketing_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                        Necesito producción técnica
                    </button>
                </div>
            </div>
            <div className="container_2_marketing_section_home" style={{
                width:"100%",
                minHeight: "400px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap:"20px",
                flexDirection:"column",
            }}>
                <h3 className="second_subtitle_marketing_section_home uppercase text-[45px] text-[#390447] font-bold">
                    experiencias diseñadas
                </h3>
                <img src={para_sentirse} alt="para sentirse" className="text_complemet_marketing_section_home" />
                <div className="box_cards_marketing_section_home flex justify-center gap-15 mt-5">
                    <div className="card_1_marketing_section_home flex flex-col justify-center items-center py-5 px-12 bg-[#FAF5FC] rounded-md" style={{boxShadow:"2px 2px 8px #0003"}}>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Tecnología 4.0</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">+</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Narrativa Emocional</p>
                    </div>
                    <div className="card_1_marketing_section_home flex flex-col justify-center items-center py-5 px-12 bg-[#FAF5FC] rounded-md" style={{boxShadow:"2px 2px 8px #0003"}}>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Logística impecable</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Acompañamiento Total</p>
                    </div>
                    <div className="card_1_marketing_section_home flex flex-col justify-center items-center py-5 px-12 bg-[#FAF5FC] rounded-md" style={{boxShadow:"2px 2px 8px #0003"}}>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Diseño Experiencial</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Sensorial</p>
                    </div>
                    <div className="card_1_marketing_section_home flex flex-col justify-center items-center py-5 px-12 bg-[#FAF5FC] rounded-md" style={{boxShadow:"2px 2px 8px #0003"}}>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Logística impecable</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Acompañamiento Total</p>
                    </div>
                </div>
            </div>
            <img className="decoration_2_marketing_section_home absolute top-[25%] right-0 rotate-y-[180deg] rotate-x-[180deg]" src={circle_4} alt="Decoración Web Site Event Clap" />

        </section>
    )
}