import logo_centroaseo from "../assets/logo_centroaseo.webp"
import logo_estelar from "../assets/logo_estelar.webp"
import logo_jw_marriot from "../assets/logo_jw_marriot.webp"
import logo_pfizer from "../assets/logo_pfizer.webp"
import logo_sonesta from "../assets/logo_sonesta.webp"
import logo_tequendama from "../assets/logo_tequendama.webp"
import logo_uni_sa from "../assets/logo_uni_sergio_arboleda.webp"
import logo_bancolombia from "../assets/logo_bancolombia.webp"
import logo_dann_carton from "../assets/logo_dann_carton.webp"
import logo_el_rancho from "../assets/logo_el_rancho.png"
import logo_club_campestre from "../assets/logo_club_campestre.webp"
import ImageCarousel from "./CarruselImg"

const images = [
    logo_tequendama,
    logo_centroaseo,
    logo_jw_marriot,
    logo_estelar,
    logo_pfizer,
    logo_sonesta,
    logo_uni_sa,
    logo_bancolombia,
    logo_dann_carton,
    logo_el_rancho,
    logo_club_campestre,
]



export default function PartnerSection() {
    return (
        <section className="partner_section"
            style={{
                backgroundColor: "#3C074A",
                background: "#fff",
                width: "100%",
                minHeight: "535px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5rem"
            }}
        >
            <div className="header_container_partner_section flex justify-center items-center gap-5 mb-5">
                <h2 className="title_partner_section uppercase text-[45px] text-[#390447] font-semibold">
                    Empresas que apuestan <span className="text-[#AD0569]">por la innovación</span>
                </h2>
            </div>
            <div
                style={{
                    boxShadow: "1px 2px 10px #0002, -1px -2px 10px #0002"
                }}
                className="logo_container_partner_section w-full py-5 flex justify-center items-center gap-[5%] mb-3">
                <ImageCarousel
                    images={images}
                    visibleCount={6}
                    step={1}
                    autoPlay
                    autoPlayInterval={3000}
                    responsive={{
                        mobile: {
                            visibleCount: 2,
                            step: 1,
                        },
                        tablet: {
                            visibleCount: 2,
                            step: 1,
                        },
                        desktop: {
                            visibleCount: 6,
                            step: 1,
                        },
                    }}
                />
            </div>
        </section>
    )
}