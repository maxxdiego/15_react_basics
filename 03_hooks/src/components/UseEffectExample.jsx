import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [counter, setCounter] = useState(0);

  // useEffect -> Executa algo, baseado em algo
  // a mudança de um valor, carregamento da página

  useEffect(() => {
    document.title = `Você clicou ${counter} vezes.`;
  });
  return (
    <div>
      <p>Você clicou {counter} vezes.</p>
      <button onClick={() => setCounter(counter + 1)}>Clique aqui!</button>
    </div>
  );
};

export default UseEffectExample;
