import React, { createContext } from "react";

export const adddata = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");

  return (
    <adddata.Provider value={{ udata, setUdata }}>
      {{ children }}
    </adddata.Provider>
  );
};

export default ContextProvider;
