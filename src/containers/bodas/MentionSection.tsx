import reconocimientos from "../../assets/y Reconociemntos.webp"
import galardon from "../../assets/img_galardon_bodas.webp"
export default function MentionSection() {
    return (
        <div className="mention_section"
            style={{
                backgroundColor: "#3C074A",
                background: "linear-gradient(90deg, rgba(146, 52, 233, 1) 36%, rgba(60, 7, 74, 1) 100%)",
                width: "100%",
                minHeight: "635px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "50px",
            }}
        >
            <div className="header_container_mention_section_bodas flex justify-center items-end gap-5 mb-5">
                <div className="line w-[82px] h-[2px] bg-white"></div>
                <h2 className="title_mention_section_bodas uppercase text-[50px] leading-[35px] text-white font-normal font-Barrow">
                    Menciones
                </h2>
                <div className="line w-[82px] h-[2px] bg-white"></div>
            </div>
            <img src={reconocimientos} alt="y Reconocimientos" className="mb-5" />
            <div className="container_mention_section_bodas w-[77%] flex justify-between items-center gap-15">
                <img src={galardon} alt="Reconocimiento de matrimonio.com.co, más de 100 opiniones positivas" />
                <div className="text_mention_section_bodas w-[70%]">
                    <h4 className="title_text_mention_section_bodas text-[42px] text-white mb-2">
                        <span className="font-bold">
                        Historias de amor que merecen
                        </span> 
                        <br />
                        una banda sonora inolvidable.
                    </h4>
                    <p className="content_text_mention_section_bodas text-white text-[20px]">
                        <span className="font-bold">
                            Nuestra excelencia también se escucha.
                        </span>
                        <br />
                        Hemos sido galardonados con 5 estrellas en los Wedding Awards de Matrimonio.com.co durante seis años consecutivos (2019 – 2024) en la categoría Música para Matrimonio, gracias a nuestra orquesta Son del Caribe.
                        <br />
                        <br />
                        Este reconocimiento refleja la confianza de las parejas, la calidad de nuestras experiencias musicales y nuestro compromiso con crear bodas que se recuerdan… y se sienten.
                    </p>
                </div>
            </div>
        </div>
    )
}