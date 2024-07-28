import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <>
      {/* 1 - Setup e configuração inicial */}
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          {/* 2 - NavLink */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="contact"
            >
              Contato
            </NavLink>
          </li>
          {/* 3 - useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 4 - Rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 3 - useNavigate */}
        <Route path="/login" element={<Login />} />
        {/* 4 - Rotas aninhadas */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
         {/* 5 - Rotas com parâmetros (dinâmicas) */}
         <Route path="/tasks/:taskId" element={<TaskDetails />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;
