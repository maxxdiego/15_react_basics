import { useEffect, useState } from "react";
import axios from "axios";

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    try {
      if (post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );

        onSuccess(response.data, "update");
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );

        // adicionar post na lista
        onSuccess(response.data, "add");
      }
      setTitle("")
      setBody("")
    } catch (error) {
      console.log("Erro ao enviar postagem: ", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Digite o conteúdo..."
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PostForm;
