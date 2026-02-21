import Wave from "src/components/Wave"
import image_banner from "../../assets/bg_hero_marketing.webp"

export default function HeroSectionMarketingEmocional() {
    return (
        <section className="hero_section_marketing_emocional justify-center items-end md:items-center pb-4" style={{
            width: "100vw",
            height: "auto",
            minHeight: "100vh",
            position: "relative",
            backgroundImage: `url(${image_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            borderBottom: "7px solid #F08844"
        }}>
            <Wave />
            <div
                className="info_section_marketing_emocional"
                style={{
                    width: "77%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <h1 className="title_info_section_marketing_emocional md:w-[50%] text-[40px] font-bold leading-12 text-white">
                    Creatividad
                    que emociona. Tecnología
                    que transforma.

                </h1>
                <h4 className="subtitle_info_section_marketing_emocional md:w-[40%] text-[26px] font-light leading-8 text-white">
                    Integramos creatividad, análisis y experiencia para posicionar marcas, activar audiencias y convertir emociones en resultados medibles.
                </h4>
                <button className="cta_info_section_marketing_emocional cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569] md:w-[max-content]"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 45px",
                        marginTop: "15px",
                        border: "1px solid #D6769A",
                        borderRadius: "25px",
                        boxShadow: "5px 5px 10px #0008",
                    }}
                >
                    Quiero mi evento con alma
                </button>
            </div>
        </section>
    )
}