# React Router

## Instalando o React Router

```bash
npm install react-router-dom
```

## Configurando o React Router

```bash

# ./src/main.jsx:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

## Criando rotas

```bash
# ./src/App.jsx:

import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  return <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </>;
}

export default App;

```

## Criando links para as rotas:

```bash

# ./src/App.jsx:

  <nav>
    <ul>

      <li><Link to="/">Início</Link></li>
      <li><Link to="/about">Sobre</Link></li>
      <li><Link to="/contact">Contato</Link></li>
    </ul>
  </nav>

```

## Utilizando o NavLink

Com o NavLink é possível marcar o link ativo no momento

```bash

# ./src/App.jsx:

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="contact"
            >
              Contato
            </NavLink>
          </li>

```

## useNavigate

Com o useNavigate é possível redirecionar o usuário para um determinado link

```bash

# ./src/components/Login.jsx:

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Redirecionando o usuário de URL
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`O usuário ${username} logou com sucesso!`);

    navigate("/");
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

```

## Rotas aninhadas

```bash

# ./src/App.jsx:

...

      <Routes>

          ...

        {/* 4 - Rotas aninhadas */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;

```

```bash

# ./src/components/Dashboard.jsx:

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="profile">Perfil</Link>
            </li>
            <li>
              <Link to="settings">Configurações</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>

        {/* Outlet será o "alvo" onde o conteúdo dos links serão carregados */}
        <Outlet />


      </div>
    </>
  );
};

export default Dashboard;

```

## Rotas com parâmetros (rotas dinâmicas)

```bash

# ./src/App.jsx:

...

        {/* 5 - Rotas com parâmetros (dinâmicas) */}
        <div>
          <h2>Tarefas</h2>
          <ul>
            <li>
              <Link to="/tasks/1">Tarefa 1</Link>
            </li>
            <li>
              <Link to="/tasks/2">Tarefa 2</Link>
            </li>
            <li>
              <Link to="/tasks/3">Tarefa 3</Link>
            </li>
          </ul>
        </div>

...

         {/* 5 - Rotas com parâmetros (dinâmicas) */}
         <Route path="/tasks/:taskId" element={<TaskDetails />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;

```


```bash

# ./src/components/TaskDetail.jsx:

import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams();
  return <div>
    <h2>Detalhes da tarefa:</h2>
    <p>Vendo a tarefa: {taskId}</p>
  </div>;
};

export default TaskDetails;

```

## Página 404 (Not found)

```bash

# ./src/App.jsx:

...

        {/* 6 - Página 404 (Not Found) */}
        <div>
          <h2>Itens</h2>
          <Link to="/items/1">Item 1</Link>
        </div>

...

        {/* 6 - Página 404 (Not Found) */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;

```

```bash

# ./src/components/NotFound.jsx:

import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>404</h2>
        <p>Página não encontrada!</p>
        <Link to="/">Voltar para a home</Link>
    </div>
  )
}

export default NotFound

```

<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458