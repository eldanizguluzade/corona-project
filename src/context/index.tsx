import { createContext, useState } from "react";
import { ICoronaItem, IResult } from "../api";

export const Context = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [result, setResult] = useState<IResult>();

  return (
    <Context.Provider value={{ result, setResult }}>
      {children}
    </Context.Provider>
  );
};
