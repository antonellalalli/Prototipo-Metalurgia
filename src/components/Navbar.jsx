import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="bg-[#edeeef] ">
        <nav className="flex items-end  h-20 gap-4 justify-around ">
          <div className="flex justify-center items-center m-auto mr-auto">
            <img className="h-15 w-90 " src="/public/logo png (1).png" alt="" />
          </div>
          <ul className=" text-black flex flex-row  items-center gap-10 p-4  w-full text-[20px] font-medium mr-18 ">
            <li className="mr-auto"></li>
            <li className="navbar-li">Inicio</li>
            <li className="navbar-li">Circulares</li>
            <li className="navbar-li">Agenda</li>
            <li className="navbar-li">Contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
