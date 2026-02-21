"use client"
import { useState } from "react"
import arrow_r from "../../assets/arrow_r.png"
import arrow_l from "../../assets/arrow_l.png"

const cardsStep = [
    {
        title: " Diseño & Concepto",
        content: " Creamos tu estilo, temática, colores y narrativa visual. Nada genérico. Todo de ustedes.",
    },
    {
        title: "Planificación Total",
        content: "Cronograma, proveedores, presupuesto y locaciones. Todo fluye, todo encaja.",
    },
    {
        title: "Producción del Gran Día",
        content: " Montaje, desmontaje, coordinación en tiempo real y ejecución perfecta.",
    },
    {
        title: "Acompañamiento para Novios",
        content: " Apoyo emocional, asesoría estética, ensayos, pruebas y tranquilidad absoluta.",
    },
    {
        title: "Experiencias para Invitados",
        content: "  RSVP, transporte, kits, actividades y momentos memorables.",
    },
]

export default function StepSectionBodas() {

    const [cardData, setCardData] = useState(0)

    const changeCard = (value: string) => {
        let nextValue = cardData
        if (value == "left") {
            nextValue = nextValue - 1
            if (nextValue < 0) {
                setCardData(cardsStep.length - 1)
            } else {
                setCardData(prev => prev - 1)
            }
        } else {
            nextValue = nextValue + 1
            if (nextValue > cardsStep.length - 1) {
                setCardData(0)
            } else {
                setCardData(prev => prev + 1)
            }
        }
    }

    return (
        <div className="step_section_bodas" style={{
            backgroundColor: "#fff",
            backgroundImage: "linear-gradient(90deg,rgba(60, 7, 74, 1) 36%, rgba(146, 52, 233, 1) 100%)",
            width: "100%",
            maxHeight: "901px",
            minHeight: "500px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "100% 100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            gap: "2rem",
            padding: "4rem 0px"
        }}>
            {/** Mobile version */}
            <div className="flex md:hidden justify-center items-center gap-4">
                <img src={arrow_l} alt="flecha izquierda" onClick={() => { changeCard("left") }} />
                <div className="card_step_section_bodas relative flex flex-col justify-between w-[70%] h-[300px] bg-white items-center gap-x-6 gap-y-6 px-5 pt-10 pb-10 text-[#390447] rounded-lg" >
                    <div className="card_number w-[60px] h-[60px] flex items-center justify-center border border-[#9747FF] rounded-[50%] absolute -top-8 bg-white font-Barrow font-bold text-[26px]">{cardData + 1}</div>
                    <h4 className="title_card_steps text-center text-[26px] font-Barrow font-semibold w-[80%]">
                        {cardsStep[cardData]?.title}
                    </h4>
                    <p className="content_card_step text-center text-[18px] font-Barrow w-[70%]">
                        {cardsStep[cardData]?.content}
                    </p>
                </div>
                <img src={arrow_r} alt="flecha derecha" onClick={() => { changeCard("right") }} />
            </div>
            {/** End mobile version */}
            <div className="hidden container_card_services_section_home md:flex justify-center items-center gap-5 w-[77%]">
                {cardsStep?.map((item, key) => (
                    <div key={key} className="card_step_section_bodas relative flex flex-col justify-between w-[18%] h-[300px] bg-white items-center gap-x-6 gap-y-6 px-5 pt-10 pb-10 text-[#390447] rounded-lg" >
                        <div className="card_number w-[60px] h-[60px] flex items-center justify-center border border-[#9747FF] rounded-[50%] absolute -top-8 bg-white font-Barrow font-bold text-[26px]">{key + 1}</div>
                        <h4 className="title_card_steps text-center text-[26px] font-Barrow font-semibold w-[80%]">
                            {item?.title}
                        </h4>
                        <p className="content_card_step text-center text-[18px] font-Barrow w-[70%]">
                            {item?.content}
                        </p>
                    </div>
                ))}
            </div>
            <button
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px 30px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 6px #0008",
                    height: "40px",
                }}
                className="w-[80%] md:w-auto cta_info_contact_section cursor-pointer bg-[#fff] transition duration-300 ease-in-out text-center text-[17px] md:text-[25px] text-[#390447] font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                Quiero una boda inolvidable
            </button>
        </div>
    )
} 