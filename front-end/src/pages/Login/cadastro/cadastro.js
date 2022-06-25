
function Cadastros() {
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
    <main>
      <div class="config_txt">
        <h1>Crie Sua Conta</h1>
        <form>
          <input type="text" placeholder="Digite seu Nome" /> <br />
          <input type="email" placeholder="Digite seu Email" id="input-email" />
          <br />
          <input type="password" placeholder="Digite sua Senha" id="password" />
          <br />
          <input
            type="password"
            placeholder="Digite sua Senha novamente"
            id="passwordConfirm"
          />
          <br />
          <button class="Continue-button">
            <a href="../../pages/cadastro/cadastro2.html"> Continuar </a>
          </button>
        </form>
      </div>
      <div class="img_fgt">
        <img src="../../images/fgt_cad1.png" alt="fogueteimg" class="fgt" />
      </div>
    </main>
    </>
  );
}

export default Cadastros;
