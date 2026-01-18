import image_banner from "../../assets/banner_hero_homepng.webp"

export default function HeroSectionHome() {

    return (
        <section
            className="hero_section_home relative w-screen bg-gray-900"
            id="hero_section_home"
            style={{
                width:"100vw",
                height:"auto",
                minHeight:"100vh",
                backgroundImage:`url(${image_banner})`,
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center",
                backgroundSize:"cover",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderBottom:"7px solid #F08844"
            }}
        >
            <div 
                className="info_section_home"
                style={{
                    width:"77%",
                    display:"flex",
                    flexDirection:"column",
                    gap:"15px",
                    alignItems:"start",
                }}
            >
                <h1 className="title_info_section_home w-100 text-[40px] font-bold leading-12 text-white">
                    Donde la emoción se encuentra con la innovación.
                </h1>
                <h4 className="subtitle_info_section_home w-85 text-[26px] font-light leading-8 text-white">
                    Eventos con propósito, emoción y tecnología 4.0. 
                </h4>
                <button className="cta_info_section_home cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569]"
                    style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"10px 25px",
                        marginTop:"15px",
                        border:"1px solid #D6769A",
                        borderRadius:"25px",
                        boxShadow:"5px 5px 10px #0008",
                    }}
                >
                    Quiero mi evento con alma
                </button>
            </div>

        </section>
    )
}