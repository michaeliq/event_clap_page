import Wave from "src/components/Wave"
import image_banner from "../../assets/bg_hero_btl.webp"

export default function HeroSectionActivacionBTL() {
    return (
        <section className="hero_section_activacion_btl" style={{
            width: "100vw",
            height: "auto",
            position:"relative",
            minHeight: "100vh",
            backgroundImage: `url(${image_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "7px solid #F08844"
        }}>
            <Wave/>
            <div
                className="info_section_activacion_btl"
                style={{
                    width: "77%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    alignItems: "start",
                }}
            >
                <h1 className="title_info_section_activacion_btl w-[50%] text-[40px] font-bold leading-12 text-white">
                    Marcas que conectan. Experiencias que impactan.
                </h1>
                <h4 className="subtitle_info_section_activacion_btl w-[40%] text-[26px] font-light leading-8 text-white">
                    Creatividad disruptiva para marcas que quieren conversación real.
                </h4>
                <button className="cta_info_section_activacion_btl cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569]"
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
                    Activar mi marca
                </button>
            </div>
        </section>
    )
}