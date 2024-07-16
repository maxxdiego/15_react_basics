# 03 - Hooks

## useEffect

O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais são operações que afetam algo fora do escopo da função, como buscar dados de uma API, atualizar o DOM diretamente, ou configurar subscrições.<br><br>

Aqui está um resumo simples do useEffect:<br><br>

* Execução após renderização: O código dentro do useEffect é executado depois que o componente é renderizado.
* Dependências: Você pode passar uma lista de dependências para o useEffect. Ele só será executado novamente se algum valor nessa lista mudar.
* Limpeza: O useEffect pode retornar uma função de limpeza que será executada antes do efeito ser executado novamente (se as dependências mudarem) ou quando o componente for desmontado.


```bash
./src/components/UseEffectExample.jsx:

import { useEffect, useState } from 'react'

const UseEffectExample = () => {

    const [counter, setCounter] = useState(0)

    // useEffect -> Executa algo, baseado em algo
    // a mudança de um valor, carregamento da página

    useEffect(() => {
        document.title = `Você clicou ${counter} vezes.`
    })
  return (
    <div>
        <p>Você clicou {counter} vezes.</p>
        <button onClick={() => setCounter(counter + 1)}>Clique aqui!</button>
    </div>
  )
}

export default UseEffectExample

```

## useEffect - Limpeza de estado

```bash
./src/components/Timer.jsx:

import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // setInterval, setTimeout

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // limpeza de estado
    return () => clearInterval(intervalId);
  }, []); // array de dependências vazio

  return <div>Timer: {seconds} segundos.</div>;
};

export default Timer;

```

## useContext

O useContext é um hook do React que permite acessar o contexto em componentes funcionais de maneira simples e direta. O contexto é uma maneira de compartilhar dados "globais" entre componentes sem a necessidade de passar props manualmente em cada nível da árvore de componentes.<br><br>

Aqui está um resumo simples do useContext:<br><br>

* Criar um Contexto: Primeiro, você cria um contexto usando React.createContext().
* Provedor de Contexto: Em volta dos componentes que precisam acessar o contexto, você usa um provedor (Provider), que define o valor do contexto.
* Consumir o Contexto: Dentro dos componentes que precisam do valor do contexto, você usa o useContext para acessá-lo.

```bash
./src/contexts/MyContext.jsx:

import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Mensagem inicial!");

  const ContextValue = {
    message,
    setMessage,
  };

  return (
    <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
  );
};

```

```bash
./src/components/ContextValue.jsx:

import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

const ContextValue = () => {

    const { message } = useContext(MyContext)

  return (
    <div>O valor do contexto é {message}</div>
  )
}

export default ContextValue

```

```bash
./src/components/ChildrenComponent.jsx:

import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

const ChildrenComponent = () => {

  const { message, setMessage } = useContext(MyContext)

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Nova mensagem!")}>Alterar mensagem</button>
    </div>
  )
}

export default ChildrenComponent

```

```bash
./src/App.jsx:

...

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

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458