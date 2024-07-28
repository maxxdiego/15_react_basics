# React Router

## Instalando o React Router

```bash
npm install react-router-dom
```

## Configurando o React Router

```bash

./src/main.jsx:

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
./src/App.jsx:

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

./src/App.jsx:

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

./src/App.jsx:

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

./src/components/Login.jsx:

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