import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import AxiosPosts from "./components/AxiosPosts";

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
      <Routes>
        {/* 1 - GET com Fetch e Axios */}
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
