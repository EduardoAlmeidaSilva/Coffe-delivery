import { ConfigGerais } from "../../global";
import { Header } from "../../components/Header";
import {
  ButtonConfirmarPedido,
  ButtonPagamento,
  ContainerButtonPagamento,
  ContainerCard,
  ContainerCardCompra,
  ContainerCardInformacoesDoProduto,
  ContainerCardPagamento,
  ContainerInputsMesmaLinha,
  ContainerTitleCard,
  ConteinerSection,
  InformacoesPrecoCompra,
  InputsFormBairro,
  InputsFormCidade,
  InputsFormComplemento,
  InputsFormNumero,
  InputsFormRua,
  InputsFormUf,
  ParagrafoPrecoCompra,
  ParagrafoTotalCompra,
  ParagrafoValorCompra,
  ParagrafoValorTotalCompra,
  SubtitleCards,
  TitleCards,
  TitleSection,
  InputsFormCpf,
} from "./styled";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import localizacao from "../../img/localizacao-form.svg";
import Cifrao from "../../img/cifrao.svg";
import CartaoDebito from "../../img/cartao-debito.svg";
import CartaoCredito from "../../img/cartao-credito.svg";
import Dinheiro from "../../img/dinheiro.svg";
import { CardCarinho } from "../../components/card-cart";
import { useEffect, useState } from "react";
import DataForm from "../../mock/dataForm.json"
import UfForm from "../../mock/uf.json"
import { addQtdCafeUtil, formatMoney, removeQtdCafeUtil } from "../../utils/CoffesCalcs";

import ExpressoTradicional from "../../img/expresso-tradicional.svg"
import ExpressoAmericano from "../../img/expresso-americano.svg"
import ExpressoCremoso from "../../img/expresso-cremoso.svg"
import ExpressoGelado from "../../img/expresso-gelado.svg"
import CafeComLeite from "../../img/cafe-com-leite.svg"
import Latte from "../../img/latte.svg"
import Capuccino from "../../img/capuccino.svg"
import Macchiato from "../../img/macchiato.svg"
import Mocaccino from "../../img/mocaccino.svg"
import ChocolateQuente from "../../img/chocolate-quente.svg"
import Cubano from "../../img/cubano.svg"
import Havaiano from "../../img/havaiano.svg"
import Arabe from "../../img/arabe.svg"
import Irlandes from "../../img/irlandes.svg"
import { ImgCard } from "../../components/card-cart/styled";
import { useNavigate } from "react-router-dom";

