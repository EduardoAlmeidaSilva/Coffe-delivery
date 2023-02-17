import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 50px;
`;

export const ContainerDiv1 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDiv2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLocalizacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple-light);
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  margin-right: 12px;
`;


export const ParagraphLocalization = styled.div`
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
padding: 0;
color: var(--purple-dark);
word-wrap: break-word;
`;


export const ContainerCarinhoCompra = styled.a`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
background-color: var(--yellow-light);
border-radius: 6px;
position: relative;
`

export const QuantidadeProdutoCarinho = styled.p`
display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20px;
    height: 20px;
    background-color: var(--yellow-dark);
    border-radius: 100%;
    margin: 0;
    position: absolute;
    top: -6px;
    left: 25px;


    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 130%;

text-align: center;
letter-spacing: -0.06em;
color: var(--white);
`
