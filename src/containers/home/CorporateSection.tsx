import circle_1 from "../../assets/circle_1.webp";
import circle_3 from "../../assets/circle_3.webp";
import img_corporate from "../../assets/img_evn_coorp_section.webp";

export default function CorporateSectionHome() {
    return (
        <section
            className="corporate_section_home relative"
            id="corporate_section_home"
            style={{
                backgroundColor: "#FFF",
                width: "100%",
                minHeight: "775px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img className="decoration_1_corporate_section_home absolute bottom-[5%] left-0 -rotate-y-[180deg]" src={circle_1} alt="Decoración Web Site Event Clap" />

            <div
                style={{
                    width: "38.5%",
                    position: "relative",
                }}
                className="img_corporate_section_home flex justify-start align-center "
            >
                <img src={img_corporate} style={{ position: "relative", width: "80%", height: "auto", minWidth: "500px" }} alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <div
                className="info_corporate_section_home"
                style={{
                    width: "38.5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "space-evenly",
                    gap: "30px",
                }}
            >
                <h2 className="title_info_corporate_section_home font-normal text-[40px] text-[#390447] uppercase">
                    <span className="font-bold text-[#390447]">Eventos</span> Corporativos
                </h2>
                <p className="description_info_corporate_section_home text-[22px] text-right" style={{ width: "85%" }}>
                    <span className="font-bold">Experiencias estratégicas</span> 
                    <br/>que impulsan equipos,
                    <br/>marcas y comunidades.
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
                    className="cta_info_corporate_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                    Quiero un evento corporativo
                </button>
            </div>
            <img className="decoration_2_corporate_section_home absolute top-[25%] right-0 rotate-y-[180deg] rotate-x-[180deg]" src={circle_3} alt="Decoración Web Site Event Clap" />

        </section>
    )
}