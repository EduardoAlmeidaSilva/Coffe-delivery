import styled from "styled-components"


export const ContainerPosicaoCards = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-wrap: wrap;
gap: 32px;
margin: 40px 0;
word-break: break-word;
`

export const ContainerTagsCafe = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`

export const ContainerCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: var(--base-card);
text-align: center;
border-radius: 6px 36px;
width: 265px;
height: 330px;
margin-bottom: 20px;
`

export const TagsCards = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: var(--yellow-light);
width: 81px;
height: 21px;
margin: 5px 2px;
`

export const TextTagsCards = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 130%;
color: var(--yellow-dark);
`

export const NomeCafe = styled.p`
font-family: 'Baloo 2';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 130%;
color: var(--base-subtitle);
`

export const IngredientesCafe = styled.p`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--base-label);
padding: 0 20px;
`

export const ContainerAdicionarCafe = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 40px;

`

export const ContainerValorDoCafe = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
margin-right: 23px;
`

export const R$ = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--base-text);
padding-right: 3px;
`

export const ValorCafe = styled.p`
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 130%;
color: var(--base-text);
`


export const ContainerQuantidadeCafe = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: var(--base-button);
border-radius: 6px;
width: 80px;
height: 38px;
gap: 4px;
margin-right: 8px;
`


export const ButtonAdicionarCafe = styled.button`
color: var(--purple);
border: 0;
font-size: 25px;
background-color: transparent;
padding-bottom: 2px;
`


export const ContainerImgCafe = styled.a`
background-color: var(--purple-dark);
border-radius: 6px;
padding: 8px;
color: var(--white);
`




