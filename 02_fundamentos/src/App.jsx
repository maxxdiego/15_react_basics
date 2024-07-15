import "./App.css";

// Importando o componente
import Welcome from "./components/Welcome";
import User from "./components/User";
import Parent from "./components/Parent";
import Description from "./components/Description";
import Dog from "./components/Dog";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import ParentFunction from "./components/ParentFunction";
import Form from "./components/Form";
import RenderConditional from "./components/RenderConditional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import StylezedButton from "./components/StylezedButton";
import BlueButton from "./components/BlueButton";
import Greeting from "./exercicios/components/Greeting";
import NumberCounter from "./exercicios/components/NumberCounter";
import TaskList from "./exercicios/components/TaskList";

function App() {
  return (
    <>
      {/* Comentário */}
      {/* Chamando o componente */}
      <Welcome />
      {/* Componente que possui a expressão JSX */}
      <User />
      {/* Componente pai que possui um compnente filho incorporado */}
      <Parent />

      {/*  Chamando o componente e passando as props para o mesmo: */}
      <Description name="Diego" age={18} />

      {/* Usando destructuring para passar as props: */}
      <Dog name="Rex" breed="Pitbull" />

      {/* Chamando o componente com useState: */}
      <Counter />

      {/* Múltiplos estados */}
      <UserInfoForm />

      {/* Eventos no React */}
      <Button />

      {/* Passando funções de manipulação de eventos como props */}
      <ParentFunction />

      {/* Eventos de formulários */}
      <Form />

      {/* Renderização condicional */}
      <RenderConditional user="Diego" />

      {/* Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />

      {/* Render nulo */}
      <Warning warning={null} />
      <Warning warning={"Temos um conteúdo."} />

      {/* Listas e Chaves (keys) */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />

      {/* Estilos por atributo */}
      <StylezedButton />

      {/* Estilos globais */}
      <BlueButton />

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <h1>Exercícios:</h1>
      <br />
      <br />
      <h3>Exercício 01:</h3>
      <Greeting name="João" />

      <br />
      <br />
      <br />

      <h3>Exercício 02:</h3>
      <NumberCounter />

      <br />
      <br />
      <br />

      <h3>Exercício 03:</h3>
      <TaskList
        tasks={[
          {
            id: "1",
            text: "Pagar contas.",
          },
          {
            id: "2",
            text: "Fazer compra.",
          },
          {
            id: "3",
            text: "Retirar o lixo.",
          },
          {
            id: "4",
            text: "Lavar o carro.",
          },
          {
            id: "5",
            text: "Estudar.",
          }
        ]}
      />
    </>
  );
}

export default App;
