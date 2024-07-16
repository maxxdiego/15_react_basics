import { useState, useEffect } from "react";

const UserProfile = ({userId}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Função para buscar dados
    const findUsers = async () => {
      // resposta assíncrona
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const userData = await response.json();

      setUser(userData);
    };

    if (userId) {
      findUsers();
    }
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default UserProfile;
