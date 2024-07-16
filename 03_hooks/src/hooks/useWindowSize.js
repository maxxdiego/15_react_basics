import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Função que altera os valores
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Evento que dispara a função
    window.addEventListener("resize", handleResize);

    handleResize()

    // Limpeza de memória
    return() => window.removeEventListener("resize", handleResize)
  }, []);

  return windowSize
}
