

import travel from "../../assets/travel_img.webp"
import colombia from "../../assets/colombia.png"
import Wave from "src/components/Wave"
import { Link } from "react-router"

export default function TravelSectionHome() {
    return (
        <section
            className="travel_section_home relative md:overflow-hidden flex flex-col md:flex-row justify-center gap-5 md:gap-0 items-center py-5 px-5 md:px-20"
            id="travel_section_home"
            style={{
                backgroundColor: "#3C074A",
                background: "linear-gradient(90deg,rgba(146, 52, 233, 1) 36%, rgba(60, 7, 74, 1) 100%)",
                width: "100%",
                minHeight: "435px",
                boxSizing: "border-box",
            }}
        >
            <Wave/>
            <div
                className="z-100 info_travel_section_home w-full md:w-[38.5%] flex flex-col items-center md:items-start justify-center gap-2"
            >
                <h2 className="title_info_we_section_home font-bold text-[30px] leading-[40px] md:text-[40px] text-center md:text-left text-white uppercase">
                    Rutas & Experiencias
                </h2>
                <img src={colombia} alt="Colombia" className="travel_img_title w-[70%] my-0" />
                <h4 className="text-center font-semibold text-white text-[25px] md:text-left text-shadow-lg">Viajar también es vivir una experiencia con alma.</h4>
                <p className="description_info_travel_section_home text-[22px] text-center md:text-left text-white font-Barrow" style={{ width: "85%" }}>
                    Mucho más que turismo. Diseñamos recorridos que se sienten, se disfrutan y se recuerdan.
                </p>
                <Link to="https://wa.me/573188016709?text=Servicio+de+viajes+con+Event+Clap" target="_blank">
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
                    className="cta_info_travel_section_home cursor-pointer bg-white transition duration-300 ease-in-out text-[#390447] font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                    Descubrir Colombia
                </button>
                </Link>
            </div>
            <div
                style={{
                    position: "relative",
                }}
                className="img_travel_section_home flex justify-end align-center w-full md:w-[38.5%]"
            >
                <img src={travel} alt="Pareja feliz celebrando eventos con EventClap" className="relative w-[100%] md:w-[80%] h-auto md:min-w-[500px] z-100" />

            </div>
        </section>
    )
}