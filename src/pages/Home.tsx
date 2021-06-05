import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoatContainer from "../components/GoatContainer";
import GoatsShop from "../components/GoatsShop";
import { GoatsContext } from "../contexts/GoatsContext";
import { incrementGoats } from "../redux/actions";
import "./Home.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { goatsNumber, goatsPerSeconds } = useSelector((state: any) => state);

  const goatClick = () => {
    dispatch(incrementGoats(1));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <GoatContainer />
        <div className="scores">
          <p>
            {goatsNumber % 1 !== 0 ? goatsNumber.toFixed(1) : goatsNumber} goats
          </p>
          <p>{goatsPerSeconds} goats per seconds</p>
        </div>
        <GoatsShop />
      </IonContent>
    </IonPage>
  );
};

export default Home;