export function Form() {
  const [cafes, setCafes] = useState<any[]>([]);
  const [dadosForm, setDadosForm] = useState(DataForm);
  const [ufForm, setUfForm] = useState(UfForm);
  const [valorCafe, setValorCafe] = useState(JSON.parse(localStorage.getItem("valor-cafe") || ""));
  const [valorTotalCafe, setValorTotalCafe] = useState(0)
  const [totalCarinho, setTotalCarinho] = useState<number>(JSON.parse(localStorage.getItem("total-carinho") || ""));
  const [formaPagamento, setFormaPagamento] = useState<string>("");
  const [mudarCor, setMudarCor] = useState<any>();


  function pagamento(event: string) {
    var formasPagamentos = ""
    if (event == "cartaoCredito") {
      formasPagamentos = "Cartao de cr??dito"
    } else if (event == "cartaoDebito") {
      formasPagamentos = "Cartao de d??bito"
    } else if (event == "dinheiro") {
      formasPagamentos = "Dinheiro"
    }
    setMudarCor(formasPagamentos)
    setFormaPagamento(formasPagamentos)
    localStorage.setItem("forma-pagamento", JSON.stringify(formasPagamentos))
  }

  function setandoValor(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    var newObject = {}
    var dados = ""
    if (event.target.id == "cep") {
      dadosForm.cep = event.target.value
      dados = dadosForm.cep
      newObject = dadosForm

    } else if (event.target.id == "rua") {
      dadosForm.rua = event.target.value
      dados = dadosForm.rua
      newObject = dadosForm

    } else if (event.target.id == "numero") {
      dadosForm.numero = event.target.value
      dados = dadosForm.numero
      newObject = dadosForm
    } else if (event.target.id == "complemento") {
      dadosForm.complemento = event.target.value
      dados = dadosForm.complemento
      newObject = dadosForm
    } else if (event.target.id == "bairo") {
      dadosForm.bairo = event.target.value
      dados = dadosForm.bairo
      newObject = dadosForm
    } else if (event.target.id == "cidade") {
      dadosForm.cidade = event.target.value
      dados = dadosForm.cidade
      newObject = dadosForm
    } else if (event.target.id == "uf") {
      dadosForm.uf = event.target.value
      dados = dadosForm.uf
      newObject = dadosForm
    }
    localStorage.setItem("dados-form", JSON.stringify(newObject))
  }

  useEffect(() => {
    if (localStorage.getItem("valor-cafe")) {
      if (localStorage.getItem("valor-cafe") == null) {
        var valorCafes = totalCarinho
        valorCafes *= 9.90
        console.log(valorCafes)
        localStorage.setItem("valor-cafe", JSON.stringify(valorCafes))
      }
    }
    if (localStorage.getItem("forma-pagamento") == null) {
      var pagamento = ""
      localStorage.setItem("forma-pagamento", JSON.stringify(pagamento))
    }
    setFormaPagamento(JSON.parse(localStorage.getItem("forma-pagamento") || ""))

    if (localStorage.getItem("dados-form") == null) {
      const arrayForm = DataForm
      localStorage.setItem("dados-form", JSON.stringify(arrayForm));
    }
    setDadosForm(JSON.parse(localStorage.getItem("dados-form") || ""));
    setCafes(JSON.parse(localStorage.getItem("coffe-delivery") || ""));

  }, []);

  function addQtdCafe(index: number) {
    const retornoAdicionarCafe = addQtdCafeUtil(index, cafes)
    setTotalCarinho(retornoAdicionarCafe.quantidadeCarinho);
    setCafes(retornoAdicionarCafe.cafes);
    setValorCafe(retornoAdicionarCafe.refresh);
  }

  function removeQtdCafe(index: number) {
    const retornoRemoverCafe = removeQtdCafeUtil(index, cafes)
    setTotalCarinho(retornoRemoverCafe.quantidadeCarinho)
    setCafes(retornoRemoverCafe.cafes);
    setValorCafe(retornoRemoverCafe.refresh)
  }

  function removerCard(index: number) {
    const newCafess: any[] = [];
    let rmvCard: number = 0
    var valorTotalCafe = 0
    var fimSoma = 0
    cafes.map((cafe: any, indexb: number) => {
      if (index === indexb) {
        valorTotalCafe = cafe.qtd * 9.90
        fimSoma = valorCafe - valorTotalCafe
        cafe.qtd = 0
      }
      rmvCard += cafe.qtd
      newCafess.push(cafe);
    });

    localStorage.setItem("valor-cafe", JSON.stringify(fimSoma));
    localStorage.setItem("total-carinho", JSON.stringify(rmvCard));
    localStorage.setItem("coffe-delivery", JSON.stringify(newCafess));
    setCafes(newCafess);
    setValorCafe(fimSoma)
  }

  const getCurrentImage = (img: string) => {
    if (img === 'expresso-tradicional') {
      return <ImgCard src={ExpressoTradicional} alt="" />
    } else if (img === 'expresso-americano') {
      return <ImgCard src={ExpressoAmericano} alt="" />
    } else if (img === 'expresso-cremoso') {
      return <ImgCard src={ExpressoCremoso} alt="" />
    } else if (img === 'expresso-gelado') {
      return <ImgCard src={ExpressoGelado} alt="" />
    } else if (img === 'cafe-com-leite') {
      return <ImgCard src={CafeComLeite} alt="" />
    } else if (img === 'latte') {
      return <ImgCard src={Latte} alt="" />
    } else if (img === 'capuccino') {
      return <ImgCard src={Capuccino} alt="" />
    } else if (img === 'macchiato') {
      return <ImgCard src={Macchiato} alt="" />
    } else if (img === 'mocaccino') {
      return <ImgCard src={Mocaccino} alt="" />
    } else if (img === 'chocolate-quente') {
      return <ImgCard src={ChocolateQuente} alt="" />
    } else if (img === 'cubano') {
      return <ImgCard src={Cubano} alt="" />
    } else if (img === 'havaiano') {
      return <ImgCard src={Havaiano} alt="" />
    } else if (img === 'arabe') {
      return <ImgCard src={Arabe} alt="" />
    } else if (img === 'irlandes') {
      return <ImgCard src={Irlandes} alt="" />
    }
  }
  const navigate = useNavigate()
  function handleSubmit() {

    if (dadosForm.cep == "") {
      return (
        toast.error('Informe seu CEP')
      )
    } else if (dadosForm.rua == "") {
      return (
        toast.error('Informe sua RUA')
      )
    } else if (dadosForm.numero == "") {
      return (
        toast.error('Informe seu NUMERO')
      )
    } else if (dadosForm.bairo == "") {
      return (
        toast.error('Informe sua BAIRO')
      )
    } else if (dadosForm.cidade == "") {
      return (
        toast.error('Informe sua CIDADE')
      )
    } else if (dadosForm.uf == "") {
      return (
        toast.error('selecione seu ESTADO')
      )
    } else if (totalCarinho === 0) {
      return (
        toast.error('Coloque algum item no CARRINHO')
      )
    } else if (formaPagamento === "") {
      return (
        toast.error('Informe a forma de PAGAMENTO')
      )
    } else if (valorCafe === 0) {
      return (
        toast.error('Coloque algum caf?? no CARRINHO')
      )
    } else {
      const newArray: any[] = [];
      cafes.map((cafe) => {
        cafe.qtd = 0
        newArray.push(cafe)
      })
      let zerandoCarinho = totalCarinho
      zerandoCarinho = 0
      localStorage.setItem("total-carinho", JSON.stringify(zerandoCarinho));
      localStorage.setItem("coffe-delivery", JSON.stringify(newArray));
      toast.success('Pedido Realizado!')
      navigate("/entrega")
    }

  }

  return (
    <ConfigGerais>
      <Header />


      <ConteinerSection>
        <div>
          <TitleSection>Complete seu pedido</TitleSection>
          <ContainerCard>
            <div>
              <ContainerTitleCard>
                <img src={localizacao} alt="" />
                <TitleCards>Endere??o de Entrega</TitleCards>
              </ContainerTitleCard>
              <SubtitleCards>
                Informe o endere??o onde deseja receber seu pedido
              </SubtitleCards>
            </div>

            <InputsFormCpf
              placeholder="CEP *"
              id="cep"
              onChange={setandoValor}
              mask="99999-999"
            />

            <InputsFormRua
              type="text"
              placeholder="Rua *"
              id="rua"
              onChange={setandoValor}
            />

            <ContainerInputsMesmaLinha>
              <InputsFormNumero
                type="number"
                placeholder="N??mero *"
                id="numero"
                onChange={setandoValor}
              />

              <InputsFormComplemento
                type="text"
                placeholder="Complemento"
                id="complemento"
                onChange={setandoValor}
              />

            </ContainerInputsMesmaLinha>

            <ContainerInputsMesmaLinha>
              <InputsFormBairro
                type="text"
                placeholder="Bairo *"
                id="bairo"
                onChange={setandoValor}
              />

              <InputsFormCidade
                type="text"
                placeholder="cidade *"
                id="cidade"
                onChange={setandoValor}
              />

              <InputsFormUf
                id="uf"
                onChange={setandoValor}
              >
                <option disabled selected hidden>UF *</option>
                {ufForm.uf.map((ufs: any) => {
                  return (
                    <option value={ufs}>{ufs}</option>
                  )
                })}
              </InputsFormUf>

            </ContainerInputsMesmaLinha>
          </ContainerCard>

          <ContainerCardPagamento>
            <div>
              <ContainerTitleCard>
                <img src={Cifrao} alt="" />
                <TitleCards>Pagamento</TitleCards>
              </ContainerTitleCard>
              <SubtitleCards>
                O pagamento ?? feito na entrega. Escolha a forma que deseja pagar
              </SubtitleCards>
            </div>

            <ContainerButtonPagamento>
              <ButtonPagamento type="button" className={`${mudarCor == "Cartao de cr??dito" ? "active" : ""}`} onClick={() => pagamento('cartaoCredito')} >
                <img src={CartaoCredito} alt="" />
                CART??O DE CR??DITO
              </ButtonPagamento>
              <ButtonPagamento type="button" className={`${mudarCor == "Cartao de d??bito" ? "active" : ""}`} onClick={() => pagamento('cartaoDebito')}>
                <img src={CartaoDebito} alt="" />
                CART??O DE D??BITO
              </ButtonPagamento>
              <ButtonPagamento type="button" className={`${mudarCor == "Dinheiro" ? "active" : ""}`} onClick={() => pagamento('dinheiro')}>
                <img src={Dinheiro} alt="" />
                DINHEIRO
              </ButtonPagamento>
            </ContainerButtonPagamento>

          </ContainerCardPagamento>
        </div>

        <ContainerCardInformacoesDoProduto>
          <TitleSection>Caf??s selecionados</TitleSection>
          <ContainerCardCompra>
            {cafes?.map((cafe: any, index: number) => {


              if (cafe.qtd > 0) {
                return (
                  <CardCarinho
                    nameCoffe={cafe.nomeCafe}
                    quantidadeCoffe={cafe.qtd}
                    myIndex={index}
                    addQtdCafe={addQtdCafe}
                    removeQtdCafe={removeQtdCafe}
                    removerCard={removerCard}
                    getCurrentImage={getCurrentImage(cafe.imgCafe)}
                    refreshValue={(total: number) => { setValorCafe(total), setValorTotalCafe(total) }} />
                )
              }
            })}

            <div>
              <InformacoesPrecoCompra>
                <ParagrafoPrecoCompra>Total de itens</ParagrafoPrecoCompra>
                <ParagrafoValorCompra>{formatMoney(valorCafe)}</ParagrafoValorCompra>
              </InformacoesPrecoCompra>
              <InformacoesPrecoCompra>
                <ParagrafoPrecoCompra>Entrega</ParagrafoPrecoCompra>
                <ParagrafoValorCompra>R$ 3,50</ParagrafoValorCompra>
              </InformacoesPrecoCompra>
              <InformacoesPrecoCompra>
                <ParagrafoTotalCompra>Total</ParagrafoTotalCompra>
                <ParagrafoValorTotalCompra>{formatMoney(valorCafe + 3.50)}</ParagrafoValorTotalCompra>
              </InformacoesPrecoCompra>
              <ButtonConfirmarPedido type="button" onClick={handleSubmit}>CONFIRMAR PEDIDO</ButtonConfirmarPedido>

            </div>
          </ContainerCardCompra>
        </ContainerCardInformacoesDoProduto>
      </ConteinerSection>

    </ConfigGerais >
  );
}
