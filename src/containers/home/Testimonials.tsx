import elipse from "../../assets/elipse_profile.webp";

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
    return (
        <section
            className="testimonials_section relative"
            id="testimonials_section"
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
            <h2 className="title_testimonials_section font-bold text-[40px] text-white uppercase">
                testimonios
            </h2>
            <div className="container_cards_testimonials_section w-[80%] flex justify-evenly">
                {testimonial_data?.map((item, key) => (
                    <div key={key + item.title} className="card_testimonials_section max-w-[380px] py-5 px-5 bg-[#FAF5FC] rounded-lg">
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