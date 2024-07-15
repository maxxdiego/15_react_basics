# 02 - Fundamentos

## Criação de componente

* Criando um componente "Welcome.jsx":

```bash
./src/components/Welcome.jsx:

import React from "react";

const Welcome = () => {
  return <h1>Hello, world!</h1>;
};

export default Welcome;
```
* Importando e utilizando o componente no arquivo App.jsx

```bash
./src/App.jsx:

// Importando o componente
import Welcome from "./components/Welcome";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  </>;
}

export default App;

```

## Expressões do JSX

* Uma expressão JSX é um código javascript que incorporamos dentro do HTML, conforme a seguir:

```bash
./src/components/User.jsx:

import React from "react";

const User = () => {

  // Criando a variável
  const name = "Diego";

  return (
    <>
      // Utilizando uma expressão JSX com { } (chamando a variável):
      <div>Bem-vindo, {name}!</div>
    </>
  );
};

export default User;
```

```bash
./src/App.jsx:

// Importando o componente
import Welcome from "./components/Welcome";
import User from "./components/User";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX: */}
  <User />
  </>;
}

export default App;
```

## Componente dentro de componente

* Podemos chamar um componente dentro de outro conforme os modelos a seguir:

```bash
./src/components/Father.jsx:

import React from 'react'

const Father = () => {
  return (
    <div>
        Componente pai
    </div>
  )
}

export default Father

```

```bash
./src/components/Child.jsx:

import React from 'react'

const Child = () => {
  return (
    <div>
        Componente filho
    </div>
  )
}

export default Child

```

* Importando e chamando o componente filho dentro componente pai:

```bash
./src/components/Father.jsx:

import React from 'react'

// Importando o componente filho
import Child from './Child'

const Father = () => {
  return (
    <div>
        Componente pai

        {*/ Chamando o componente filho: /*}
        <Child />

    </div>
  )
}

export default Father

```

```bash
./src/App.jsx:

import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Father from "./components/Father";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX: */}
  <User />

  {/* Componente pai que possui um compnente filho incorporado: */}
  <Father />

  </>;
}

export default App;

```

## Props

* No React, "props" (abreviação de "properties") são objetos que contêm valores passados de um componente pai para um componente filho. Elas permitem que os componentes se comuniquem e compartilhem dados entre si. As props são imutáveis, ou seja, um componente filho não deve alterá-las. Em resumo, props são usadas para passar dados e funcionalidades de um componente para outro.

* Resumindo: "props" são como pacotinhos de informações que você envia de um componente para outro. Pense nelas como as características ou qualidades que um componente tem e que você quer compartilhar. Por exemplo, se você tem um componente de botão, você pode usar props para dizer qual texto deve aparecer no botão. As props ajudam os componentes a conversar e trabalhar juntos.

```bash
./src/Description.jsx:

import React from 'react'

const Description = (props) => {

    // props = {} é um objeto
    // propriedades -> chaves dos valoes
    // props.nome = "Diego"


  return (
    <div>
        <p>Seu nome é {props.name}</p>
        <p>Você tem: {props.age} anos de idade.</p>
    </div>
  )
}

export default Description
```

```bash
./src/App.jsx:

import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Father from "./components/Father";
import Description from "./components/Description";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX: */}
  <User />
  {/* Componente pai que possui um compnente filho incorporado: */}
  <Father />

  {/* Chamando o componente e passando as props para o mesmo: */}
  <Description name="Diego" age={18} />

  </>;
}

export default App;
```

## Desestruturação de props

```bash
./src/components/Dog.jsx

import React from 'react'

const Dog = ({name, breed}) => {
    // props.name = name
    // Destructuring => {}, []
  return (
    <div>
        <p>O cachorro se chama {name} e é da raça {breed}.</p>
    </div>
  )
}

export default Dog
```

```bash
./src/App.jsx

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
  {/* Componente que possui a expressão JSX: */}
  <User />
  {/* Componente pai que possui um compnente filho incorporado: */}
  <Father />

  {/*  Chamando o componente e passando as props para o mesmo: */}
  <Description name="Diego" age={18} />

  {/* Usando destructuring para passar as props: */}
  <Dog name="Rex" breed="Pitbull" />
  </>;
}

export default App;

```

