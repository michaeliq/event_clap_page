

export default function CompInfoMarkeringEmocional() {
    return (
        <section className="info_comp_marketing_emocional" style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
        }}>
            <div style={{
                width: "77%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <div className=" flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                    <h2 className="text-[30px] md:text-[45px] text-[#390447] text-center leading-[35px] font-semibold">
                        Tecnología que <span className="text-[#390447] font-light">potencia la experiencia.</span>
                    </h2>
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                </div>
                <div className="flex justify-center items-center gap-5 my-2">
                    <p className="mb-4 text-[22px] font-Barrow text-center md:w-[80%]" >
                        Potencializamos tu evento con producción técnica profesional y soluciones 4.0 conectadas, inteligentes y memorables.
                    </p>
                </div>
            </div>
        </section>
    )
}