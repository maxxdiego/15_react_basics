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
