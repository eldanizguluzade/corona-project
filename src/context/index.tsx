import { createContext, useState } from "react";
import { ICoronaItem } from "../api";

export const Context = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [result, setResult] = useState<Array<ICoronaItem>>();
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider value={{ result, setResult, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};
