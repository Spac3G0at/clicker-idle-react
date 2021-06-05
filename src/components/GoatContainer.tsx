import { IonImg } from "@ionic/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { incrementGoats } from "../redux/actions";
import bg from "./../../public/assets/farm-bg.jpg";

export default function GoatContainer() {
  const ref = useRef<any>(null);
  const dispatch = useDispatch();

  const goatClick = () => {
    animGoat();
    dispatch(incrementGoats(1));
  };

  const animGoat = () => {
    if (!ref?.current) return;
    ref.current.classList.remove("anim-goat");
    setTimeout(() => {
      ref.current.classList.add("anim-goat");
    }, 0);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/farm-bg.jpg"
        })`,
      }}
      className="main-goat-container"
    >
      <IonImg
        ref={ref}
        onClick={() => goatClick()}
        className="main-goat"
        src="assets/goat.png"
      />
    </div>
  );
}
