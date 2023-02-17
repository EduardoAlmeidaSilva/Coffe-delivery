import logo from '../../img/Logo.svg'
import localizacao from '../../img/localizacao.svg'
import carinho from '../../img/carinho-compra.svg'
import { ContainerCarinhoCompra, ContainerDiv1, ContainerDiv2, ContainerHeader, ContainerLocalizacao, ParagraphLocalization, QuantidadeProdutoCarinho } from './styled'
import { ConfigGerais } from '../../global'


export function Header() {

    return (
        <ConfigGerais>
            <ContainerHeader>
                <ContainerDiv1 href='/'>
                    <img src={logo} alt="" />
                </ContainerDiv1>
                
                        <ContainerDiv2>

                            <ContainerLocalizacao>
                                <img src={localizacao} alt="" />
                                <ParagraphLocalization>São Paulo, SP</ParagraphLocalization>
                            </ContainerLocalizacao>

                            <ContainerCarinhoCompra href='/form'>
                                <img src={carinho} alt="" />

                                <QuantidadeProdutoCarinho>{(localStorage.getItem("total-carinho") || '')}</QuantidadeProdutoCarinho>
                            </ContainerCarinhoCompra>

                        </ContainerDiv2>
                  
            </ContainerHeader>
        </ConfigGerais>
    )
}