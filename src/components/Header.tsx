"use client"

import { useState } from "react"
import { Link } from "react-router"
import logo from "../assets/logo.webp"
import menuIcon from "../assets/menu_open_icon.png"
import menuCloseIcon from "../assets/menu_close_icon.png"
import menu_bk from "../assets/bk_menu.png"

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div className="header" style={{
            width: "100vw",
            position: "absolute",
            top: "80px",
            left: "0px",
            padding: "0px 100px",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "11.5%",
            paddingRight: "11.5%",
        }}>
            <div className="img_logo" style={{
                flex: 1
            }}>
                <Link to={"/"}>
                    <img src={logo} className="w-[100%] max-w-[450px] md:w-[50%]" alt="Logo Event Clap" />
                </Link>
            </div>
            <nav className="menu_container" style={{
                width: "100%",
                flex: 2
            }}>
                <ul className={[
                    "menu_list  md:flex  md:flex-row  md:justify-end md:w-full md:flex-1 md:column-gap-[40px] md:relative md:top-0 md:left-0  md:h-[100%]",
                    `bg-[url('../assets/bk_menu.png')] bg-no-repeat bg-cover md:bg-[url("")]`,
                    "w-[100%] flex  flex-col  items-center justify-center gap-10 h-screen w-full  fixed left-0"
                 ].join(" ").concat(isMenuOpen ? " top-0" : " top-[-110%]")}
                    >
                    <Link className="w-[60%] text-center md:w-auto bg-[#fff] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893] md:border-0 md:bg-transparent md:hover:text-[#390447]"  onClick={() => setIsMenuOpen(false)} to={"/#we_section_home"}><li className="font-bold uppercase text-[#390447] md:text-white md:hover:text-[#390447]">Nosotros</li></Link>
                    <Link className="w-[60%] text-center md:w-auto bg-[#fff] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893] md:border-0 md:bg-transparent md:hover:text-[#390447]"   onClick={() => setIsMenuOpen(false)} to={"/#services_section_home"}><li className="font-bold uppercase text-[#390447] md:text-white md:hover:text-[#390447]">Servicios</li></Link>
                    <Link className="w-[60%] text-center md:w-auto bg-[#fff] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893] md:border-0 md:bg-transparent md:hover:text-[#390447]"   onClick={() => setIsMenuOpen(false)} to={"/bodas/#musica"}><li className="font-bold uppercase text-[#390447] md:text-white md:hover:text-[#390447]">Música</li></Link>
                    <Link className="w-[60%] text-center md:w-auto bg-[#fff] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893] md:border-0 md:bg-transparent md:hover:text-[#390447]"   onClick={() => setIsMenuOpen(false)} to={"#gallery_section"}><li className="font-bold uppercase text-[#390447] md:text-white md:hover:text-[#390447]">Galería</li></Link>
                    <Link   onClick={() => setIsMenuOpen(false)} className="w-[60%] text-center md:w-auto bg-[#700893] border border-white py-2 px-4 rounded-[25px] text-white hover:text-[#700893] hover:bg-[#fff] hover:border-[#700893] mt-10 md:mt-0" to={"#contact_section"}><li className="font-bold uppercase">Contacto</li></Link>
                </ul>
            </nav>
            {!isMenuOpen && <img src={menuIcon} alt="Open Menu" className="md:hidden w-[30px] absolute top-[10px] right-[11.5%] cursor-pointer" onClick={() => setIsMenuOpen(true)} />}
            {isMenuOpen && <img src={menuCloseIcon} alt="Close Menu" className="md:hidden w-[30px] fixed z-1000 top-[10%] right-[11.5%] cursor-pointer" onClick={() => setIsMenuOpen(false)} />}
        </div>
    )
}