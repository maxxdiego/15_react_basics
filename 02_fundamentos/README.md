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

```bash
./src/components/User.jsx

import React from "react";

const User = () => {

  // Criando a variável
  const name = "Diego";

  return (
    <>
      // Utilizando uma expressão JSX com { } (chamando a variável)
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
  {/* Componente que possui a expressão JSX */}
  <User />
  </>;
}

export default App;
```

## Componente dentro de componente