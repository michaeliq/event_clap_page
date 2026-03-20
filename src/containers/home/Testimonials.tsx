"use client"
import { useState } from "react"
import arrow_r from "../../assets/arrow_r.png"
import arrow_l from "../../assets/arrow_l.png"

interface Dato {
    title: string;
    content: string;
    subtitle: string;
    char: string;
}

const testimonial_data: Dato[] = [
    {
        title: "WENDY & DAVID",
        subtitle: "BODA EN VILLA DE LEYVA 2024",
        char: "WD",
        content: "Todo salió perfecto, desde la música en la capilla, la cantante tiene una tiene una voz espectacular, la música en el cóctel estuvo muy bien y la orquesta se fajó con esas tandas, nos tuvieron bailando toda la noche, muchas gracias por tu esfuerzo y dedicación que hicieron de nuestro matrimonio un día inolvidable, muy profesional no tenemos dudas que hicimos la mejor elección!!!"
    },
    {
        title: "YILBER & XXXXX",
        subtitle: "BODA EN VILLA DE LEYVA 2024",
        char:"YX",
        content: "Yilber, se casó el 13/04/2025 5.0 un excelente servicio, sin duda, super recomendadoel señor Juan Carlos, una persona atenta, muy profesional, nos apoyó todo el tiempo y estuvo muy atento a nuestras dudas, nos guió y ayudó hasta el final. La orquesta es maravillosa, los músicos unos tesos, suenan increíble, la verdad, no tengo más que agradecimientos para este maravilloso grupo."
    },
    {
        title: "GINA & XXXXXX",
        subtitle: "BODA EN VILLA DE LEYVA 2024",
        char:"GX",
        content: "Gina, se casó el 22/03/2025 5.0 excepcional! Muy profesional tuvimos la oportunidad de verlos antes del matrimonio y teníamos unas expectativas altas que se sobrepasaron en el evento, recibimos muy buenos comentarios de todos los asistentes, la orquesta fue un momento clave en nuestro Matrimonio."
    },
];

export default function TestimonialsSectionHome() {

    const [cardData, setCardData] = useState(0)
    
        const changeCard = (value: string) => {
            let nextValue = cardData
            if (value == "left") {
                nextValue = nextValue - 1
                if (nextValue < 0) {
                    setCardData(testimonial_data.length - 1)
                } else {
                    setCardData(prev => prev - 1)
                }
            } else {
                nextValue = nextValue + 1
                if (nextValue > testimonial_data.length - 1) {
                    setCardData(0)
                } else {
                    setCardData(prev => prev + 1)
                }
            }
        }

    return (
        <section
            className="testimonials_section relative"
            id="testimonials_section relative"
            style={{
                backgroundColor: "#3C074A",
                background: "linear-gradient(90deg,rgba(60, 7, 74, 1) 36%, rgba(146, 52, 233, 1) 100%)",
                width: "100%",
                minHeight: "535px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "50px",
                gap: "50px"
            }}
        >
            <h2 className="title_testimonials_section font-bold text-[40px] xl:text-[50px] 3xl:text-[58px] text-white uppercase">
                testimonios
            </h2>
            {/** Mobile version */}
            <div className="flex md:hidden justify-center items-center gap-2">
                <img src={arrow_l} alt="flecha izquierda" onClick={() => { changeCard("left") }} />
                <div className="card_testimonials_section md:max-w-[380px] h-[255px] w-[340px] py-5 px-5 bg-[#FAF5FC] rounded-lg">
                        <div className="card_header_testimonials_section mb-5 h-16 flex items-center justify-start gap-5">
                            <div className="w-[59px] h-[59px] bg-[#886891] text-[#fff] font-bold flex items-center justify-center rounded-full">
                                {testimonial_data[cardData]?.char}
                            </div>
                            <div>
                                <p className="profile_fullname_testimonials_section text-[#720742]">{testimonial_data[cardData]?.title}</p>
                                <p className="font-light text-[11px]">{testimonial_data[cardData]?.subtitle}</p>
                            </div>
                        </div>
                        <div className="card_body_testimonials_section text-[11px]">
                            {testimonial_data[cardData]?.content}
                        </div>
                    </div>
                <img src={arrow_r} alt="flecha derecha" onClick={() => { changeCard("right") }} />
            </div>
            {/** End mobile version */}
            <div className="container_cards_testimonials_section hidden relative w-auto left-0 md:flex justify-start items-center gap-10 overflow-x-auto md:overflow-x-hidden">
                {testimonial_data?.map((item, key) => (
                    <div key={key + item.title} className="card_testimonials_section md:h-[255px] md:max-w-[380px] w-[380px] py-5 px-5 bg-[#FAF5FC] rounded-lg">
                        <div className="card_header_testimonials_section mb-5 h-15 flex items-center justify-start gap-5">
                            <div className="w-[59px] h-[59px] bg-[#886891] text-[#fff] font-bold flex items-center justify-center rounded-full">
                                {item?.char}
                            </div>
                            <div>
                                <p className="profile_fullname_testimonials_section text-[#720742]">{item?.title}</p>
                                <p className="font-light text-[11px]">{item?.subtitle}</p>
                            </div>
                        </div>
                        <div className="card_body_testimonials_section text-[11px]">
                            {item?.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}