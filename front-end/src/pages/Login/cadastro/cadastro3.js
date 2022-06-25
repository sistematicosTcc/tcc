
function Cadastros3() {
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
    <main id="main4">
      <div class="config_txt">
        <h1>Sucesso</h1>
          <h2 class="texto_cad3">
            Sua conta na CRYPTOP foi criada com sucesso.
            Você pode entrar na sua conta no canto superior direito ou clicando no
            botão entrar.
          </h2>
        <div class="buttonDivision">
          <button class="Continue-button bigButton"><a href="../login.html">Entrar</a></button>
        </div>
      </div>
      <div class="img_fgt">
        <img src="../../images/fgt_cad3.png" alt="" class="fgt"/>
        <div class="moon_img">
          <img src="../../images/moon.png" class="moon" />
        </div>
      </div>
    </main>
    </>
  );
}

export default Cadastros3;
