import circle_1 from "../../assets/circle_1.webp";
import circle_4 from "../../assets/circle_4.webp";
import img_bodas from "../../assets/img_bodas_section.webp";
import bodas_celebraciones from "../../assets/Bodas & Celebraciones.webp"

export default function WeddingSectionHome() {
    return (
        <section
            className="wedding_section_home relative"
            id="wedding_section_home"
            style={{
                backgroundColor: "#F8F1F7",
                width: "100%",
                minHeight: "534px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img className="decoration_2_wedding_section_home absolute -top-40 -left-15" src={circle_4} alt="Decoración Web Site Event Clap" />
            <div
                className="info_wedding_section_home"
                style={{
                    width: "38.5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                    gap: "20px",
                }}
            >
                <img className="subtitle_info_wedding_section_home " src={bodas_celebraciones} alt="Bodas y celebraciones"/>

                <p className="description_info_wedding_section_home text-[22px]" style={{ width: "85%" }}>
                    <span className="font-bold">Historias que se viven con los cinco sentidos.</span> Diseño emocional, producción total y acompañamiento real.
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
                    className="cta_info_wedding_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                    Planear mi Boda
                </button>
            </div>
            <div
                style={{
                    width: "38.5%",
                    position: "relative",
                }}
                className="img_wedding_section_home flex justify-end align-center "
            >
                <img src={img_bodas} style={{position:"relative", width:"80%",height:"auto",minWidth:"500px"}} alt="Pareja feliz celebrando eventos con EventClap" />

            </div>
            <img className="decoration_1_wedding_section_home absolute bottom-0 right-0 " src={circle_1} alt="Decoración Web Site Event Clap" />
        </section>
    )
}