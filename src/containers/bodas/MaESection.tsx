import image_banner from "../../assets/img_orquesta_section_bodas.webp"
import son_del_caribe from "../../assets/Son del Caribe.webp"
import caribes_img from "../../assets/Son_Caribe_logo 1.webp"

export default function MaESectionBodas() {
    return (
        <section className="m_a_e_section_bodas"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "635px",
                height: "auto",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "50px",
            }}
        >
            <div className="header_containerm_a_e_section_bodas flex justify-center items-center gap-5 mb-5">
                <div className="line w-[82px] h-[3px] bg-[#390447]"></div>
                <h2 className="titlem_a_e_section_bodas uppercase text-[50px] leading-[55px] text-center uppercase text-[#390447] font-bold">
                    Música & <br /> entretenimiento
                </h2>
                <div className="line w-[82px] h-[3px] bg-[#390447]"></div>
            </div>

            <div className="container_text_m_a_e_section_bodas" style={{
                width: "100vw",
                height: "auto",
                minHeight: "748px",
                backgroundColor: "#000",
                backgroundImage: `url(${image_banner})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div className="content_m_a_e_section_bodas flex items-start flex-col w-[77%] h-full">
                    <h3 className="title_content_m_a_e_section_bodas font-bold text-[50px] text-white">
                        O R Q U E S T A
                    </h3>
                    <img src={son_del_caribe} alt="Son del caribe" />
                    <h4 className="subtitle_m_a_e_section_bodas text-white text-[33px] font-semibold leading-[37px] my-2">
                        La banda sonora de <br />bodas que no se olvidan.
                    </h4>
                    <p className="text_m_a_e_section_bodas text-white text-normal text-[28px] font-Barrow">
                        Música a la medida. Energía en vivo. <br />Momentos que se quedan.
                    </p>
                </div>
            </div>

            <div className="container_2_m_a_e_section_bodas relative h-[230px] mt-[161px] p-5 rounded-lg flex flex-col items-center justify-center border border-[#05A3A3] w-[80%]">
                <img src={caribes_img} alt="Son del Caribe" className="absolute -top-[50%]" />
                <p className="text_container_2_m_a_e_section_bodas w-[80%] text-[24px] text-center">
                    <span className="font-bold">Transforma cada celebración en una experiencia vibrante.</span><br />
                    Un show en vivo que fusiona ritmos latinos, clásicos y urbanos en un formato crossover que conecta generaciones y mantiene la pista encendida de principio a fin.
                </p>
                <button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "8px 30px",
                            marginTop: "15px",
                            border: "1px solid #AD0569",
                            borderRadius: "25px",
                            boxShadow: "2px 2px 6px #0008",
                            height: "40px",
                            width: "40%"
                        }}
                        className="absolute z-[10] -bottom-5 cursor-pointer bg-[#390447] text-[30px] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                            Elegir Son del Caribe
                </button>
            </div>
        </section>
    )
}