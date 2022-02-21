import styled from 'styled-components'


//===============GERAL================

export const Container = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&family=Poppins:wght@300;400;500&display=swap");
    max-width: 1180px;
`;


export const Title = styled.h1`
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #0B282B;
`;


export const Subtitle = styled.h2`
    font-size: ${props => props.price ? '48px' : '32px' };
    font-weight: 500;
    color: #2DE16B;

    span{
        font-size: 24px;
        color: #2DE16B};
    }
`;

export const TitleSmall = styled.h4`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    text-align: center;
    color: #0B282B;
`;


export const Paragraph = styled.p`
    font-size: 14px;
    line-height: 16px;
    font-weight: ${props => props.price ? '500' : '400'};
    text-align: center;
    color: ${props => props.price ? '#2DE16B' : '#607D8B'};
`;


export const Wrapper = styled.div`
    text-align: center;
    margin: 10% auto;
    padding: 48px 10%;
    background-color: #fff;
`;

export const Divider = styled.hr`
    border-color: rgba(11, 40, 43, 0.1);
`;


//====================App.js======================

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 47%;
    grid-column-gap: 16px;
    background-color: white;
    margin-top: 32px;

`;


//====================Cards======================

export const Card = styled.div `
    border: 1px solid rgba(11, 40, 43, 0.2);
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
`;

export const CardTitle = styled.div `
    padding: 16px 24px;
`;

export const CardInfo = styled.div`
    padding: 24px 24px;
`;
