import {
    ButtonAdicionarCafe,
    R$,
    ContainerAdicionarCafe,
    ContainerCard,
    ContainerImgCafe,
    ContainerQuantidadeCafe,
    ContainerValorDoCafe,
    IngredientesCafe,
    NomeCafe,
    TagsCards,
    TextTagsCards,
    ValorCafe,
    
    ContainerTagsCafe,
} from "./styled";
import { ConfigGerais } from "../../global";

interface CardProps {
    nameCoffe: string
    valorCoffe: string
    quantidadeCoffe: number
    tagCoffe: string[]
    ingredientesCoffe: string
    myIndex: number
    addQtdCafe(index: number): void
    removeQtdCafe(index: number): void
    getCurrentImage: any
    imageCarinhoCompra: any
}

export function Cafe({ nameCoffe, quantidadeCoffe, myIndex, addQtdCafe, removeQtdCafe, getCurrentImage, ingredientesCoffe, tagCoffe, imageCarinhoCompra, valorCoffe }: CardProps) {

    return (
        <ConfigGerais>  
                <ContainerCard key={myIndex}>
                    <div>
                        {getCurrentImage}

                        <ContainerTagsCafe>
                            {tagCoffe.map((tag: any) => {
                                return (
                                    <TagsCards>
                                        <TextTagsCards>{tag}</TextTagsCards>
                                    </TagsCards>
                                )
                            })}
                        </ContainerTagsCafe>
                        <NomeCafe>{nameCoffe}</NomeCafe>
                        <IngredientesCafe>
                            {ingredientesCoffe}
                        </IngredientesCafe>
                    </div>
                    <ContainerAdicionarCafe>
                        <ContainerValorDoCafe>
                            <R$>R$</R$>
                            <ValorCafe>{valorCoffe}</ValorCafe>
                        </ContainerValorDoCafe>
                        <ContainerQuantidadeCafe>
                            <ButtonAdicionarCafe onClick={() => removeQtdCafe(myIndex)}>
                                -
                            </ButtonAdicionarCafe>

                            <p>{quantidadeCoffe}</p>
                            <ButtonAdicionarCafe onClick={() => addQtdCafe(myIndex)}>
                                +
                            </ButtonAdicionarCafe>
                        </ContainerQuantidadeCafe>
                        <ContainerImgCafe href="/form">
                            <img src={imageCarinhoCompra} />
                        </ContainerImgCafe>
                    </ContainerAdicionarCafe>
                </ContainerCard>
        </ConfigGerais>
    );
}
