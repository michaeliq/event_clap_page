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
            }}
        >
            <img className="decoration_1_contact_section absolute top-[10%] left-0" src={circle_3} alt="Decoración Web Site Event Clap" />

            <div className="container_1_contact_section" style={{
                width: "100%",
                minHeight: "560px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div
                    className="info_contact_section"
                    style={{
                        width: "38.5%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-evenly",
                        gap: "30px",
                    }}
                >
                    <p className="text-[#720742] text-[22px] bg-[#EDF0F7] py-1 px-4 rounded-md">
                        Contacto
                    </p>
                    <h2 className="title_info_contact_section font-normal text-[#390447] text-left">
                        <span className="text-[113px] leading-[90px]">Quiero</span><br />
                        <span className="font-bold text-[#390447] text-[72px]">mi evento</span><br />
                        <img src={con_alma} alt="con alma" />
                    </h2>
                </div>
                <div
                    style={{
                        width: "38.5%",
                        position: "relative",
                    }}
                    className="form_contact_section flex flex-col justify-start align-center gap-4"
                >
                    <h4 className="form_title_contact_section uppercase font-bold text-[#390447] text-[40px]">
                        hablemos
                    </h4>
                    <form action="#" className="min-h-[315px] w-[75%] py-8 flex flex-col justify-center items-center gap-4" style={{
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
                                padding: "8px 40px",
                                marginTop: "15px",
                                borderRadius: "25px",
                                background: "linear-gradient(90deg, #700893 36%, #720742 100%)"
                            }}
                            className="cta_info_contact_section cursor-pointer text-[24px] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff]-important hover:text-white">
                            ENVIAR
                        </button>
                    </form>
                </div>
            </div>
            <div className="container_2_contact_section" style={{
                width: "100%",
                minHeight: "500px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexDirection: "row",
            }}>
                <div className="info_container_2_contact_section flex flex-col w-[38.7%]">
                    <h3 className="second_subtitle_contact_section uppercase text-[45px] text-[#390447] font-bold">
                        Tu evento merece
                    </h3>
                    <img src={ser_inolvidable} alt="para sentirse" className="text_complemet_contact_section w-[65%]" />
                    <button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "8px 30px",
                            marginTop: "15px",
                            border: "1px solid #D6769A",
                            borderRadius: "25px",
                            boxShadow: "2px 2px 6px #0008",
                            height: "40px",
                            width: "80%"
                        }}
                        className="cta_info_contact_section cursor-pointer bg-[#340447] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]">

                    </button>
                </div>
                <div className="map_container_2_contact_section w-[38.7%] min-h-[340px] ">
                    <h4 className="subtitle_map_container_2_contact_section text-[35px] font-light italic text-white bg-[#886891] text-center rounded-md py-2">
                        <img className="inline mr-2" src={icon_address} alt="Dirección de Event Clap" /> Dónde estamos?
                    </h4>
                    <div className="w-[100%] min-h-[300px] bg-[#EDF0F7] mt-2 rounded-lg"></div>
                </div>
            </div>
            <img className="decoration_2_contact_section absolute top-[10%] right-0 rotate-y-[180deg] -rotate-x-[180deg]" src={circle_3} alt="Decoración Web Site Event Clap" />
        </section>
    )
}