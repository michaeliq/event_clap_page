import { useState } from "react"
import { Link } from "react-router"

export default function Header(){

    return(
        <div className="header" style={{
            width:"100vw",
            position:"absolute",
            top:"125px",
            left:"0px",
            display:"flex",
            padding:"0px 100px",
            zIndex:1000
        }}>
            <div className="img_logo" style={{
                flex:1
            }}></div>
            <nav className="menu_container" style={{
                width:"100%",
                flex:2
            }}>
                <ul className="menu_list" style={{
                    display:"flex",
                    justifyContent:"flex-end",
                    width:"100%",
                    flex:1,
                    columnGap:"40px"
                }}>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Nosotros</li></Link>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Servicios</li></Link>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Música</li></Link>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Galería</li></Link>
                    <Link to={"#"}><li className="font-bold uppercase text-white">Contacto</li></Link>
                </ul>
            </nav>
        </div>
    )
}