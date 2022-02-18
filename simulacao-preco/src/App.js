import React, { useState } from "react";
import Visitas from "./components/visitas";
import Domain from "./components/dominios";
import {Title, Wrapper, Cards} from "./styles.js"

const Total = ({ totalVisitas, totalDominios, numeroDominios, numeroVisitas}) => (
  <div>
    <div>
      <Title color="blue">Valor Total</Title>

    </div>
    <div>{`R$ ${totalVisitas + totalDominios},00 /mês`}</div>
    <h5>{numeroVisitas} Visitas e {numeroDominios} Domínios</h5>
  </div>
);

export default function App() {
  const [totalVisita, setTotalVisita] = useState(0);
  const [totalDominio, setTotalDominio] = useState(0);
  const [numeroDominios, setNumeroDominios] = useState(3);
  const [numeroVisitas, setNumeroVisitas] = useState(100000);

  return (
    <div className="App">
      <Wrapper>
        <Title>Faça sua Simulação</Title>
        <Cards className="container-simulacao">

          <Visitas
            className="visitas"
            handleTotal={(value) => setTotalVisita(value)}
            handleNumeroVisitas={(value) => setNumeroVisitas(value)}
          />
          <Domain 
            handleTotal={(value) => setTotalDominio(value)} 
            handleDominios={(value) => setNumeroDominios(value)} 
          />
          <Total 
            totalVisitas={totalVisita} 
            totalDominios={totalDominio} 
            numeroDominios={numeroDominios} 
            numeroVisitas={numeroVisitas} 
          />

        </Cards>
      </Wrapper>
    </div>
  );
}