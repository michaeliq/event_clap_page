import rectangle_gray from "../../assets/img_20_gallery_section.webp";
import img_2_gallery from "../../assets/img_21_gallery_section.png";
import img_3_gallery from "../../assets/img_22_gallery_section.webp";
import img_4_gallery from "../../assets/img_23_gallery_section.webp";
import img_5_gallery from "../../assets/img_24_gallery_section.webp";
import img_6_gallery from "../../assets/img_25_gallery_section.webp";
import img_7_gallery from "../../assets/img_26_gallery_section.webp";

export default function GallerySection() {
    return (
        <section className="gallery_section" id="gallery_section" style={{
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
                className="container_gallery_section mb-20">

                <div className="header_container_gallery_section flex justify-center items-center gap-5 my-5">
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative bottom-[15px]"></div>
                    <h2 className="title_gallery_section text-[45px] text-[#390447] text-center leading-[35px] font-bold">
                        <span className="uppercase">Galería</span><br />
                        <span className="text-[26px] font-Barrow font-normal">Activaciones BTL</span>
                    </h2>
                    <div className="line w-[82px] h-[4px] rounded-[4px] bg-[#720742] relative bottom-[15px]"></div>
                </div>
                <div className="img_content_gallery_section flex flex-col gap-y-4">
                    <div className="row_1_content_gallery_section flex justify-evenly items-center gap-4">
                        <img src={rectangle_gray} alt="Image Galery 1" />
                        <img src={img_2_gallery} alt="Image Galery 2" />
                    </div>
                    <div className="row_1_content_gallery_section flex justify-evenly items-center gap-4">
                        <img src={img_3_gallery} alt="Image Galery 3" />
                        <img src={img_4_gallery} alt="Image Galery 4" />
                        <img src={img_5_gallery} alt="Image Galery 5" />
                    </div>
                    <div className="row_1_content_gallery_section flex justify-evenly items-center gap-4">
                        <img src={img_6_gallery} alt="Image Galery 6" />
                        <img src={img_7_gallery} alt="Image Galery 7" />
                    </div>
                </div>
            </div>
        </section>
    )
} 