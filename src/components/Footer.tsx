import bk_footer_desk from "../assets/bk_footer_desk.webp";
import icon_address from "../assets/icon_address.webp";
import icon_facebook from "../assets/icon_facebook.webp";
import icon_instagram from "../assets/icon_instagram.webp";
import icon_mail from "../assets/icon_mail.webp";
import icon_whatsapp from "../assets/icon_whatsapp.webp";

export default function Footer(){
    return(
        <div className="footer" style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundImage:`url(${bk_footer_desk})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            minHeight:"500px",
            height:"582px",
            width:"100%",
            backgroundSize:"100% 100%",
        }}>
           <div className="content_footer" style={{
            width:"77%"
           }}>
                <ul className="list_social_network flex flex-col gap-8 text-[22px] font-semibold">
                    <li className="link_social_footer text-white"><a href=""><img className="inline mr-2" src={icon_whatsapp} alt="Número teléfonico Event Clap"/> (57) 318 801 6709</a></li>
                    <li className="link_social_footer text-white"><a href=""><img className="inline mr-2" src={icon_mail} alt="Correo electrónico Event Clap"/> gerencia@eventclap.com</a></li>
                    <li className="link_social_footer text-white"><a href=""><img className="inline mr-2" src={icon_address} alt="Dirección de Event Clap"/> Cr 28B N 72 -12 Bogotá- Colombia</a></li>
                    <li className="link_social_footer text-white"><a href=""><img className="inline mr-2" src={icon_instagram} alt="Cuenta de instagram de Event Clap"/> event_clap</a></li>
                    <li className="link_social_footer text-white"><a href=""><img className="inline mr-2" src={icon_facebook} alt="Cuenta de facebook de Event Clap"/> Juan Carlos Giraldo</a></li>
                </ul>
            </div> 
        </div>
    )
}