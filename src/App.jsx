import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPacientes";
import "./App.css";
function App() {
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="mt-5 md:flex ">
        <Formulario />
        <ListadoPaciente />
      </div>
    </div>
  );
}

export default App;
