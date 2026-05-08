import React from "react";
import Navbar from "./Navbar";
import Check from "./Check";
import { useState } from "react";
import Footer from "./Footer";

export default function Inscription() {
  const [checkBoxes, setIsChecked] = useState({
    asistencia: false,
    presentacion: false,
  });

  const [file, setFile] = useState([]);

  const handleRemoveFile = (fileToRemove) => {
    setFile(file.filter((f) => f.name !== fileToRemove.name));
  };
  const handleFileChange = (event) => {
    event.preventDefault();
    const userfile = Array.from(event.target.files);

    if (userfile.length > 0) {
      const files = userfile.filter((f) => f.type === "application/pdf");

      if (files.length > 0) {
        setFile([...file, ...userfile]);
      } else alert("Por favor, seleccione un archivo PDF válido");
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let newCheckBoxes;
    switch (name) {
      case "asistencia":
        newCheckBoxes = {
          presentacion: false,
          asistencia: checked,
        };
        break;

      case "presentacion":
        newCheckBoxes = {
          asistencia: false,
          presentacion: checked,
        };
        break;
      default:
        newCheckBoxes = checkBoxes;
    }
    setIsChecked({
      ...newCheckBoxes,
    });
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="m-auto mt-10 w-220 text-center h-full ">
          <span className="text-[24px] font-medium  m-auto w-150 mb-5 text-center ">
            Para inscribirse a las jornadas de metalurgia, por favor complete el
            siguiente formulario con sus datos personales. Si desea presentar un
            trabajo, seleccione la opción correspondiente y complete los campos
            adicionales.
          </span>
        </div>
        <form className="flex flex-col bg-orange-400 w-240 h-full  justify-start items-start  mt-10  text-center rounded-2xl m-auto mb-20  wrap">
          <div className="flex flex-col gap-3 justify-start items-start m-auto ">
            <Check checkBoxes={checkBoxes} onChange={handleCheckboxChange} />

            <div className="flex flex-col justify-start items-start gap-1 pl-2">
              <label
                className=" text-dark text-[26px] font-bold "
                htmlFor="nombre">
                Nombre y Apellido
              </label>
              <input
                className="bg-white rounded-2xl border border-gray-300 text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-150 h-14 text-start "
                type="text"
                placeholder="Ingrese su nombre completo"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-1 pl-2">
              <label
                className=" text-dark-500 font-bold text-[26px] "
                htmlFor="email">
                Email
              </label>
              <input
                className="bg-white rounded-2xl border border-gray-300 text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-150 h-14 text-start"
                type="email"
                placeholder="Ingrese su email"
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-2 ">
              <label
                className=" text-dark-500  font-bold text-[26px] "
                htmlFor="institucion">
                Institucion
              </label>
              <input
                className="bg-white rounded-2xl border border-gray-300 text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-150 h-14 text-start mb-3"
                type="text"
                placeholder="Ingrese su institución"
              />
            </div>
            {checkBoxes.presentacion && (
              <>
                <div className="flex flex-col justify-start items-start gap-1 pl-2">
                  <label
                    className=" text-dark-500  font-bold text-[26px] "
                    htmlFor="titulo">
                    Titulo del trabajo
                  </label>
                  <input
                    className="bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 text-start w-150 h-14 text-2xl"
                    type="text"
                    placeholder="Ingrese el titulo del trabajo"
                  />
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2">
                  <label
                    className=" text-dark-500  font-bold text-[26px] "
                    htmlFor="autores">
                    Autores
                  </label>
                  <input
                    className="bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 text-start w-150 h-14 text-2xl"
                    type="text"
                    placeholder="Ingrese los autores del trabajo"
                  />
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-5">
                  <div>
                    <input
                      type="file"
                      accept=".pdf"
                      multiple
                      id="work-file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                  <label
                    className=" text-dark-500  font-medium text-[20px] block p-2 bg-white rounded-2xl cursor-pointer  hover:bg-gray-200"
                    htmlFor="work-file">
                    Subir archivo de trabajo
                  </label>
                  {file && file.length > 0 && (
                    <div className="flex flex-col  items-start mt-2">
                      {file.map((f, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 items-center  ">
                          <p>{f.name}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(f)}>
                            <img
                              className="w-8 h-8 mt-2 hover:bg-amber-700 rounded-full p-1 cursor-pointer "
                              src="/cross.png"
                              alt="Eliminar Archivo"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className=" text-white font-bold  text-[24px] rounded-2xl w-150 h-14 m-auto mb-5 bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer ">
            Inscribirse
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
