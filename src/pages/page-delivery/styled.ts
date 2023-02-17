import styled from "styled-components";


export const ContainerPage = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
padding: 50px;

`;


export const TitlePage = styled.p`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: var(--yellow-dark);
  margin: 0;
`;

export const SubtitlePage = styled.p`
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
color: var(--base-subtitle);
margin: 0;
`;


export const ContainerTitlePage = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
margin-bottom: 40px;
`;

export const ContainerCardsInformacoes = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
position:absolute;
padding: 40px;
gap: 32px;
border-radius: 6px 36px;
background-color: white;
width: 420px;
height: 199px;
`;
export const BackgroundFazendoBorder = styled.div`
display: flex;
align-items: center;
justify-content: center;
position:relative;
width: 503px;
height: 282px;
background: linear-gradient(to right, #DBAC2C, #8047F8);
border-radius: 6px 36px;
`;

export const CardsInformacoes = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 12px;

`;

export const ParagrafoCardInformacao = styled.p`
margin: 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--base-text);
padding-bottom: 2px;
width: 380px;
`;
