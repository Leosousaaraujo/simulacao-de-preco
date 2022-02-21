import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Visitas from "./components/visitas";
import Domain from "./components/dominios";
import Total from "./components/total";
import {Container, Title, Wrapper, Cards} from "./styles.js"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'



export default function App() {
  const [totalVisita, setTotalVisita] = useState(0);
  const [totalDominio, setTotalDominio] = useState(0);
  const [numeroDominios, setNumeroDominios] = useState(3);
  const [numeroVisitas, setNumeroVisitas] = useState(100000);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2DE16B',
      }
    }
  });

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Container>
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
          </Container>
      </ThemeProvider>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0 auto;
    padding: 0;
    font-family: Fira Sans, sans-serif;
  }

  body{
    background: #F8F8F8;
  }
`

