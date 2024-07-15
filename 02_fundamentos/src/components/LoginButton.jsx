const LoginButton = ({loggedIn}) => {
  // Entrar -> deslogado
  // Sair -> logado

  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
};

export default LoginButton;
