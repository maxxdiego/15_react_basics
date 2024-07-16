import useWindowSize from "../hooks/useWindowSize";

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>A largura da janela é: {width}</p>
      <p>A altura da janela é: {height}</p>
    </div>
  );
};

export default DisplayWindowSize;
