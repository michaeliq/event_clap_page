import Wave from "src/components/Wave"
import image_banner from "../../assets/bg_hero_btl.png"
import { Link } from "react-router"

export default function HeroSectionActivacionBTL() {
    return (
        <section className="hero_section_activacion_btl justify-center items-end md:items-center pb-20 pb-0 min-h-screen h-screen md:min-h-[750px] 3xl:min-h-[960px]" style={{
            width: "100vw",
            position:"relative", 
            backgroundImage: `url(${image_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            borderBottom: "7px solid #F08844"
        }}>
            <Wave/>
            <div
                className="info_section_activacion_btl md:mt-10 z-100"
                style={{
                    width: "77%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    alignItems: "start",
                }}
            >
                <h1 className="title_info_section_activacion_btl md:w-[60%] text-shadow-lg text-[40px] xl:text-[50px] 3xl:text-[58px] font-bold leading-12 text-white">
                    Marcas que conectan. <br/>Experiencias que impactan.
                </h1>
                <h4 className="subtitle_info_section_activacion_btl md:w-[40%] text-shadow-lg text-[26px] xl:text-[30px] 3xl:text-[34px] font-light leading-8 text-white">
                    Creatividad disruptiva para marcas que quieren conversación real.
                </h4>
                <Link to="https://wa.me/573188016709?text=Servicios+de+Activaciones+BTL" target="_blank">
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
                
                </Link>
            </div>
        </section>
    )
}