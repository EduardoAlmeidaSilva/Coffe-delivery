import { ContainerCard1, SectionCard, TitleNossosCafes, ContainerlittleCard, ContainerTitles, ImgsCafePequenoHome, ImgsEmbalagemHome, LittleCardsDivididos, ParagraphCard1, SubTitleCard1, TitleCard1 } from "./styled";
import carinho from "../../img/carinho-compra-2.svg"
import relogio from "../../img/relogio.svg"
import caixa from "../../img/caixa.svg"
import xicara from "../../img/xicara.svg"
import cafeGrande from "../../img/cafe-grande-card1.svg"
import { ConfigGerais } from "../../global";
import { Cafe } from "../../components/coffe";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { addQtdCafeUtil, removeQtdCafeUtil } from "../../utils/CoffesCalcs";
import CarinhoCompra from "../../img/carinho-card-cafe.svg"
import MyCoffes from "../../mock/myCoffes.json"

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
import { ContainerPosicaoCards } from "../../components/coffe/styled";

import DadosForm from "../../mock/dataForm.json"

export function Home() {
  const [cafes, setCafes] = useState<any[]>([]);
    const [quantidadeCarinho, setQuantidadeCarinho] = useState<number>(0);

  function addQtdCafe(index: number) {
    const retornoAdicionarCafe = addQtdCafeUtil(index, cafes)
    setQuantidadeCarinho(retornoAdicionarCafe.quantidadeCarinho)
    setCafes(retornoAdicionarCafe.cafes);
}

function removeQtdCafe(index: number) {
    const retornoRemoverCafe = removeQtdCafeUtil(index, cafes)
    setQuantidadeCarinho(retornoRemoverCafe.quantidadeCarinho)
    setCafes(retornoRemoverCafe.cafes);
}

const getCurrentImage = (img: string) => {
  if (img === 'expresso-tradicional') {
      return <img src={ExpressoTradicional} alt="" />
  } else if (img === 'expresso-americano') {
      return <img src={ExpressoAmericano} alt="" />
  } else if (img === 'expresso-cremoso') {
      return <img src={ExpressoCremoso} alt="" />
  } else if (img === 'expresso-gelado') {
      return <img src={ExpressoGelado} alt="" />
  } else if (img === 'cafe-com-leite') {
      return <img src={CafeComLeite} alt="" />
  } else if (img === 'latte') {
      return <img src={Latte} alt="" />
  } else if (img === 'capuccino') {
      return <img src={Capuccino} alt="" />
  } else if (img === 'macchiato') {
      return <img src={Macchiato} alt="" />
  } else if (img === 'mocaccino') {
      return <img src={Mocaccino} alt="" />
  } else if (img === 'chocolate-quente') {
      return <img src={ChocolateQuente} alt="" />
  } else if (img === 'cubano') {
      return <img src={Cubano} alt="" />
  } else if (img === 'havaiano') {
      return <img src={Havaiano} alt="" />
  } else if (img === 'arabe') {
      return <img src={Arabe} alt="" />
  } else if (img === 'irlandes') {
      return <img src={Irlandes} alt="" />
  }
}

useEffect(() => {
  var total = 0;
  if (localStorage.getItem("total-carinho") == null) {    
      localStorage.setItem("total-carinho", JSON.stringify(total));
  }
  localStorage.setItem("total-carinho", JSON.stringify(total));
  let valorCafes= 0
  if (localStorage.getItem("valor-cafe") == null) {
      localStorage.setItem("valor-cafe", JSON.stringify(valorCafes))
  }
  localStorage.setItem("valor-cafe", JSON.stringify(valorCafes))

  const meusCafes = MyCoffes
  if (localStorage.getItem("coffe-delivery") == null) {      
      localStorage.setItem("coffe-delivery", JSON.stringify(meusCafes));
  }
  localStorage.setItem("coffe-delivery", JSON.stringify(meusCafes));
  localStorage.setItem("dados-form", JSON.stringify(DadosForm));

  setCafes(JSON.parse(localStorage.getItem("coffe-delivery") || ""));
}, []);

  return (
    <ConfigGerais>
      <Header />
      <ContainerCard1>
        <div>
          <ContainerTitles>
            <TitleCard1>Encontre o café perfeito para qualquer hora do dia</TitleCard1>
            <SubTitleCard1>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitleCard1>
          </ContainerTitles>

          <ContainerlittleCard>
          
              <LittleCardsDivididos>
                <div>
                  <img src={carinho} alt="" />
                </div>
                <ParagraphCard1>Compra simples e segura</ParagraphCard1>
              </LittleCardsDivididos>

              <LittleCardsDivididos>
                <div>
                  <ImgsEmbalagemHome src={caixa} alt="" />
                </div>
                <ParagraphCard1>Embalagem mantém o café intacto</ParagraphCard1>
              </LittleCardsDivididos>

              <LittleCardsDivididos>
                <div>
                  <img src={relogio} alt="" />
                </div>
                <ParagraphCard1>Entrega rápida e rastreada</ParagraphCard1>
              </LittleCardsDivididos>

              <LittleCardsDivididos>
                <div>
                  <ImgsCafePequenoHome src={xicara} alt="" />
                </div>
                <ParagraphCard1>O café chega fresquinho até você</ParagraphCard1>
              </LittleCardsDivididos>
           

          </ContainerlittleCard>
        </div>

        <div>
          <img src={cafeGrande} alt="" />
        </div>
      </ContainerCard1>
      <SectionCard>
      <TitleNossosCafes>Nossos cafés</TitleNossosCafes>
      <ContainerPosicaoCards>
      {cafes?.map((cafe: any, index: number) => {
        return (

      <Cafe 
      nameCoffe={cafe.nomeCafe}
      valorCoffe={cafe.valueCoffe}
      quantidadeCoffe={cafe.qtd}
      tagCoffe={cafe.tagCafe}
      ingredientesCoffe={cafe.ingredientesCafe}
      myIndex={index}
      addQtdCafe={addQtdCafe}
      removeQtdCafe={removeQtdCafe}
      getCurrentImage={getCurrentImage(cafe.imgCafe)}
      imageCarinhoCompra={CarinhoCompra}
      />
        )
      })}
      </ContainerPosicaoCards>
      </SectionCard>
    </ConfigGerais>

  )
}