import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className="bg-[#edeeef] ">
        <nav className="flex items-end  h-25 gap-4 justify-around ">
          <div className="flex justify-center items-center m-auto mr-auto">
            <img
              className="h-15 w-90 "
              src="/logo.png"
              alt="Ingenieria Metalurgica"
            />
          </div>
          <ul className=" text-black flex flex-row  items-center gap-10 p-4  w-full text-[23px] font-medium mr-18 ">
            <li className="mr-auto"></li>
            <li className="navbar-li">
              <Link to="/">Inicio</Link>
            </li>
            <li className="navbar-li">Historia</li>
            <li className="navbar-li">Galería</li>
            <li className="navbar-li">Novedades</li>
            <li className="navbar-li">Contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
