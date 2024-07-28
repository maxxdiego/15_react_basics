# 02 - Fundamentos

## Criação de componente

* Criando um componente "Welcome.jsx":

```bash
# ./src/components/Welcome.jsx:

const Welcome = () => {
  return <h1>Hello, world!</h1>;
};

export default Welcome;
```
* Importando e utilizando o componente no arquivo App.jsx

```bash
# ./src/App.jsx:

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
# ./src/components/User.jsx:

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
# ./src/App.jsx:

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
# ./src/components/Parent.jsx:

const Parent = () => {
  return (
    <div>
        Componente pai
    </div>
  )
}

export default Parent

```

```bash
# ./src/components/Child.jsx:

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
# ./src/components/Parent.jsx:

// Importando o componente filho
import Child from './Child'

const Parent = () => {
  return (
    <div>
        Componente pai

        {*/ Chamando o componente filho: /*}
        <Child />

    </div>
  )
}

export default Parent

```

```bash
# ./src/App.jsx:

import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Parent from "./components/Parent";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX: */}
  <User />

  {/* Componente pai que possui um compnente filho incorporado: */}
  <Parent />

  </>;
}

export default App;

```

## Props

* No React, "props" (abreviação de "properties") são objetos que contêm valores passados de um componente pai para um componente filho. Elas permitem que os componentes se comuniquem e compartilhem dados entre si. As props são imutáveis, ou seja, um componente filho não deve alterá-las. Em resumo, props são usadas para passar dados e funcionalidades de um componente para outro.

* Resumindo: "props" são como pacotinhos de informações que você envia de um componente para outro. Pense nelas como as características ou qualidades que um componente tem e que você quer compartilhar. Por exemplo, se você tem um componente de botão, você pode usar props para dizer qual texto deve aparecer no botão. As props ajudam os componentes a conversar e trabalhar juntos.

```bash
# ./src/Description.jsx:

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
# ./src/App.jsx:

import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Parent from "./components/Parent";
import Description from "./components/Description";

function App() {
  return <>
  {/* Comentário */}
  {/* Chamando o componente */}
  <Welcome />
  {/* Componente que possui a expressão JSX: */}
  <User />
  {/* Componente pai que possui um compnente filho incorporado: */}
  <Parent />

  {/* Chamando o componente e passando as props para o mesmo: */}
  <Description name="Diego" age={18} />

  </>;
}

export default App;
```

## Desestruturação de props

```bash
# ./src/components/Dog.jsx

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
# ./src/App.jsx

import "./App.css";

// Importando o componente
import User from "./components/User";
import Welcome from "./components/Welcome";
import Parent from "./components/Parent";
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
  <Parent />

  {/*  Chamando o componente e passando as props para o mesmo: */}
  <Description name="Diego" age={18} />

  {/* Usando destructuring para passar as props: */}
  <Dog name="Rex" breed="Pitbull" />
  </>;
}

export default App;

```

## Hook - useState

O useState é um hook do React que permite adicionar estado a componentes funcionais. Em outras palavras, ele permite que você crie variáveis que o React observa e que, quando atualizadas, fazem com que o componente seja re-renderizado para refletir as mudanças.

```bash
# ./src/components/Counter.jsx:

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

```

```bash
# ./src/App.jsx:

...

  { /* Chamando o componente com useState: */}
  <Counter />

  </>;


}

export default App;

```

## Múltiplos estados (vários states em um componente)

```bash
# ./src/components/UserInfoForm.jsx:

import { useState } from "react";

const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault()

    // Acessar a API via fetch ou axios

    console.log(name, email);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o seu e-mail"
      />
      {name} {email}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserInfoForm;

```

## Eventos no React JS

```bash
# ./src/components/Button.jsx:

// Chamando a função handleClick no OnClick e passando argumento:

// const Button = () => {

//     const handleClick = (num) => {
//         console.log("Clicou!", num)
//     }
//   return (
//     <button onClick={() => handleClick(5)}>Clique em mim!</button>
//   )
// }

const Button = () => {

    const handleClick = () => {
        console.log("Clicou!")
    }
  return (
    <button onClick={handleClick}>Clique em mim!</button>
  )
}

export default Button

```

