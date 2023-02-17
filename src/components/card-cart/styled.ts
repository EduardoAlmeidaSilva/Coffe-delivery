import styled from "styled-components";

export const ContainerCardCompra = styled.div`
 display: flex;
justify-content: space-between;
flex-direction: row;
align-items: flex-start;
background-color: var(--base-card);
margin-bottom: 24px;
border-bottom: 2px solid var(--base-button);
width: 394px;
`;

export const ImgCard = styled.img`
width: 80px;
height: 80px;
margin-top: 5px;
`;

export const NomeCafeCompra = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 130%;
color: var(--base-subtitle);
margin-bottom: 8px;
margin-top: 0;
`

export const ContainerInformacoesQuantidade = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
margin: 8px 15px 8px 20px;
`

export const ContainerQuantidadeCompra = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
gap: 4px;
padding: 5px;
width: 77px;
background-color: var(--base-button);
border-radius: 6px;
`

export const TextButtonQuantidadeCompra = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--base-title);
margin: 0;
`

export const ContainerButtonsCardCompra = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`

export const ButtonQuantidadeCompra = styled.button`
border: 0;
font-size: 14px;
background-color: var(--base-button);
color: var(--purple);

`

export const ButtonDeleteProdutoCompra = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: 0;
background-color: var(--base-button);
padding: 5px;
gap: 4px;
border-radius: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
color: var(--base-text);

&:hover {
    background-color: var(--base-hover);
}
`

export const TextPrecoCfeCompra = styled.p`
margin: 8px 4px 0 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 130%;
width: 90px;
color: var(--base-text);
`

export const DivisaoCardsCafeCompra = styled.hr`
color: var(--base-button);
`