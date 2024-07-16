import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // setInterval, setTimeout

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // limpeza de estado
    return () => clearInterval(intervalId);
  }, []); // array de dependências vazio

  return <div>Timer: {seconds} segundos.</div>;
};

export default Timer;
