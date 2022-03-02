const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos De Pacientes{" "}
      </h2>
      <p className="text-lg mt-5 text-center pb-5">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="pb-5">
          <label
            htmlFor="mascota"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre De Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
          />
        </div>
        <div className="pb-5">
          <label
            htmlFor="propietario"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre De el Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
          />
        </div>
        <div className="pb-5">
          <label
            htmlFor="email"
            className="block font-bold text-gray-700 uppercase"
          >
            Email De el Propietario
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="pb-5">
          <label
            htmlFor="date"
            className="block font-bold text-gray-700 uppercase"
          >
            Fecha de Alta
          </label>
          <input
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>
        <div className="pb-5">
          <label
            htmlFor="sintomas"
            className="block font-bold text-gray-700 uppercase"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            cols="20"
            rows="5"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 font-bold text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
