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

## useReducer

O useReducer é um hook do React que oferece uma maneira de gerenciar o estado em componentes funcionais, especialmente quando esse estado é complexo e envolve várias transições. Ele é uma alternativa ao useState e funciona de forma semelhante ao Redux, mas é integrado ao React.

### Vantagens

* Gerenciamento de Estado Complexo: Ideal para estados complexos com várias transições.
* Código Organizado: A separação das ações e do redutor ajuda a manter o código limpo e organizado.
* Previsibilidade: Como o estado é atualizado por meio de ações, o comportamento é mais previsível.
* O useReducer é uma ferramenta poderosa no React, especialmente útil quando o estado do componente é complicado e requer uma lógica de atualização mais sofisticada.

```bash
./src/components/Counter.jsx:

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

```

```bash
./src/App.jsx:

...

      {/* useReducer */}
      {/* estados mais complexos */}
      <Counter />

    </>
  );
}

export default App;

```

## Custom hook

Custom Hooks no React são funções JavaScript que começam com "use" e permitem reutilizar lógica de estado e efeitos entre componentes funcionais. Eles ajudam a evitar duplicação de código e tornam os componentes mais limpos e fáceis de manter.

### Por Que Usar Custom Hooks?
* Reutilização de Lógica: Permitem encapsular e reutilizar lógica de estado complexa em diferentes componentes.
* Organização: Mantêm o código organizado e modular.
* Facilidade de Manutenção: Facilita a manutenção e atualização da lógica de estado e efeitos.

### Criando um Custom Hook
Um Custom Hook é uma função que pode usar outros hooks internos, como useState, useEffect, useReducer, etc. Aqui está um exemplo básico:

```bash
./src/hooks/useWindowSize.js:

import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Função que altera os valores
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Evento que dispara a função
    window.addEventListener("resize", handleResize);

    handleResize()

    // Limpeza de memória
    return() => window.removeEventListener("resize", handleResize)
  }, []);

  return windowSize
}

```

```bash
./src/components/DisplayWindowSize.js:

import useWindowSize from "../hooks/useWindowSize";

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>A largura da janela é: {width}</p>
      <p>A altura da janela é: {height}</p>
    </div>
  );
};

export default DisplayWindowSize;

```

## Slots e children props

```bash
./src/components/Container.jsx:

const Container = ({ children }) => {
  return (
    <div className="container">
      <h2>Iniciando:</h2>
      <div>{children}</div>
      <p>Terminou.</p>
    </div>
  );
};

export default Container;

```

```bash
./src/App.jsx:

...

      {/* Slots e children props */}
      <Container>
        <h1>Título da seção</h1>
        <p>Este é o meu subtítulo</p>
        <Counter />
      </Container>

```


## Sincronizar o estado com props

```bash
./src/components/UserProfile.jsx:

import { useState, useEffect } from "react";

const UserProfile = ({userId}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Função para buscar dados
    const findUsers = async () => {
      // resposta assíncrona
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const userData = await response.json();

      setUser(userData);
    };

    if (userId) {
      findUsers();
    }
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default UserProfile;

```

```bash
./src/App.jsx:

...

     {/* Sincronizar o estado com props */}
      {/* prop => componente => chamada de API => resulta em um dado */}
      <UserProfile userId={1}/>
      <UserProfile userId={2}/>
    </>
  );
}

export default App;

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458