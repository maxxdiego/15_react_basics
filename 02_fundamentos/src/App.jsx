import "./App.css";
import Description from "./components/Description";
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
  {/* Componente pai que possui um compnente filho incorporado */}
  <Father />

  <Description name="Diego" age={18} />
  </>;
}

export default App;
