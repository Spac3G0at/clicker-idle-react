import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementGoats,
  incrementGoats,
  incrementGoatsPerSeconds,
} from "../redux/actions";

const GoatsContext = createContext(null);

export { GoatsContext };

const Context = ({ children }: any) => {
  let state: any;

  const dispatch = useDispatch();
  const { goatsNumber } = useSelector((state: any) => state);

  const buy = (price: number, gps: number) => {
    if (goatsNumber - price < 0) return;
    dispatch(decrementGoats(price));
    dispatch(incrementGoatsPerSeconds(gps));
    setInterval(() => {
      dispatch(incrementGoats(gps));
    }, 1000);
  };

  state = {
    buy,
  };

  return (
    <GoatsContext.Provider value={state}>{children}</GoatsContext.Provider>
  );
};

export default Context;
