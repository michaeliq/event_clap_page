import bk_img_services_section from "../../assets/bk_img_services_section.webp";

import img_1_services_section_home from "../../assets/img_ref_1_services_section.webp"
import img_2_services_section_home from "../../assets/img_ref_2_services_section.webp"
import img_3_services_section_home from "../../assets/img_ref_3_services_section.webp"
import img_4_services_section_home from "../../assets/img_ref_4_services_section.webp"

const cardsServices = [
    {
        title: "bodas & celebraciones",
        link: "/bodas",
        img_src: img_1_services_section_home
    },
    {
        title: "eventos corporativos",
        link: "/eventos_corporativos",
        img_src: img_2_services_section_home
    },
    {
        title: "activaciones btl",
        link: "activacion_btl",
        img_src: img_3_services_section_home
    },
    {
        title: "marketing emocional",
        link: "marketing_emocional",
        img_src: img_4_services_section_home
    },
]

export default function ServicesSectionHome() {
    return (
        <section
            className="services_section_home"
            id="services_section_home"
            style={{
                backgroundColor: "#fff",
                backgroundImage: `url(${bk_img_services_section})`,
                width: "100%",
                maxHeight: "901px",
                minHeight: "745px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundSize: "100% 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "77%",
                    minHeight: "60vh",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
                className="container_services_section_home">
                <div className="header_container_services_section_home flex justify-center items-center gap-5 mb-5">
                    <div className="line w-[82px] h-[2px] bg-[#720742]"></div>
                    <h2 className="title_services_section_home uppercase text-[45px] text-white font-semibold">
                        servicios destacados
                    </h2>
                    <div className="line w-[82px] h-[2px] bg-[#720742]"></div>
                </div>
                <div className="container_card_services_section_home flex justify-center items-center gap-5">
                    {cardsServices?.map((item, key) => (
                        <div key={key} className="card_services_section_home flex flex-col justify-center items-center gap-x-6 gap-y-2">
                            <h4 
                            className="title_card_services_section_home uppercase text-white text-[26px]" 
                            style={{
                                fontFamily:"Bebas Neue"
                            }}>{item?.title}</h4>
                            <img src={item?.img_src} alt="Serivicio de bodas y celebraciones" />
                            <a href={item?.link}>
                                <button
                                className="cta_card_services_section_home cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569] font-semibold"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px 25px",
                                    marginTop: "15px",
                                    border: "1px solid #D6769A",
                                    borderRadius: "25px",
                                    boxShadow: "2px 2px 5px #0008",
                                }}>
                                Ver más
                            </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}