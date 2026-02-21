import rectangle_gray from "../../assets/rectangle_gray.webp";
import video1 from "../../assets/MATRI 2019.mp4"
import video2 from "../../assets/MATRI 2020.mp4"
import img_2_gallery from "../../assets/img_8_gallery_section.webp";
import img_3_gallery from "../../assets/img_9_gallery_section.webp";
import img_4_gallery from "../../assets/img_10_gallery_section.webp";
import img_5_gallery from "../../assets/img_11_gallery_section.webp";
import img_6_gallery from "../../assets/img_12_gallery_section.webp";
import img_7_gallery from "../../assets/img_13_gallery_section.webp";

const images = [
    img_2_gallery,
    img_3_gallery,
    img_4_gallery,
    img_5_gallery,
    img_6_gallery,
]

export default function GallerySectionBodas() {
    return (
        <section className="gallery_section_bodas" id="gallery_section" style={{
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
                className="container_gallery_section_bodas mb-20">

                <div className="header_container_gallery_section_bodas flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative bottom-[15px]"></div>
                    <h2 className="title_gallery_section_bodas text-[45px] text-[#390447] text-center leading-[35px] font-bold">
                        <span className="uppercase">Galería</span><br />
                        <span className="text-[26px] font-Barrow font-normal">Bodas & Celebraciones</span>
                    </h2>
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative bottom-[15px]"></div>
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
                <div className="hidden img_content_gallery_section_bodas md:flex flex-col gap-y-4">
                    <div className="row_1_content_gallery_section_bodas flex justify-evenly items-center gap-4">
                        <video autoPlay muted loop className="rounded-lg bg-[#000] md:w-[728px] md:h-[365px]" style={{ boxShadow: "0px 2px 10px #0003" }}>
                            <source src={video1} type="video/mp4" />
                            <source src={video2} type="video/mp4" />
                        </video>
                        <img src={img_2_gallery} alt="Image Galery 2" />
                    </div>
                    <div className="row_1_content_gallery_section_bodas flex justify-evenly items-center gap-4">
                        <img src={img_3_gallery} alt="Image Galery 3" />
                        <img src={img_4_gallery} alt="Image Galery 4" />
                        <img src={img_5_gallery} alt="Image Galery 5" />
                    </div>
                    <div className="row_1_content_gallery_section_bodas flex justify-evenly items-center gap-4">
                        <img src={img_6_gallery} alt="Image Galery 6" />
                        <img src={img_7_gallery} alt="Image Galery 7" />
                    </div>
                </div>
            </div>
        </section>
    )
} 