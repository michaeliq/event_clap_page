import icon_start from "../../assets/start_icon.webp"
import vivieron_la_experiencia from "../../assets/vivieron-la-experiencia.webp"
import vertical_card_gray from "../../assets/rectangle_gray_vertical.webp"

const videos_data = [
    {
        link:""
    },
    {
        link:""
    },
    {
        link:""
    },
]

export default function GalleryVideosSectionBodas() {
    return (
        <div className="gallery_videos_section_bodas"
            style={{
                backgroundColor: "#fff",
                width: "100%",
                minHeight: "635px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "50px",
            }}
        >
            <div className="header_container_gallery_videos_section_bodas bg-[#390447] w-[77%] rounded-[35px] py-3 flex justify-center items-center gap-5 mb-5" style={{boxShadow:"0px 2px 10px #000d"}}>
                <img src={icon_start} alt="start image" />
                <h2 className="title_gallery_videos_section_bodas uppercase text-[50px] leading-[35px] text-white font-normal font-Barrow font-Barrow">
                    premiados por quines
                </h2>
                <img src={icon_start} alt="start image" />
            </div>
            <img src={vivieron_la_experiencia} alt="Vivieron la experiencia" />
            <div className="card_container_gallery_videos_section_bodas flex gap-10">
                { videos_data?.map((video,key)=>(
                    <img src={vertical_card_gray} alt="example" />
                )) }
            </div>
        </div>
    )
}