import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Father from "./components/Father";
import Description from "./components/Description";
import Dog from "./components/Dog";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX */}
  <User />
  {/* Componente pai que possui um compnente filho incorporado */}
  <Father />

  {/*  Chamando o componente e passando as props para o mesmo: */}
  <Description name="Diego" age={18} />

  {/* Usando destructuring para passar as props: */}
  <Dog name="Rex" breed="Pitbull" />
  </>;
}

export default App;
