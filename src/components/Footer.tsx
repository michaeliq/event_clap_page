import bk_footer_desk from "../assets/bk_footer_desk.webp";
import icon_address from "../assets/icon_address.webp";
import icon_facebook from "../assets/icon_facebook.webp";
import icon_instagram from "../assets/icon_instagram.webp";
import icon_mail from "../assets/icon_mail.webp";
import icon_whatsapp from "../assets/icon_whatsapp.webp";
import icon_linkedin from "../assets/icon_linkedin.webp";
import logo from "../assets/logo.webp";
import juan_carlos_g from "../assets/juan carlos girlado.webp";

export default function Footer(){
    return(
        <div className={[
            "footer",
            "h-[100%] md:h-[582px]",
            "bg-repeat bg-center bg-contian md:bg-cover md:bg-no-repeat",
        ].join(" ")} style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundImage:`url(${bk_footer_desk})`,
            minHeight:"500px",
            width:"100%",
        }}>
           <div className={[
            "content_footer w-[100%] flex justify-between items-center flex-col-reverse gap-10 px-5 py-10",
            "md:w-[77%] md:flex md:justify-between md:flex-row",
            ].join(" ")}>
                <ul className="list_social_network flex flex-col gap-8 text-[22px] font-semibold">
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href="https://wa.me/573188016709" target="_blank"><img className="inline mr-2 w-[20px] md:w-[30px]" src={icon_whatsapp} alt="Número teléfonico Event Clap"/> <span className="underline md:no-underline">(57) 318 801 6709</span></a></li>
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href="mailto:gerencia@eventclap.com"><img className="inline mr-2 w-[20px] md:w-[30px]" src={icon_mail} alt="Correo electrónico Event Clap"/> <span className="underline md:no-underline">gerencia@eventclap.com</span></a></li>
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href="https://maps.app.goo.gl/3BRgBfS7FD2jWu4p8"><img className="inline mr-2 w-[20px] md:w-[30px]" src={icon_address} alt="Dirección de Event Clap"/><span className="underline md:no-underline">Cr 28B N 72 -12 Bogotá- Colombia</span></a></li>
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href="https://www.instagram.com/event_clap"><img className="inline mr-2 w-[20px] md:w-[30px]" src={icon_instagram} alt="Cuenta de instagram de Event Clap"/><span className="underline md:no-underline">event_clap</span></a></li>
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href=""><img className="inline mr-2 w-[15px] md:w-[20px]" src={icon_facebook} alt="Cuenta de facebook de Event Clap"/> <span className="underline md:no-underline">Juan Carlos Giraldo</span></a></li>
                    <li className="link_social_footer font-Barrow text-[18px] md:text-[24px] text-white"><a href="https://www.linkedin.com/in/juan-carlos-giraldo-restrepo-78a06b90/"><img className="inline mr-2 w-[20px] md:w-[30px]" src={icon_linkedin} alt="Cuenta de Linkedin de Event Clap"/><span className="underline md:no-underline">Juan Carlos Giraldo Restrepo</span></a></li>
                </ul>
                <div className="container_logo_footer flex flex-col md:items-end justify-center items-center ">
                    <img src={logo} alt="Logo Event Clap" className="logo_footer w-[80%] md:w-[100%]" />
                    <img src={juan_carlos_g} alt="Firma Juan C Giraldo" className="firma_footer w-[90%] md:w-[100%]" />
                </div>
            </div> 
        </div>
    )
}