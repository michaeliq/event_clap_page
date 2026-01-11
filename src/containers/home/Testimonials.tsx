import elipse from "../../assets/elipse_profile.webp";

interface Dato {
    title: string;
    content: string;
}

const testimonial_data: Dato[] = [
    {
        title: "Nombre Apellido",
        content: "Todo salió perfecto, desde la música en la capilla, la cantante tiene una tiene una voz espectacular, la música en el cóctel estuvo muy bien y la orquesta se fajó con esas tandas, nos tuvieron bailando toda la noche, muchas gracias por tu esfuerzo y dedicación que hicieron de nuestro matrimonio un día inolvidable, muy profesional no tenemos dudas que hicimos la mejor elección!!!"
    },
    {
        title: "Nombre Apellido",
        content: "Todo salió perfecto, desde la música en la capilla, la cantante tiene una tiene una voz espectacular, la música en el cóctel estuvo muy bien y la orquesta se fajó con esas tandas, nos tuvieron bailando toda la noche, muchas gracias por tu esfuerzo y dedicación que hicieron de nuestro matrimonio un día inolvidable, muy profesional no tenemos dudas que hicimos la mejor elección!!!"
    },
    {
        title: "Nombre Apellido",
        content: "Todo salió perfecto, desde la música en la capilla, la cantante tiene una tiene una voz espectacular, la música en el cóctel estuvo muy bien y la orquesta se fajó con esas tandas, nos tuvieron bailando toda la noche, muchas gracias por tu esfuerzo y dedicación que hicieron de nuestro matrimonio un día inolvidable, muy profesional no tenemos dudas que hicimos la mejor elección!!!"
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
                    <div key={key+item.title} className="card_testimonials_section max-w-[380px] py-5 px-5 bg-[#FAF5FC] rounded-lg">
                        <div className="card_header_testimonials_section mb-5 h-15 flex items-center justify-start">
                            <img src={elipse} alt={item.title} className="profile_card_testimonials_section mr-4" />
                            <p className="profile_fullname_testimonials_section text-[#720742]">{item?.title}</p>
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