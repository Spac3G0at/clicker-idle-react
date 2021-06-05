import React from "react";
import Product from "./Product";

const GoatsShop: React.FC = () => {
  return (
    <div>
      <Product
        name="Small farm"
        basePrice={10}
        productionRate={1}
        appearAt={0}
        revealAt={8}
      />

      <Product
        name="Medium farm"
        basePrice={100}
        productionRate={8}
        appearAt={90}
        revealAt={100}
      />
    </div>
  );
};
export default GoatsShop;
