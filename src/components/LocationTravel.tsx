import travel1 from "../assets/travel_1.webp";
import travel2 from "../assets/travel_2.webp";
import travel3 from "../assets/travel_3.webp";
import travel4 from "../assets/travel_4.webp";
import travel5 from "../assets/travel_5.webp";
import circle_1 from "../assets/circle_1.webp";

const locationData = [
    {
        image: travel1,
        link: "",
    },
    {
        image: travel2,
        link: "",
    },
    {
        image: travel3,
        link: "",
    },
    {
        image: travel4,
        link: "",
    },
    {
        image: travel5,
        link: "",
    },

]

export default function LocationTravel() {
    return (
        <section className="location_travel pt-15" style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: "545px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
        }}>
            <img className="rotate-y-180 absolute top-[129px] md:h-[60%] left-0 w-[70px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />
            <div className="container_location_travel" style={{
                width: "77%",
                minHeight: "60vh",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <div className="header_location_travel flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                    <h2 className="title_location_travel text-[30px] md:text-[45px] w-max-conetent text-[#390447] text-center md:leading-[45px] font-bold">
                        Colombia se descubre <span className="text-[#AD0569]">con los sentidos</span>
                    </h2>
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative"></div>
                </div>
                <p className="text-[#390447] text-center px-5 font-Barrow text-[24px]">
                    La energía vibrante de sus ciudades, la magia colonial de sus pueblos y la grandeza natural de sus paisajes crean escenarios únicos para momentos memorables.
                    <br/>
                    <span className="font-bold">
                        Creamos experiencias tipo concierge, donde cada detalle del itinerario se diseña a la medida, combinando comodidad, autenticidad y excelencia.
                    </span>
                </p>
                <div className="card_container_location_travel w-full flex flex-col md:flex-row justify-center items-between mt-10 gap-[5%] mb-10">
                    {locationData.map((loc, index) => (
                        <div key={index} className='flex flex-col items-center justify-center mb-10 md:mb-0'>
                            <img src={loc.image} alt="Localizaciones en Colombia" className='w-[150px] h-[150px] md:w-[200px] md:h-auto rounded-[50%] border-[1.5px] border-t-[#3C074A] border-r-[#3C074A] border-l-[#9234E9] border-b-[#9234E9] p-1' />
                        
                        </div>
                    ))}

                </div>

            </div>
            <img className="md:hidden rotate-y-180 absolute bottom-[120px] md:h-[60%] left-0 w-[100px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />

            <img className="absolute bottom-[45%] md:top-[129px] md:h-[60%] right-0 w-[80px] md:w-auto" src={circle_1} alt="Decoración Web Site Event Clap" />

        </section>
    )
}