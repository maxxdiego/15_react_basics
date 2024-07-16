import "./App.css";
import Timer from "./components/Timer";
import UseEffectExample from "./components/UseEffectExample";
import ChildrenComponent from "./components/ChildrenComponent";
import { MyContextProvider } from "./contexts/MyContext";
import ContextValue from "./components/ContextValue";
function App() {
  return (
    <>
      {/* useEffect */}
      <UseEffectExample />
      {/* Limpeza de estado - useEffect */}
      <Timer />
      {/* useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MyContextProvider>
        <ChildrenComponent />
        <ContextValue />
      </MyContextProvider>
    </>
  );
}

export default App;
