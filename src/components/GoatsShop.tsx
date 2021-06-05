import { IonButton } from "@ionic/react";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GoatsContext } from "../contexts/GoatsContext";

const GoatsShop: React.FC = () => {
  const { goatsNumber } = useSelector((state: any) => state);

  const { buy }: any = useContext(GoatsContext);

  return (
    <div>
      <IonButton disabled={goatsNumber - 10 < 0} onClick={() => buy(10, 1)}>
        Click me
      </IonButton>
    </div>
  );
};
export default GoatsShop;
