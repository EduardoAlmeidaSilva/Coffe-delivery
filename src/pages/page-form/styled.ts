import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const TitleSection = styled.p`
  font-family: "Baloo 2", cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: var(--base-subtitle);
  margin: 40px 0 15px;
`;

export const TitleCards = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--base-subtitle);
  margin: 0;
`;

export const SubtitleCards = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-text);
  margin: 0;
  padding-left: 30px;
  padding-bottom: 32px;
`;

export const ConteinerSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 50px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--base-card);
  border-radius: 6px;
  padding: 40px;
`;

export const ContainerInputsMesmaLinha = styled.div`
  display: flex;
  gap: 12px;
`;

export const ContainerTitleCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 2px;
`;

export const ContainerForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
`;

export const InputsFormCpf = styled(ReactInputMask)`
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormRua = styled.input`
  width: 610px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormNumero = styled.input`
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormComplemento = styled.input`
  width: 373px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormBairro = styled.input`
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormCidade = styled.input`
  width: 276px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
`;

export const InputsFormUf = styled.input`
  width: 60px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid var(--base-button);
  background-color: var(--base-input);
  padding: 12px;
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-label);
  text-transform: uppercase;
`;

export const ContainerCardPagamento = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background: var(--base-card);
  border-radius: 6px;
  padding: 40px;
  margin-top: 12px;
`;

export const ContainerButtonPagamento = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 32px;
  gap: 12px;
  width: 640px;
`;

export const ButtonPagamento = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  background-color: var(--base-button);
  border-radius: 6px;
  padding: 16px;
  border: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: var(--base-text);
  width: 178.67px;
  height: 51px;
  transition: 0.5;
  cursor: pointer;

  &:hover {
    background-color: var(--base-hover);
  }

  &.active {
    background-color: var(--purple-light);
    border: 1px solid var(--purple);
  }
`;

export const ContainerCardCompra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  background-color: var(--base-card);
  border-radius: 6px 44px;
  padding: 50px;
`;

export const ContainerCardInformacoesDoProduto = styled.div`
  margin-left: 20px;
`;

export const InformacoesPrecoCompra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 360px;
`;

export const ParagrafoPrecoCompra = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--base-text);
  margin: 0;
`;

export const ParagrafoTotalCompra = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: var(--base-subtitle);
  margin: 0;
`;

export const ParagrafoValorCompra = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--base-text);
  margin: 0;
  max-width: 82px;
  white-space: nowrap;
  overflow: hidden;
`;

export const ParagrafoValorTotalCompra = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: var(--base-subtitle);
  margin: 0;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
`;

export const ButtonConfirmarPedido = styled.button`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 368px;
  height: 46px;

  background-color: var(--yellow);
  border-radius: 6px;
  border: 0;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-decoration: none;

  color: var(--white);

  &:hover {
    background-color: var(--yellow-dark);
  }
`;
