# Consumindo APIs com Fetch / Axios

## Instalando o Axios

```bash

npm install axios

```

## GET com Fetch e Axios

```bash

# ./src/App.jsx:

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


```

```bash

# ./src/components/FetchPosts.jsx:

import { useState, useEffect } from "react";

const FetchPosts = () => {
  // JSON placeholder
  // id, title, body

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json()
        setPosts(data)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts (Fetch API)</h1>
      {error ? (
        <p>Erro: {erro}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchPosts;


```

```bash

# ./src/components/AxiosPosts.jsx:

import { useState, useEffect } from "react";
import axios from "axios";

const AxiosPosts = () => {
  // JSON placeholder
  // id, title, body

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const axiosPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    axiosPosts();
  }, []);

  return (
    <div>
      <h1>Posts (Axios)</h1>
      {error ? (
        <p>Erro: {erro}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AxiosPosts;


```


<hr>

### Autor
Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458