import { ConfigGerais } from "../../global";
import { Header } from "../../components/Header";
import Localizacao from '../../img/localizacao-entrega.svg'
import Relogio from '../../img/relogio.svg'
import Cifrao from '../../img/cifrao-entrega.svg'
import Moto from '../../img/moto-entrega.svg'
import { BackgroundFazendoBorder, CardsInformacoes, ContainerCardsInformacoes, ContainerPage, ContainerTitlePage, ParagrafoCardInformacao, SubtitlePage, TitlePage } from "./styled";
import { useState } from "react";

export function Entrega() {
  const [dadosCadastro, setDadosCadastroForm] = useState<any>(JSON.parse(localStorage.getItem("dados-form") || ''));
  const [dadosPagamento, setDadosPagamento] = useState<any>(JSON.parse(localStorage.getItem("forma-pagamento") || ''));


  return (

    <ConfigGerais>
      <Header />
      <ContainerPage>

        <div>

          <ContainerTitlePage>
            <TitlePage>Uhu! Pedido confirmado</TitlePage>
            <SubtitlePage>Agora é só aguardar que logo o café chegará até você</SubtitlePage>
          </ContainerTitlePage>
         
              <BackgroundFazendoBorder>
                <ContainerCardsInformacoes>

                  <CardsInformacoes>
                    <img src={Localizacao} alt="" />
                    <div>

                      <ParagrafoCardInformacao>Entrega em <strong>{dadosCadastro.rua}, {dadosCadastro.numero}</strong></ParagrafoCardInformacao>
                      <ParagrafoCardInformacao>{dadosCadastro.bairo} - {dadosCadastro.cidade}, {dadosCadastro.uf}</ParagrafoCardInformacao>

                    </div>
                  </CardsInformacoes>

                  <CardsInformacoes>
                    <img src={Relogio} alt="" />
                    <div>
                      <ParagrafoCardInformacao>Previsão de entrega</ParagrafoCardInformacao>
                      <ParagrafoCardInformacao><strong>20 min - 30 min</strong></ParagrafoCardInformacao>
                    </div>
                  </CardsInformacoes>

                  <CardsInformacoes>
                    <img src={Cifrao} alt="" />
                    <div>
                      <ParagrafoCardInformacao>Pagamento na entrega</ParagrafoCardInformacao>
                      <ParagrafoCardInformacao><strong>{dadosPagamento}</strong></ParagrafoCardInformacao>
                    </div>
                  </CardsInformacoes>

                </ContainerCardsInformacoes>
              </BackgroundFazendoBorder>

          
        </div>


        <div>
          <img src={Moto} alt="" />
        </div>

      </ContainerPage>
    </ConfigGerais>

  )
}