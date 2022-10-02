import './pageText.css';
import Header from "../../component/header/header";
import Historia from "../../images/historia_cripto.png";


export function HistoriaCripto() {
    return (
        <>
            <Header />
            <h1 class="text-titulo">História da criptomoeda</h1>
            
            <p class="text-comun">
                O Bitcoin foi a primeira criptomoeda, aparecendo em 2008. Na época, seu criador anônimo, Satoshi Nakamoto, alegou que o Bitcoin era uma versão eletrônica do dinheiro que poderiam ser negociados entre pessoas (peer-to-peer). Uma segunda criptomoeda, Litecoin, foi lançada em 2011. até o final de 2021, mais de 13 milhões devem estar em circulação (REMESSA ONLINE, 2022).
                As criptomoedas são criadas pela mineração, porém isso não tem nada a ver com o mundo da mineração. Pelo contrário, essa mineração é essencialmente uma competição entre computadores com alto poder de processamento para resolver problemas matemáticos complicados.
                Proprietários de computadores que escolhem a primeira solução recebem criptomoedas como compensação. Como prova de trabalho, esses indivíduos recebem um hash, que é um código que garante a validade da criptomoeda, semelhante a uma impressão digital.
                Um método menos trabalhoso de obter dinheiro é comprá-lo. Para começar, você precisará de uma criptomoeda (carteira cripto), que é semelhante a serviços de pagamento  digital como PayPal ou Google Pay.
                Depois disso, para negociar criptomoedas, que são sites ou serviços que permitem que você negociar criptomoedas com outras pessoas ou usar a moeda de outro país para comprar criptomoedas (e armazená-las em sua "poupança").
                A Bolsa tem uma variedade de formatos: em alguns, as transações são tratadas por um intermediário, mas em na maioria dos casos, eles são descentralizados: compradores e vendedores se reúnem para conduzir negócios (peer to peer). Transações envolvendo criptomoedas são realizadas em público na blockchain. Existem algumas criptomoedas que permitem  que você mantenha sua privacidade impedindo que qualquer pessoa descubra a fonte, quantidade ou destino de suas transações. No entanto, a grande maioria das criptomoedas (incluindo o Bitcoin) não operam dessa forma. Lidar com criptomoedas vem com seu próprio conjunto de riscos. Quem compra, vende ou investe em criptomoedas deve estar sempre atento aos riscos, que incluem sua volatilidade e falta de regulamentação.
                Criptomoedas são moedas digitais. Isso significa que eles não existem fisicamente e só existem em um ambiente virtual. Atualmente, existem cerca de trêsmil criptomoedas diferentes, cada uma com seu próprio propósito, mas todas com o objetivo de melhorar a segurança financeira e a eficiência, bem como democratizar a distribuição e a produção  de dinheiro em todo o mundo.
                Cada país tem seu próprio conjunto de leis sobre criptomoedas. A criptomoeda agora é aceita como um método legal de pagamento no Japão. Na Colômbia, o uso de criptomoedas é considerado ilegal. No Brasil, as criptomoedas são classificadas como mercadorias – como um veículo ou uma casa – e não como moeda. Como resultado, há uma sobretaxa em cima do valor informado no Imposto de Renda anual declaração de Pessoa Física (IRPF). 

            </p>

            <img class="historia-image" src={Historia} alt="historiaCripto" />
        </>
    )
}