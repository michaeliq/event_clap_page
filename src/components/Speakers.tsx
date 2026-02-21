import jorgeGiraldoImage from '../assets/jorge_giraldo.webp';
import johnLopez from "../assets/jhon_lopez.webp";
import juanBermudez from "../assets/juan_bermudez.webp";
import juanCGiraldo from "../assets/juan_c_giraldo.webp";
import hciLaiChoi from "../assets/hci_lai_choi.webp";
import circle_1 from "../assets/circle_1.webp";

const speakersData = [
    {
        name: 'Jorge Giraldo',
        image: jorgeGiraldoImage,
        link: "",
    },
    {
        name: 'Jhon Alexander López',
        image: johnLopez,
        link: "",
    },
    {
        name: 'Juan Andrés Bermúdez',
        image: juanBermudez,
        link: "",
    },
    {
        name: 'Hci Lai Choi',
        image: hciLaiChoi,
        link: "",
    },
    {
        name: 'Juan Carlos Giraldo',
        image: juanCGiraldo,
        link: "",
    },

]

export default function Speakers() {
    return (
        <section className="speakers py-15" style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: "745px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
        }}>
            <img className="rotate-y-180 absolute top-[129px] md:h-[60%] left-0 w-[100px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />
            <div className="container_speakers" style={{
                width: "77%",
                minHeight: "60vh",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <div className="header_speakers flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                    <h2 className="title_speakers text-[30px] md:text-[45px] text-[#390447] text-center md:leading-[35px] font-bold">
                        NUESTROS <span className="text-[#AD0569]">SPEAKERS</span>
                    </h2>
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                </div>
                <div className="card_container_speakers w-full flex flex-col md:flex-row justify-center items-between mt-10 gap-[5%] mb-10">
                    {speakersData.map((speaker, index) => (
                        <div key={index} className='flex flex-col items-center justify-center mb-10 md:mb-0'>
                            <img src={speaker.image} alt={speaker.name} className='sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] md:min-w-[170px] md:min-h-[170px] rounded-[50%] border-[1.5px] border-t-[#3C074A] border-r-[#3C074A] border-l-[#9234E9] border-b-[#9234E9] p-1' />
                            <h4 className="card_name_speakers font-semibold text-[20px] text-center text-[#390447] mt-3">
                                {speaker.name}
                            </h4>
                            <div className="card_link_speakers bg-[#390447] border border-[#D6769A] text-white rounded-[25px] px-5 py-1 mt-2 hover:bg-[#AD0569] transition duration-300 text-[12px] text-center">
                                <a href="">{speaker.name} | LinkedIn</a>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="info_container_speakers flex flex-col justify-center items-center relative border border-[#AD0569] rounded-[35px] py-15 px-10 mt-10">
                    <h2 className="info_title_speakers absolute bg-white px-5 -top-10 text-[20px] md:text-[36px] text-[#AD0569] text-center md:leading-[45px] font-semibold">
                        <span className="text-[#390447]">Expertos que convierten</span><br />
                        conocimiento en resultados.
                    </h2>
                    <p className="info_content_speakers text-center text-[16px]">
                        Profesionales con amplia experiencia en liderazgo comercial, estrategia y transformación digital en mercados nacionales e internacionales. Nuestros speakers integran marketing, ventas, inteligencia artificial y analítica avanzada con metodologías prácticas de alto impacto, enfocadas en resultados reales.
                        <br /><br />
                        Combinan visión estratégica, tecnología 4.0 y habilidades humanas para inspirar equipos, optimizar procesos y potenciar la toma de decisiones en entornos altamente competitivos.
                    </p>
                    <button className='absolute -bottom-5 cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569] font-bold' style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 45px",
                        marginTop: "15px",
                        border: "1px solid #D6769A",
                        borderRadius: "25px",
                        boxShadow: "3px 3px 7px #0008",
                    }}>
                        Agenda un speaker
                    </button>
                </div>

            </div>
            <img className="absolute bottom-[30%] md:top-[129px] md:h-[60%] right-0 w-[80px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />

        </section>
    )
}