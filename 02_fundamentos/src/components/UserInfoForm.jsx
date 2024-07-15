import { useState } from "react";

const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault()

    // Acessar a API via fetch ou axios

    console.log(name, email);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o seu e-mail"
      />
      {name} {email}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserInfoForm;
