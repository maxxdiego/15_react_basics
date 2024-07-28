import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 3 - useNavigate */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
}

export default App;
