import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from '@material-ui/core/styles';
import { Card, CardTitle, CardInfo, Container, Subtitle, TitleSmall, Paragraph, Divider } from "../styles.js";


const StyledSlider = withStyles({
  root: {
    color: '#2DE16B',
    height: 8,
    marginLeft: 12,
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#2DE16B',
    marginTop: -7,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
    },
  },
  
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);


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
    <Container>
      <Card>
        <CardTitle>
          <TitleSmall>Quantas visitas você tem em média?</TitleSmall>
        </CardTitle>
        <Divider></Divider>
        <CardInfo>
          <Paragraph>Até</Paragraph>
          <Subtitle>{(numeroVisitas).toLocaleString('pt-BR')}</Subtitle>
          <Paragraph>visitas</Paragraph>
          <StyledSlider
            defaultValue={loteVisitas}
            step={loteVisitas}
            marks={[100000, 200000, 300000, 400000, 500000, 750000, 1000000]}
            min={loteVisitas}
            max={1000000}
            value={numeroVisitas}
            onChange={handleChange}
          />
  
          <Paragraph price>{`R$ ${price},00 /mês`}</Paragraph>
        </CardInfo>
      </Card>
    </Container>
  );
}
