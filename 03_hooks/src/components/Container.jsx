const Container = ({ children }) => {
  return (
    <div className="container">
      <h2>Iniciando:</h2>
      <div>{children}</div>
      <p>Terminou.</p>
    </div>
  );
};

export default Container;
