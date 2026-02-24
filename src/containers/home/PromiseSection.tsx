
import icon1 from "../../assets/icon-1.webp"
import icon2 from "../../assets/icon-2.webp"
import icon3 from "../../assets/icon-3.webp"
import icon4 from "../../assets/icon-4.webp"
import para_sentirse from "../../assets/para sentirse.webp"


export default function PromiseSection(){

    return(
        <div className="container_2_marketing_section_home bg-white pt-5 pb-10 flex flex-col justify-start items-center" style={{
                width: "100%",
                minHeight: "400px",
                boxSizing: "border-box",
                gap: "30px",
            }}>
                <h3 className="second_subtitle_marketing_section_home relative z-[10] uppercase text-[30px] md:text-[45px] text-white font-semibold uppercase bg-[#390447] w-[90%] md:w-[55%] text-center rounded-[35px] shadow-lg">
                    nuestra promesa
                </h3>
                <h4 className="relative flex flex-col md:flex-row border border-[#D6769A] -top-10 z-[1] md:min-w-[900px] w-[76%] rounded-lg flex items-center justify-center gap-3 text-[40px] font-normal text-[#390447] text-center py-[10px]">
                    <span className="font-bold md:font-medium">Experiencias <br className="md:hidden"/> Diseñadas</span>
                    <img src={para_sentirse} alt="para sentirse" className="text_complemet_marketing_section_home w-[70%] md:w-auto" />
                </h4>
                <div className="box_cards_marketing_section_home flex flex-col md:flex-row justify-center gap-15 mt-5">
                    <div className="relative card_1_marketing_section_home flex flex-col justify-center items-center py-6 px-12 bg-[#FAF5FC] rounded-md" style={{ boxShadow: "2px 2px 8px #0003" }}>
                        <img src={icon1} className="absolute top-[-35%]" alt="Decoración" />
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Tecnología 4.0</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">+</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Narrativa Emocional</p>
                    </div>
                    <div className="relative card_1_marketing_section_home flex flex-col justify-center items-center py-6 px-12 bg-[#FAF5FC] rounded-md" style={{ boxShadow: "2px 2px 8px #0003" }}>
                        <img src={icon2} className="absolute top-[-35%]" alt="Decoración" />
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Logística impecable</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Acompañamiento Total</p>
                    </div>
                    <div className="relative card_1_marketing_section_home flex flex-col justify-center items-center py-6 px-12 bg-[#FAF5FC] rounded-md" style={{ boxShadow: "2px 2px 8px #0003" }}>
                        <img src={icon3} className="absolute top-[-35%]" alt="Decoración" />
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Diseño Experiencial</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Sensorial</p>
                    </div>
                    <div className="relative card_1_marketing_section_home flex flex-col justify-center items-center py-6 px-12 bg-[#FAF5FC] rounded-md" style={{ boxShadow: "2px 2px 8px #0003" }}>
                        <img src={icon4} className="absolute top-[-35%]" alt="Decoración" />
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Logística impecable</p>
                        <p className="text_card_marketing_section_home text-center text-[#390447] font-semibold">Acompañamiento Total</p>
                    </div>
                </div>
            </div>
    )
}