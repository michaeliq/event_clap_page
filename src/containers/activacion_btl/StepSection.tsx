

const cardsStep = [
    {
        title: "Conceptos Disruptivos",
        content: "Temáticas inspiradas en cultura, películas, símbolos y metáforas.",
    },
    {
        title: "Interactividad Tecnológica",
        content: "AR, mapping, hologramas, simulaciones y apps inmersivas.",
    },
    {
        title: "Producción Completa",
        content: "Escenografía, ambientación, sonido, logística y montaje.",
    },
    {
        title: "Viralidad Real",
        content: "Cobertura en redes, fotografía, video y contenido estratégico.",
    },
    {
        title: "Activaciones BTL",
        content: "Experiencias urbanas, interactivas y memorables.",
    },
]

export default function StepSectionActivacionBTL(){
    return(
        <div className="step_section_activacion_btl" style={{
                backgroundColor: "#fff",
                backgroundImage: "linear-gradient(90deg,rgba(60, 7, 74, 1) 36%, rgba(146, 52, 233, 1) 100%)",
                width: "100%",
                maxHeight: "901px",
                minHeight: "500px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundSize: "100% 100%",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                gap:"2rem",
                padding:"4rem 0px"
            }}>
                <div className="container_card_services_section_home flex justify-center items-center gap-5 w-[77%]">
                    {cardsStep?.map((item,key)=>(
                        <div key={key} className="card_step_section_activacion_btl relative flex flex-col justify-between w-[18%] h-[300px] bg-white items-center gap-x-6 gap-y-6 px-5 pt-10 pb-10 text-[#390447] rounded-lg" >
                            <div className="card_number w-[60px] h-[60px] flex items-center justify-center border border-[#9747FF] rounded-[50%] absolute -top-8 bg-white font-Barrow font-bold text-[26px]">{key+1}</div>
                            <h4 className="title_card_steps text-center text-[26px] font-Barrow font-semibold w-[80%]">
                                {item?.title}
                            </h4>
                            <p className="content_card_step text-center text-[18px] h-[80%] flex items-center font-Barrow w-[70%]">
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
                            width: "40%"
                        }}
                        className="cta_info_contact_section cursor-pointer bg-[#fff] transition duration-300 ease-in-out text-[25px] text-[#390447] font-bold hover:bg-[#fff] hover:text-[#AD0569]">
                            Crear una activación WOW
                </button>
        </div>
    )
} 