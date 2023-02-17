import { ConfigGerais } from "../../global";
import Delete from '../../img/delete.svg'
import { ButtonDeleteProdutoCompra, ButtonQuantidadeCompra, ContainerButtonsCardCompra, ContainerCardCompra, ContainerInformacoesQuantidade, ContainerQuantidadeCompra, DivisaoCardsCafeCompra, ImgCard, NomeCafeCompra, TextButtonQuantidadeCompra, TextPrecoCfeCompra } from "./styled";
import { formatMoney } from "../../utils/CoffesCalcs";

interface CardProps {
    refreshValue: (total: number) => void
    nameCoffe: string
    quantidadeCoffe: number
    myIndex: number
    addQtdCafe(index: number): void
    removeQtdCafe(index: number): void
    removerCard(index: number): void
    getCurrentImage: any
}

export function CardCarinho({ nameCoffe, quantidadeCoffe, myIndex, addQtdCafe, removeQtdCafe, removerCard, getCurrentImage }: CardProps) {
    return (
        <ConfigGerais>
            <ContainerCardCompra key={myIndex}>
                <div>
                    {getCurrentImage}
                </div>
                <ContainerInformacoesQuantidade>
                    <NomeCafeCompra>{nameCoffe}</NomeCafeCompra>
                    <ContainerButtonsCardCompra>
                        <ContainerQuantidadeCompra>
                            <ButtonQuantidadeCompra type="button" onClick={() => removeQtdCafe(myIndex)}>-</ButtonQuantidadeCompra>
                            <TextButtonQuantidadeCompra>{quantidadeCoffe}</TextButtonQuantidadeCompra>
                            <ButtonQuantidadeCompra type="button" onClick={() => addQtdCafe(myIndex)}>+</ButtonQuantidadeCompra>
                        </ContainerQuantidadeCompra>
                        <ButtonDeleteProdutoCompra type="button" onClick={() => removerCard(myIndex)}>
                            <img src={Delete} alt="" />
                            REMOVER
                        </ButtonDeleteProdutoCompra>
                    </ContainerButtonsCardCompra>
                </ContainerInformacoesQuantidade>

                <TextPrecoCfeCompra>{formatMoney(quantidadeCoffe * 9.90)}</TextPrecoCfeCompra>
                <DivisaoCardsCafeCompra />
            </ContainerCardCompra>
        </ConfigGerais>
    )
}