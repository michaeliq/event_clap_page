"use client"
import { Link } from "react-router";
import whatsapp_icon from "../assets/whatsapp.png"
import "../styles/WhatsApp.css";


export default function WhatsAppComponent(){
    return(
        <Link to="https://wa.me/573188016709" target="_blank" className="z-10000 whatsapp-comp fixed bottom-5 right-5 ">
            <img src={whatsapp_icon} alt="WhatsApp Event Clap" className="w-[70px] h-auto hover:scale-[1.1]" />
        </Link>
    )
}
