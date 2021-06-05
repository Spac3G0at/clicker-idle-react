import { IonButton } from "@ionic/react";
import React from "react";

export default function GoatsShop({ addGoatsPS, goatsNumber }: any) {
  const buy = (gps: number, price: number) => {
    addGoatsPS(gps);
  };

  return (
    <div>
      <IonButton disabled={goatsNumber < 100} onClick={() => buy(1, 10)}>
        Click me
      </IonButton>
    </div>
  );
}
