import { useReducer } from "react";

// Definição de estado inicial

const estadoInicial = { contador: 0 };

// Função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
      case "incrementar_dobrado":
        return { contador: estado.contador + 2 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error("Ação não suportada");
  }
}

const Counter = () => {
  // Inicializar o useReducer com estado inicial e função modificadora
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return <div>
    <p>Contagem: {estado.contador}</p>
    <button onClick={() => dispatch({tipo: "incrementar"})}>Incrementar</button>
    <button onClick={() => dispatch({tipo: "incrementar_dobrado"})}>Incrementar dobrado</button>
    <button onClick={() => dispatch({tipo: "decrementar"})}>Decrementar</button>
    <button onClick={() => dispatch({tipo: "resetar"})}>Resetar</button>
  </div>;
};

export default Counter;
