import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";
import PostManager from "./components/PostManager";

function App() {
  return (
    <BrowserRouter>
      {/* 1 - GET com Fetch e Axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <ul>
          <li>
            <Link to="/fetch-posts">Fetch Posts</Link>
          </li>
          <li>
            <Link to="/axios-posts">Axios Posts</Link>
          </li>
        </ul>
      </div>
      {/* 2 - Requisições - POST e UPDATE/PUT */}
      <div>
        <Link to="/posts">Gerenciar posts</Link>
      </div>
      <Routes>
        {/* 1 - GET com Fetch e Axios */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />

        {/* 2 - Requisições - POST e UPDATE/PUT */}
        <Route path="/posts" element={<PostManager />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
