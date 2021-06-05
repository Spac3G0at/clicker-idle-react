import React, { createContext, useState } from "react";

const GoatsContext = createContext(null);

export { GoatsContext };

const Context = ({ children }: any) => {
  let state: any;

  const [goatsNumber, setGoatNumber] = useState(0);
  const [goatPerSec, setGoatPerSec] = useState(0);

  state = {
    goatsNumber,
    setGoatNumber,
    goatPerSec,
    setGoatPerSec,
  };

  return (
    <GoatsContext.Provider value={state}>{children}</GoatsContext.Provider>
  );
};

export default Context;
