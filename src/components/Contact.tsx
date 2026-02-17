import circle_3 from "../assets/circle_3.webp";
import circle_4 from "../assets/circle_4.webp";
import con_alma from "../assets/con alma.webp";
import icon_address from "../assets/icon_address.webp";
import ser_inolvidable from "../assets/ser inolvidable.webp"

export default function ContactSection() {
    return (
        <section
            className="contact_section relative"
            id="contact_section"
            style={{
                backgroundColor: "#FFF",
                width: "100%",
                paddingBottom:"5rem"
            }}
        >
            <img className="decoration_1_contact_section w-[12%] md:w-[10%] absolute top-[10%] left-0" src={circle_3} alt="Decoración Web Site Event Clap" />

            <div className="container_1_contact_section flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0" style={{
                width: "100%",
                minHeight: "560px",
                boxSizing: "border-box",
            }}>
                <div
                    className="form_contact_section relative w-[85%] md:w-[38.5%] flex flex-col justify-start align-center gap-4"
                >
                    <h4 className="form_title_contact_section uppercase font-bold text-[#390447] text-[40px] text-center md:text-left">
                        hablemos
                    </h4>
                    <form action="#" className="min-h-[315px] w-full md:w-[75%] py-8 flex flex-col justify-center items-center gap-4" style={{
                        boxShadow: "0px 0px 10px #0003",
                        borderRadius: "15px"
                    }}>
                        <div className="flex w-[90%] gap-1 border-0 border-b-2 border-[#720742] bg-transparent py-2 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors">
                            <label
                                htmlFor=""
                                className="text-sm text-[#390447] text-[18px]"
                            >
                                Nombre:
                            </label>
                            <input
                                id=""
                                className=" w-[100%] bg-transparent text-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-[18px]"
                            />
                        </div>
                        <div className="flex w-[90%] gap-1 border-0 border-b-2 border-[#720742] bg-transparent py-2 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors">
                            <label
                                htmlFor=""
                                className="text-sm text-[#390447] text-[18px]"
                            >
                                Apellido:
                            </label>
                            <input
                                id=""
                                className=" w-[100%] bg-transparent text-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-[18px]"
                            />
                        </div>
                        <div className="flex w-[90%] gap-1 border-0 border-b-2 border-[#720742] bg-transparent py-2 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors">
                            <label
                                htmlFor=""
                                className="text-sm text-[#390447] text-[18px]"
                            >
                                Celular:
                            </label>
                            <input
                                id=""
                                className=" w-[100%] bg-transparent text-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-[18px]"
                            />
                        </div>
                        <div className="flex w-[90%] gap-1 border-0 border-b-2 border-[#720742] bg-transparent py-2 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors">
                            <label
                                htmlFor=""
                                className="text-sm text-[#390447] text-[18px]"
                            >
                                Correo:
                            </label>
                            <input
                                id=""
                                className=" w-[100%] bg-transparent text-gray-600 focus:border-blue-500 focus:outline-none transition-colors text-[18px]"
                            />
                        </div>
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "2px 50px",
                                marginTop: "15px",
                                borderRadius: "25px",
                                background: "linear-gradient(90deg, #700893 36%, #720742 100%)"
                            }}
                            className="cta_info_contact_section cursor-pointer text-[24px] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff]-important hover:text-white">
                            ENVIAR
                        </button>
                    </form>
                </div>
                <div
                    className="info_contact_section flex flex-col items-end justify-evenly gap-[10px] w-[90%] md:w-[38.5%]"
                >
                    <h4 className="w-[100%] subtitle_map_container_2_contact_section text-[35px] font-light italic text-white bg-[#886891] text-center rounded-md py-2">
                        <img className="inline mr-2" src={icon_address} alt="Dirección de Event Clap" /> Dónde estamos?
                    </h4>
                    <div ></div>
                    <iframe className="w-[100%] min-h-[350px] bg-[#EDF0F7] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7953.188410187575!2d-74.0727854!3d4.6662114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a560f5550eb%3A0x4c0be9abc6eb39ce!2sCra.%2028b%20%2372-12%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1770348726362!5m2!1ses!2sco" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="container_2_contact_section w-[100%] flex flex-col justify-center items-center gap-[20px]">
                <div className="info_container_2_contact_section flex flex-col md:flex-row justify-center items-center gap-[20px] w-[100%]">
                    <h3 className="second_subtitle_contact_section uppercase text-[45px] text-[#390447] text-center md:text-left font-bold">
                        Tu evento merece
                    </h3>
                    <img src={ser_inolvidable} alt="para sentirse" className="text_complemet_contact_section w-[35%]" />
                </div>
                <button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "8px 30px",
                            marginTop: "15px",
                            border: "1px solid #AD0569",
                            borderRadius: "25px",
                            boxShadow: "2px 2px 6px #0008",
                            height: "40px",
                        }}
                        className="cta_info_contact_section cursor-pointer bg-[#AD0569] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569] w-[80%] md:w-[30%] text-center">
                            Comencemos a crear magia
                </button>
            </div>

            <img className="decoration_2_contact_section w-[12%] md:w-[10%] absolute top-[65%] md:top-[10%] right-0 rotate-y-[180deg] -rotate-x-[180deg]" src={circle_3} alt="Decoración Web Site Event Clap" />
        </section>
    )
}