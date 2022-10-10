import "./pageText.css";
import HeaderLogin from "../../component/headerLogin/headerLogin";
import CarteiraCripto from "../../images/carteira_cripto.png";
import ComecarInvestir from "../../images/comecar_investir.png";

export function AjudaTextOn() {
  return (
    <>
      <HeaderLogin />
      <div>
        <h1 class="text-titulo">Começar a investir</h1>

        <p class="text-comun">
          Para conseguir iniciar seus investimentos em criptoativos, você
          precisa comprá-los em uma corretora, ou por P2P(troca entre pessoas),
          no qual você irá enviar um dinheiro para outra pessoa e ela irá te
          conceder uma quantidade acordada entre vocês referente aquele
          criptoativo. Importante destacar que é necessário ter uma carteira
          digital, para receber ou vender por meio de P2P, no qual pode ser
          executado de forma informal (conversas por rede sociais ou
          pessoalmente, ou por intervenção de alguma plataforma, como a
          binance). Possuindo os criptoativos, a forma de investimento varia de
          qual perfil de investir possui, tendo até opções como “poupanças” que
          você mantém o dinheiro parado dentro da plataforma e irá te fazer um
          rendimento diário ou mensal de acordo o valor investido, ou adentrar
          em algum projeto alocando suas cripto e esperando seu rendimento.
        </p>

        <img
          class="investir-image"
          src={ComecarInvestir}
          alt="comecarInvestir"
        />

        <h1 class="text-titulo">Criar carteira de cripto</h1>

        <p class="text-comun">
          Para alocar seus criptoativos fora de plataformas é necessário ter uma
          carteira digital, no qual existem várias no mercado e é importante
          ressaltar que cada carteira possui uma taxa por cada transação, por
          exemplo, a MetaMask, TrustWallet, entre outras, cada uma delas são
          únicas e possuem uma segurança bem rígida.
        </p>

        <img class="cripto-image" src={CarteiraCripto} alt="comecarInvestir" />
      </div>
    </>
  );
}
