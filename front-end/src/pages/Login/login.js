 
function Login(){
  
  return(
  <>
    <header class="head">
      <div class="bet">
        <a href="../index.html">
          <img class="head-logo" src="../images/logo_crp.png" alt="Logo do Cryptop" />
        </a>
        <ul>
          <li>
            <img class="header-opt" src="../images/opt_down.png" />
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
        <h1>Entre na sua conta</h1>
        <form>
          <h3>Email</h3>
            <input type="email" placeholder="Digite seu Email" id="input-email" />
          <div class="space">
            <h3> Senha </h3>
            <input type="password" placeholder="Digite sua Senha" id="password" />
            <button id="token"> <a href="../pages/senha/redefinicao.html">Esqueceu sua senha?</a></button>
          </div>
          <div class="buttonDivision">
            <button class="Continue-button"> <a href="#"> Entrar</a></button>
            <button class="Continue-button"> <a href="../pages/cadastro/cadastro.html">Cadastre-se</a></button>
          </div>
        </form>
      </div>
      <div class="img_fgt">
        <img src="../images/Foguete.png" class="fgt" />
        <h1 class="subImg">CRYP<span class="top">TOP</span></h1>
      </div>
    </main>
  </>
  );
}
export default Login;