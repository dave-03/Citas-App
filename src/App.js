
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import ListadoPacientes from './Components/ListadoPacientes';
import {useState, useEffect} from 'react'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div><NavBar></NavBar>
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
          <Form
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
      </div>

    </div></div>)
}

export default App;
