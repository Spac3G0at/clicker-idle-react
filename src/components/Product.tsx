import { IonCard, IonCardContent } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GoatsContext } from "../contexts/GoatsContext";

export default function Product({
  name,
  basePrice,
  productionRate,
  appearAt,
  revealAt,
}: any) {
  const [price, setPrice] = useState(basePrice);
  const [count, setCount] = useState(0);
  const { buy }: any = useContext(GoatsContext);
  const { goatsNumber }: any = useSelector((state: any) => state);

  const [hasAppeared, setHasAppeared] = useState(goatsNumber >= appearAt);
  const [isRevealed, setIsRevealed] = useState(goatsNumber >= revealAt);

  useEffect(() => {
    if (goatsNumber >= appearAt) setHasAppeared(true);
    if (goatsNumber >= revealAt) setIsRevealed(true);
  }, [goatsNumber]);

  const handleBuy = () => {
    if (goatsNumber - price >= 0) setCount(count + 1);
    buy(price, productionRate);
    setPrice(Math.round(price * 1.15));
  };

  return (
    <div>
      {hasAppeared ? (
        <IonCard disabled={goatsNumber - price < 0} onClick={handleBuy}>
          <IonCardContent>
            {isRevealed ? (
              <>
                <p>
                  {name} <span>{count > 0 ? `(${count})` : null}</span>
                </p>
              </>
            ) : (
              <p>?</p>
            )}
            {price}
          </IonCardContent>
        </IonCard>
      ) : null}
    </div>
  );
}
