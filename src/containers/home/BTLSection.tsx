

import circle_3 from "../../assets/circle_3.webp";
import btl from "../../assets/img_act_btl_section.webp"

export default function BTLSectionHome() {
    return (
        <section
            className="btl_section_home relative"
            id="btl_section_home"
            style={{
                backgroundColor:"#3C074A",
                background: "linear-gradient(90deg,rgba(60, 7, 74, 1) 36%, rgba(146, 52, 233, 1) 100%)",
                width: "100%",
                minHeight: "535px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img className="decoration_2_btl_section_home absolute top-17 left-0" src={circle_3} alt="Decoración Web Site Event Clap" />
            <div
                className="info_btl_section_home"
                style={{
                    width: "38.5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "20px",
                }}
            >
                <h2 className="title_info_we_section_home font-bold text-[50px] text-white uppercase">
                    Activaciones BTL
                </h2>
                <p className="description_info_btl_section_home text-[22px] text-white" style={{ width: "85%" }}>
                    <span className="font-bold">Creatividad que se viraliza.</span> 
                    <br/>Campañas sensoriales, 
                    <br/>temáticas y con propósito.
                </p>
                <button
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "8px 40px",
                        marginTop: "15px",
                        border: "1px solid #D6769A",
                        borderRadius: "25px",
                        boxShadow: "2px 2px 6px #0008",
                    }}
                    className="cta_info_btl_section_home cursor-pointer bg-white transition duration-300 ease-in-out text-[#390447] font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                    Activar mi marca
                </button>
            </div>
            <div
                style={{
                    width: "38.5%",
                    position: "relative",
                }}
                className="img_btl_section_home flex justify-end align-center "
            >
                <img src={btl} style={{position:"relative", width:"80%",height:"auto",minWidth:"500px",scale:"1.2", zIndex:"100"}} alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
        </section>
    )
}