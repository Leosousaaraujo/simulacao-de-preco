import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import {Title, Subtitle, Paragraph, Divider, TitleSmall} from "../styles.js"

export default function Total({ totalVisitas, totalDominios, numeroDominios, numeroVisitas}) {


    const [recurrence, setRecurrence] = useState(false);
    const toggleRecurrence = () => {
        setRecurrence(!recurrence)};
   
    const valueTotal = recurrence === false ? (`${totalVisitas + totalDominios}`) : (`${parseInt((totalVisitas + totalDominios) - (totalVisitas + totalDominios)*0.143) }`); //{parseInt(((totalVisitas+totalDominios)-(totalVisitas+totalDominios)*0.143))
        
    

return(
    <CardTotal>
      <TotalTitle>
        <Title>Valor Total</Title>
      </TotalTitle>
      <TotalInfo>
        <Subtitle price> <span>R$ </span> {(valueTotal).toLocaleString('pt-BR')},00<span>/mês</span></Subtitle>
        <Paragraph>{(numeroVisitas).toLocaleString('pt-BR')} Visitas e {numeroDominios} Domínios </Paragraph>
        
        <TotalSwitch>
          <Divider />
          <Grid component="label" container alignItems="center" spacing={1} style={{justifyContent: "center"}}>
            <Grid item><TitleSmall>Mensal</TitleSmall></Grid>
            <Grid item>
            <Switch
            //checked={true}
            onChange={toggleRecurrence}
            color="primary"
            />
            </Grid>
            <Grid item><TitleSmall>Anual</TitleSmall></Grid>
          </Grid>
        </TotalSwitch>
      </TotalInfo>
    </CardTotal>
)};


    const CardTotal = styled.div`
    width: 100%;
    border: 1px solid rgba(11, 40, 43, 0.05);
    box-shadow: 0px 4px 8px rgba(11, 40, 43, 0.1);
    border-radius: 8px;
  `;
  
  const TotalTitle = styled.div`
    margin-top: 24px;
  `;
  const TotalInfo = styled.div`
    margin-top: 22px;
  `;

  const TotalSwitch = styled.div`
    margin-top: 12%;

  `;