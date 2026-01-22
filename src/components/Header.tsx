import { useState } from "react"
import { Link } from "react-router"
import logo from "../assets/logo.webp"

export default function Header(){

    return(
        <div className="header" style={{
            width:"100vw",
            position:"absolute",
            top:"80px",
            left:"0px",
            padding:"0px 100px",
            zIndex:1000,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            paddingLeft:"11.5%",
            paddingRight:"11.5%",
        }}>
            <div className="img_logo" style={{
                flex:1
            }}>
                <Link to={"/"}>
                <img src={logo} className="w-[50%] max-w-[350px]" alt="Logo Event Clap"/>
                </Link>
            </div>
            <nav className="menu_container" style={{
                width:"100%",
                flex:2
            }}>
                <ul className="menu_list" style={{
                    display:"flex",
                    justifyContent:"flex-end",
                    alignItems:"center",
                    width:"100%",
                    flex:1,
                    columnGap:"40px"
                }}>
                    <Link to={"/#we_section_home"}><li className="font-bold uppercase text-white">Nosotros</li></Link>
                    <Link to={"/#services_section_home"}><li className="font-bold uppercase text-white">Servicios</li></Link>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Música</li></Link>
                    <Link to={"/#gallery_section_home"}><li className="font-bold uppercase text-white">Galería</li></Link>
                    <Link className="bg-[#700893] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893]" to={"https://wa.me/573188016709"} target="_blank"><li className="font-bold uppercase">Contacto</li></Link>
                </ul>
            </nav>
        </div>
    )
}