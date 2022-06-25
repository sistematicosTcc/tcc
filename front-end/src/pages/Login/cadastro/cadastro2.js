
function Cadastros2() {
  return (
    <>
      <header class="head">
      <div class="bet">
        <a href="../../index.html">
          <img
          class="head-logo"
          src="../../images/logo_crp.png"
          alt="Logo do Cryptop"
          />
        </a>
        <ul>
          <li>
            <img class="header-opt" src="../../images/opt_down.png" />
            <ul>
              <li><a href="#" class="options">Exchange</a></li>
              <li><a href="#" class="options">Trust Wallet</a></li>
            </ul>
          </li>
        </ul>
        <nav class="header-first">
          <a href="#" class="header-item">Compre Crypto</a>
          <a href="#" class="header-item">Mercado</a>
          <a href="#" class="header-item">Trade</a>
          <a href="#" class="header-item">NFT</a>
        </nav>
      </div>
      <nav class="header-second">
        <a href="/tcc/pages/login.html" class="header-item">Entrar</a>
        <form action="#">
          <button class="header-button" >
            <a href="/tcc/pages/cadastro/cadastro.html">Registrar</a>
          </button>
        </form>
      </nav>
    </header>
    <main id="main2">
      <div class="config_txt">
        <h1>Verificação de Cadastro</h1>
        <form>
          <div class="division">
            <input
              type="email"
              placeholder="Digite seu Email"
              id="inputEmail"
            />
            <br />
            <button id="token">Reenviar o Token de Verificação</button>
          </div>
          <div class="division">
            <h2>Token</h2>
            <input type="text" id="tokenNum" /> <br />
          </div>
          <div class="buttonDivision">
            <button class="Continue-button">
              <a href="../../pages/cadastro/cadastro.html"> Voltar </a>
            </button>
            <button class="Continue-button">
              <a href="../../pages/cadastro/cadastro3.html"> Continuar </a>
            </button>
          </div>
        </form>
      </div>
      <div class="img_fgt">
        <img src="../../images/fgt_cad2.png" alt="fogueteimg" class="fgt" />
      </div>
    </main>
    </>
  );
}

export default Cadastros2;
