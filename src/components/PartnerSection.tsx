import logo_centroaseo from "../assets/logo_centroaseo.webp"
import logo_estelar from "../assets/logo_estelar.webp"
import logo_jw_marriot from "../assets/logo_jw_marriot.webp"
import logo_pfizer from "../assets/logo_pfizer.webp"
import logo_sonesta from "../assets/logo_sonesta.webp"
import logo_tequendama from "../assets/logo_tequendama.webp"

const images = [
    logo_tequendama,
    logo_centroaseo,
    logo_jw_marriot,
    logo_estelar,
    logo_pfizer,
    logo_sonesta,
]

export default function PartnerSection(){
    return(
        <section className="partner_section"
        style={{
                backgroundColor:"#3C074A",
                background: "#fff",
                width: "100%",
                minHeight: "535px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                gap:"5rem"
            }}
        >
            <div className="header_container_partner_section flex justify-center items-center gap-5 mb-5">
                    <h2 className="title_partner_section uppercase text-[45px] text-[#390447] font-semibold">
                        Empresas que apuestan <span className="text-[#AD0569]">por la innovación</span>
                    </h2>
                </div>
            <div
                style={{
                    boxShadow:"1px 2px 10px #0002, -1px -2px 10px #0002"
                }} 
                className="logo_container_partner_section w-full py-5 flex justify-center items-center gap-[5%] mb-3">
                {images?.map((url,key)=>(
                    <img src={url} key={key} alt={"Decoración #" + (key+1)}/>
                ))}
            </div>
        </section>
    )
}