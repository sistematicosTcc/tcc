import Header from "../../component/header/header";
import NftText from "../../images/nft_text.png";


export function Nft() {
    return (
        <>
            <Header />

            <h1 class="text-titulo">Nft</h1>

            <p class="text-comun">
                Os tokens não fungíveis (NFTs) ganharam muita atenção nos mundos blockchain e criptomoedas. As
                aplicações dessas criptomoedas são numerosas. Da venda de obras de arte famosas e
                colecionáveis a um tute — neste caso, o fundador do Twitter, Jack Dorsey.
                O acrônimo NFT significa tokens não fungível. Mas o que significa não fungível? Significa ser único e
                insubstituível. Por exemplo, o bitcoin é fungível: se você negociá-lo por outro bitcoin, você terá um
                ativo de valor semelhante. No entanto, um cartão Pokémon único é inútil. Se você trocá-lo por outro
                cartão, você terá um objeto com diferentes valores e características.
                Como resultado, os tokens são meramente representações digitais de objetos digitais únicos. Por
                exemplo, uma obra de arte bem conhecida, música, um Nyan Cat, ou um tute.
                Eles, como tokens e criptomoedas, fazem parte de uma blockchain, como o Ethereum ou outros. No
                entanto, eles armazenam informações diferentes, permitindo que eles funcionem de forma diferente
                de um token como o ETH.
            </p>

            <img class="nft-image" src={NftText} alt="NFTCripto" />
        </>
    )
}