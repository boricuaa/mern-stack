import Paciente from "./Paciente";
const ListadoPaciente = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes </h2>
      <p className="text-xl mt-2 text-center pb-5">
        Administra tus Pacientes Y{" "}
        <span className="text-indigo-600 font-bold">Citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPaciente;
