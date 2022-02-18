import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";

export default function Domain({ handleTotal, handleDominios}) {
  const loteDominios = 3;
  const lotePreco = 30;
  const [price, setPrice] = useState(lotePreco);
  const [dominios, setDominios] = useState(loteDominios);


  const handleChange = (event, newValue) => {
    setDominios(newValue);
    handleDominios(newValue);
  };

  const changePrice = () => {
    const newPrice = (dominios / loteDominios) * lotePreco;
    setPrice(newPrice);
    handleTotal(newPrice);
  };

  useEffect(() => {
    changePrice();
  }, [dominios]);


  return (
    <div>
      <div>
        <h5>Quantas Domínios você tem em média?</h5>
      </div>
      <div>
        <p>Até</p>
        <h1>{dominios}</h1>
        <p>Domínios</p>

        <Slider
          className
          defaultValueDomain={loteDominios}
          step={3}
          min={3}
          max={99}
          valueDomain={dominios}
          onChange={handleChange}
          maxstep={7}
        />
        <p>{`R$ ${price},00 /mês`}</p>
      </div>
    </div>
  );
}