## Passando funções de manipulação de eventos como props

```bash
# ./src/components/ParentFunction.jsx:

import ChildFunction from "./ChildFunction";

const ParentFunction = () => {
  const handleChildClick = () => {
    console.log("Função criada no elemento pai!");
  };

  return (
    <div>
      <ChildFunction onChildClick={handleChildClick} />
    </div>
  );
};

export default ParentFunction;

```

```bash
# ./src/components/ChildFunction.jsx:

const ChildFunction = ({ onChildClick }) => {
  return (
    <button onClick={onChildClick}>Botão criado no componente filho</button>
  );
};

export default ChildFunction;

```

## Eventos de formulários

```bash
# ./src/components/Form.jsx

const Form = () => {

    const [value, setValue] = useState("");
    
    const handleSubmit = (event) => {
        // manipulação de dados
        // validação
        // envio ao servidor pela API
        // loading
        // chamada da função de mensagens de erro/sucesso

        event.preventDefault()

        console.log("Formulário enviado: ", value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}placeholder="Preencha o campo"/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
```

### Renderização condicional

```bash
# ./src/components/RenderConditional.jsx:

const RenderConditional = ({user}) => {
    // se houver usuário, exiba uma mensagem de boas vindas
  return (
    <div>
        {user && <h1>Bem-vindo de volta, {user}!</h1>}
    </div>
  )
}

export default RenderConditional
```

```bash
# ./src/App.jsx:

...

    {/* Renderização condicional */}
    <RenderConditional user="Diego" />

  </>;


}

export default App;

```

## Expressão ternária

```bash
# ./src/components/LoginButton.jsx:

const LoginButton = ({loggedIn}) => {
  // Entrar -> deslogado
  // Sair -> logado

  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
};

export default LoginButton;

```

```bash
# ./src/App.jsx:

...

    {/* Expressão ternária */}
    <LoginButton loggedIn={false} />
    <LoginButton loggedIn={true} />

  </>;


}

export default App;

```

## Render nulo

```bash
# ./src/components/Warning.jsx:

const Warning = ({ warning }) => {

    if (!warning) {
        return null
    }

  return (
    <div>
        Aviso!
    </div>
  )
}

export default Warning

```

```bash
# ./src/App.jsx:

...

      {/* Render nulo */}
      <Warning warning={null}/>
      <Warning warning={"Temos um conteúdo."}/>
    </>
  );
}

export default App;

```

# Listas (arrays) e Chaves (keys)

```bash
# ./src/components/NumberList.jsx:

const NumberList = ({numbers}) => {
    // Não será usado estruturas de loop como for, while, etc.
    // e sim métodos de array - filter, map, reduce, ...

    // Chaves - key
    // é como se fosse um identificador único para cada elemento

  return (
    <div>
        {numbers.map((number, index) => (
            <li key={index}>{ number }</li>
        ))
        }
    </div>
  )
}

export default NumberList

```

```bash
# ./src/App.jsx:

...

      {/* Listas e Chaves (keys) */}
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
    </>
  );
}

export default App;

```

## Estilos por atributo

```bash
# ./src/components/StylezedButton.jsx:

const StylezedButton = () => {
    
    // class => classNme
    // for = htmlFor

    const buttonStyle = {
        // background-color -> backgroundColor
        backgroundColor: "darkgreen",
        color: "#fff",
        padding: "15px 32px",
        cursor: "pointer"
    }

  return (
    <button style={buttonStyle}>
        Clique em mim!
    </button>
  )
}

export default StylezedButton

```

## Estilos globais

```bash
# ./src/components/BlueButton.jsx:

const BlueButton = () => {
  return (
    <button className="blueButton">
        Botão azul
    </button>
  )
}

export default BlueButton

```


```bash
# ./src/index.css:

...

.blueButton {
  background-color: #008cba;
  color: #fff;
  padding: 15px 30px;
  border-radius: 15px;
}

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458