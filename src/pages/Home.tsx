import { IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import GoatsShop from "../components/GoatsShop";
import { GoatsContext } from "../contexts/GoatsContext";
import "./Home.css";

const Home: React.FC = () => {
  const [tick, setTick] = useState(0);

  const { goatsNumber, setGoatNumber, goatPerSec, setGoatPerSec }: any =
    useContext(GoatsContext);

  useEffect(() => {
    let nbr = 0;
    setInterval(() => {
      nbr++;
      setTick(tick + nbr);
    }, 1000);
  }, []);

  const onTick = () => {
    setGoatNumber(goatsNumber + goatPerSec);
  };

  useEffect(() => {
    onTick();
  }, [tick]);

  const addGoatsPS = (nbr: number) => {
    setGoatPerSec(goatPerSec + nbr);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="main-goat-container">
          <IonImg
            onClick={() => setGoatNumber(goatsNumber + 1)}
            className="main-goat"
            src="assets/goat.png"
          />
        </div>
        <div className="scores">
          <p>{goatsNumber} goats</p>
          <p>{goatPerSec} goats per seconds</p>
        </div>
        <GoatsShop goatsNumber={goatsNumber} addGoatsPS={addGoatsPS} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
