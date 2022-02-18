import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";

export default function Visitas({ handleTotal, handleNumeroVisitas }) {
  const loteVisitas = 100000;
  const lotePreco = 67;
  const [price, setPrice] = useState(lotePreco);
  const [numeroVisitas, setNumeroVisitas] = useState(loteVisitas);

  const handleChange = (event, newValue) => {
    setNumeroVisitas(newValue);
    handleNumeroVisitas(newValue);
  };

  const changePrice = () => {
    const newPrice = (numeroVisitas / loteVisitas) * lotePreco;
    setPrice(newPrice);
    handleTotal(newPrice);
  };

  useEffect(() => {
    changePrice();
  }, [numeroVisitas]);

  const marks = [100000, 200000, 300000, 400000, 500000, 750000, 1000000];

  return (
    <div>
      <div>
        <h5>Quantas visitas você tem em média?</h5>
      </div>
      <div>
        <p>Até</p>
        <h1>{numeroVisitas}</h1>
        <p>visitas</p>

        <Slider
          defaultValue={loteVisitas}
          step={loteVisitas}
          marks={[100000, 200000, 300000, 400000, 500000, 750000, 1000000]}
          min={loteVisitas}
          max={1000000}
          value={numeroVisitas}
          onChange={handleChange}
        />

        <p>{`R$ ${price},00 /mês`}</p>
      </div>
    </div>
  );
}
