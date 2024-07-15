// Importando o hook useState
import { useState } from "react";

const Counter = () => {
  // [ consultar valor, alterar valor ]
  const [count, setCount] = useState(1);

  // Variáveis não re-renderizam o componente
  // let x = 10;
  // console.log(x)

  // <div>
  //    <p>Contador: {x}</p>
  //    <button onClick={() => (x = x+1)}>Aumentar</button>
  // </div>

  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </div>
    </>
  );
};

export default Counter;
