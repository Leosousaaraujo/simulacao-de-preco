import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from '@material-ui/core/styles';
import { Card, CardTitle, CardInfo, Container, Paragraph, Subtitle, TitleSmall, Divider } from "../styles.js";


const StyledSlider = withStyles({
  root: {
    color: '#2DE16B',
    height: 8,
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
    <Container>
      <Card>
        <CardTitle>
          <TitleSmall>Quantas Domínios você tem em média?</TitleSmall>
        </CardTitle>
        <Divider></Divider>
        <CardInfo>
          <Paragraph>Até</Paragraph>
          <Subtitle>{dominios}</Subtitle>
          <Paragraph>Domínios</Paragraph>

          <StyledSlider
            className
            defaultValueDomain={loteDominios}
            step={3}
            min={3}
            max={99}
            valueDomain={dominios}
            onChange={handleChange}
            maxstep={7}
          />
          <Paragraph price>{`R$ ${price},00 /mês`}</Paragraph>
        </CardInfo>
      </Card>
    </Container>
  );
}
