import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" bg-white h-full er mt-10 rounded-2xl flex flex-col justify-center items-center gap-10  ">
        <div className="flex flex-row gap-10 p-6 ">
          <div>
            <div className=" flex flex-col items-center justify-center leading-none">
              <p className=" title text-6xl md:text-7xl font-bold  mt-5 italic tracking-wide ">
                JORNADAS
              </p>

              <div className="flex  gap-4  items-center mr-6">
                <p className="title text-6xl flex justify-center  italic ">
                  DE
                </p>

                <p className="anio title text-6xl font-bold  md:text-7xl">
                  2026
                </p>
              </div>

              <h1 className="text-7xl md:text-8xl font-extrabold flex justify-center  mb-5  tracking-wide text-orange-500 ">
                METALURGIA
              </h1>
            </div>

            <p className="text-[20px] mb-1 font-medium text-center ">
              20 y 21 de Agosto
            </p>
            <p className="text-[20px] mb-4 font-normal text-center">
              San Nicolás de los Arroyos, Buenos Aires, Argentina
            </p>
            <p className=" w-200 text-[18px] text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              aut ea saepe neque consequatur. Iure, consequuntur voluptatibus.
              Incidunt eveniet, iure nostrum repellat in omnis nobis provident
              vitae asperiores voluptates et. Quidem explicabo modi aliquid,
              dolores natus hic rem. Nisi excepturi corporis beatae! Molestias,
              unde, exercitationem eaque sequi nobis soluta velit vel voluptatem
              corporis odio doloribus, magni illum quidem suscipit voluptate.
              Illum quaerat quas aut debitis corrupti. Maiores accusantium
              voluptate praesentium nam ut maxime eligendi error quas nesciunt
              aliquam natus voluptates libero in doloribus, ipsam dignissimos
              doloremque nostrum consequatur. Architecto, magnam? Laboriosam
              delectus, ut dolor alias quidem sequi quam ipsa ducimus excepturi?
              Ab inventore, eum asperiores facilis error earum ipsum nobis
              recusandae molestias at repellat esse necessitatibus? Debitis
              recusandae impedit iste. Eos fugit error minima recusandae esse
              debitis, ex vel enim nemo dolores in atque tenetur, adipisci hic
              quas labore numquam voluptas repudiandae beatae expedita
              consequuntur quos. Impedit culpa est accusantium?
            </p>
          </div>
          <div className="flex flex-col gap-9 items-center justify-center">
            <div>
              <img
                className=" w-125 rounded-lg h-90 object-cover"
                src="Charla.jpeg"
                alt="6ta Jornada Metalurgica"
              />
            </div>
            <div className="flex flex-col justify-center  m-auto  items-center gap-4 ">
              <p className="text-3xl font-bold">¡Sumate a las jornadas!</p>
              <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 rounded-md w-100 h-20 text-3xl">
                INSCRIPCIÓN
              </button>
            </div>
            <div className="flex  w-full flex-col gap-4  items-center justify-center p-6  ">
              <h1 className="text-3xl font-semibold ">Encontranos en</h1>
              <div>
                <ul className="flex  flex-row gap-5 ">
                  <li>
                    <img
                      className="w-8 h-8 object-cover"
                      src="/link.png"
                      alt="Página Web"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10 h-10 "
                      src="/instagram.png"
                      alt="Instagram"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
