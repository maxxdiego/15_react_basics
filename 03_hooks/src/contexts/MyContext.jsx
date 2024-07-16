import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Mensagem inicial!");

  const ContextValue = {
    message,
    setMessage,
  };

  return (
    <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
  );
};
