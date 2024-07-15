import "./App.css";
import Child from "./components/Child";
import Father from "./components/Father";
// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX */}
  <User />
  <Father />
  </>;
}

export default App;
