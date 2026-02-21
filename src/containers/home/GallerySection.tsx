import ImageCarousel from "../../components/CarruselImg"
import video1 from "../../assets/ORQUESTA SON DEL CARIBE.mp4"
import video2 from "../../assets/ORQUESTA SON DEL CARIB.mp4"
import img_2_gallery from "../../assets/img_2_gallery_section.webp";
import img_3_gallery from "../../assets/img_3_gallery_section.webp";
import img_4_gallery from "../../assets/img_4_gallery_section.webp";
import img_5_gallery from "../../assets/img_5_gallery_section.webp";
import img_6_gallery from "../../assets/img_6_gallery_section.webp";
import img_7_gallery from "../../assets/img_7_gallery_section.webp";

const images = [
    img_2_gallery,
    img_3_gallery,
    img_4_gallery,
    img_5_gallery,
    img_6_gallery,
]

export default function GallerySectionHome() {
    return (
        <section className="gallery_section_home" id="gallery_section" style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: "745px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
        }}>
            <div
                style={{
                    width: "77%",
                    minHeight: "60vh",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
                className="container_gallery_section_home mb-20">

                <div className="header_container_gallery_section_home flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[2px] bg-[#720742]"></div>
                    <h2 className="title_gallery_section_home uppercase text-[45px] text-center text-[#390447] font-bold">
                        eventos destacados
                    </h2>
                    <div className="line w-[82px] h-[2px] bg-[#720742]"></div>
                </div>
                {/** Mobile section */}
                <div className="md:hidden flex flex-col gap-y-4">
                    <div className="row_1_content_gallery_section_home flex justify-evenly items-center gap-4">
                        <video autoPlay muted loop className="rounded-lg bg-[#000] md:w-[728px] md:h-[365px]" style={{ boxShadow: "0px 2px 10px #0003" }}>
                            <source src={video1} type="video/mp4" />
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                    <div className="flex gap-4 overflow-scroll">
                        {images?.map((item,index)=>(
                            <img key={index} src={item} className="w-[160px] h-[160px]" alt={`Image Galery ${index+1}`} />
                        ))}
                    </div>
                    <img  src={img_7_gallery}  alt="Image Galery 7" />
                </div>

                {/** End Mobile Section */}
                <div className="hidden img_content_gallery_section_home md:flex flex-col gap-y-4">
                    <div className="row_1_content_gallery_section_home flex justify-evenly items-center gap-4">
                        <video autoPlay muted loop className="rounded-lg bg-[#000] md:w-[728px] md:h-[365px]" style={{ boxShadow: "0px 2px 10px #0003" }}>
                            <source src={video1} type="video/mp4" />
                            <source src={video2} type="video/mp4" />
                        </video>
                        <img src={img_2_gallery} alt="Image Galery 2" />
                    </div>
                    <div className="row_1_content_gallery_section_home flex justify-evenly items-center gap-4">
                        <img src={img_3_gallery} alt="Image Galery 3" />
                        <img src={img_4_gallery} alt="Image Galery 4" />
                        <img src={img_5_gallery} alt="Image Galery 5" />
                    </div>
                    <div className="row_1_content_gallery_section_home flex justify-evenly items-center gap-4">
                        <img src={img_6_gallery} alt="Image Galery 6" />
                        <img src={img_7_gallery} alt="Image Galery 7" />
                    </div>
                </div>
            </div>
        </section>
    )
} 