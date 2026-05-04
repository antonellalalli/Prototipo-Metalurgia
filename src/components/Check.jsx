export default function Check({ checkBoxes, onChange }) {
  return (
    <div className="flex font-medium pl-2 text-[24px] gap-10 p-5 m-auto ">
      <label>
        <input
          className="mr-2 w-6 h-5"
          type="checkbox"
          name="asistencia"
          checked={checkBoxes.asistencia}
          onChange={onChange}
        />
        Asistencia
      </label>

      <label>
        <input
          className="mr-2 w-6 h-5"
          type="checkbox"
          name="presentacion"
          checked={checkBoxes.presentacion}
          onChange={onChange}
        />
        Presentacion de trabajo
      </label>
    </div>
  );
}
