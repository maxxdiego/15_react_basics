import "./App.css";
import Timer from "./components/Timer";
import UseEffectExample from "./components/UseEffectExample";
import ChildrenComponent from "./components/ChildrenComponent";
import { MyContextProvider } from "./contexts/MyContext";
import ContextValue from "./components/ContextValue";
import Counter from "./components/Counter";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Container from "./components/Container";
import UserProfile from "./components/UserProfile";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";
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
      {/* useReducer */}
      {/* estados mais complexos */}
      <Counter />
      {/* Custom hook */}
      <DisplayWindowSize />
      {/* Slots e children props */}
      <Container>
        <h1>Título da seção</h1>
        <p>Este é o meu subtítulo</p>
        <Counter />
      </Container>
      {/* Sincronizar o estado com props */}
      {/* prop => componente => chamada de API => resulta em um dado */}
      <UserProfile userId={1}/>
      <UserProfile userId={2}/>
      {/* useMemo */}
      <CalculoPesado numero={5}/>
      {/* useCallback */}
      <ContadorCallback />
    </>
  );
}

export default App;
