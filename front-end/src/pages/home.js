import Header from '../component/header/header';
import './home.css';

import { Link } from "react-router-dom";

import Profile from "../images/profile.png"
import WomanNot from "../images/woman_not.png"
import Wallet from "../images/wallet.png"
import Trading from "../images/trading.png"
import Platt from "../images/platt.png"
import WomanBook from "../images/woman_book.png"
import Neftguax from "../images/neft_guax.png"
import WomanTree from "../images/woman_tree.png"
import Calendary from "../images/calendary.png"
import People from "../images/people.png"
import Top from "../images/top.png"
import Nft from "../images/nft.png"
import Line1 from "../images/Line1.png"
import WomanSecurity from "../images/woman_security.png"
import Instagram from "../images/instagram.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"




 export function Home () {
  return (
    <>
      <Header />
      <main class="content">
        <section class="main-content">
          <div class="main-written">
            <h1 class="main-written-buy">
              <p class="black-word">Compre, negocie</p> <p class="black-word">e aprenda a ter o</p>
              <p class="yellow-word">controle financeiro </p>na<b class="blue-word"> Cryptop</b>
            </h1>
              <button class="main-button">
                <Link to="/cad">Começar</Link> 
              </button>
          </div>
          <img class="woman-first" src={WomanNot} alt="Imagem da mulher no not" />
        </section>
      </main>
      <section class="example">
        <h1 class="example-main">Aprenda todas as etapas na compra de criptoativos</h1>
        <h4 class="example-lower">Possua toda a experiência com esses passos simples!</h4>
      </section>
      <section class="icone-example">
        <div class="detail-image">
          <img src={Profile} alt="Icone de perfil" />
        </div>
        <div class="detail-description">
          <h2>Crie sua conta</h2>
          <h3><p>Realize o processo de criação de conta dentro</p> da nossa plataforma e possua acesso completo.</h3>
        </div>
      </section>
      <section class="icone-example">
        <div class="detail-image">
          <img src={Wallet} alt="Icone de carteira" />
        </div>
        <div class="detail-description">
          <h2>Crie sua carteira digital</h2>
          <h3>Após possuir sua conta, dentro da plataforma
            <p>irá criar uma carteira digital fictícia que irá </p>
            <p>armazenar todas os seus criptoativos </p>
          </h3>
        </div>
      </section>
      <section class="icone-example">
        <div class="detail-image">
          <img src={Trading}alt="Icone de trading" />
        </div>
        <div class="detail-description">
          <h2>Inicie o Trading</h2>
          <h3>Agora você já está pronto para simular toda 
            <p>a experiência de compra e venda! Aproveite</p>
            <p>toda essa experiência com a segurança que</p>
            <p>só a CrypTop pode oferecer.</p>
              <img src={Platt} alt="Icone de trading" />
          </h3>
        </div>
        <section>
          <script src="coinmarketcap-clone/pages/index.js">
          </script>
        </section>
        <section class="card">
          <h1 class="card-text">Explore nossa plataforma Top</h1>
        </section>
        <section class="card-main">
          <section class="card-tree">
            <div class="card">
              <img src={WomanBook} alt="mulher_com_livro"/>
              <h1>Conheça a história dos criptoativos</h1>
              <div class="card-content">
                <p>
                  Dentro da nossa plataforma, você
                  poderá conhecer muito mais sobre
                  o surgimento desses ativos digitais.
                </p>
              </div>
            </div>
          </section>
          <section class="card-tree">
            <div class="card">
              <img src={Neftguax} alt="neftGuax"/>
              <h1>Rentabilidade em NFT</h1>
              <div class="card-content">
                <p>
                  Como funciona a parte financeira
                  do NFT? Uma arte pode valer
                  dinheiro e ter outras funções?
                </p>
              </div>
            </div>
          </section>
          <section class="card-tree">
            <div class="card">
              <img src={WomanTree} alt="mulher e arvore"/>
              <h1>Aprender para ganhar</h1>
              <div class="card-content">
                <p>
                  Marketcap, Volumetria, Suply do
                  token, entre outras coisas podem
                  ditar muito a tendência do
                  mercado dos criptoativos, saber
                  do que se trata é essencial.
                </p>
              </div>
            </div>
          </section>
        </section>
        <div class="pai-mae">
          <section class="pai">
            <div class="growth-main-text">
              <h1>Mercado de critptoativos está em <b>crescimento</b> constante</h1>
            </div>
            <section class="growth">
              <img src={Calendary} alt="calendario"/>
              <div class="growth-lower-text">
                <p>Número de investidores cresce 1.266% no Brasil em</p>
                <p>2021 e o mercado cresceu mais de 200% nos últimos anos.</p>
              </div>
            </section>
          </section>
          <section class="mae">
            <section class="growth-card-main">
              <div class="growth-card">
                <div class="growth-card-img">
                  <img src={People} alt="Icone de pessoas" />
                </div>
                <div class="growth-card-info">
                  <h1 class="growth-card-tittle">+ de 10 Milhões</h1>
                  <p class="growth-card-post">
                    As 10 milhões de pessoas que possuem
                  </p>
                  <p class="growth-card-post">criptoativos já formam um grupo maior que os </p>
                  <p class="growth-card-post">dos investidores da B3 e do Tesouro Direto juntos.</p>
                </div>
              </div>
            </section>
            <section class="growth-card-main">
              <div class="growth-card">
                <div class="growth-card-img">
                  <img src={Top} alt="Icone de Top" />
                </div>
                <div class="growth-card-info">
                  <h1 class="growth-card-tittle">+ de 60%</h1>
                  <p class="growth-card-post">
                    Alta de crescimento em 2021 da principal moeda</p>
                  <p class="growth-card-post">do mercado de criptomoedas: Bitcoin. O Ibovespa</p>
                  <p class="growth-card-post">fechou 2021 em queda de 11,93%</p>
                </div>
              </div>
            </section>
            <section class="growth-card-main">
              <div class="growth-card">
                <div class="growth-card-img">
                  <img src={Nft} alt="Icone de pessoas" />
                </div>
                <div class="growth-card-info">
                  <h1 class="growth-card-tittle">$25 Bilhões</h1>
                  <p class="growth-card-post">
                    As vendas de NFTs movimentaram cerca </p>
                  <p class="growth-card-post">de US$25 bilhões em 2021.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
        <section class="security-position" >
          <div class="divisionSec">
            <div class="security-line">
              <img src={Line1} alt="line1" />
            </div>
            <div class="security-yellow">
              <h3>Sua segurança na nova economia</h3>
            </div>
            <div class="security-blue">
              <h1>
                <p>Soluções de segurança para o seu investimento.</p>
              </h1>
              <h3>
                <p>
                Conheça sobre as fraudes, diferenças em cada rede
                onde o seu dinheiro vai parar quando envia para
                outra carteira.
                </p>
              </h3>
            </div>
            <section class="button-security">
              <button class="main-button">
              <Link to="/cad">Começar</Link>
              </button>
            </section>
          </div>
            <section class="security-img-position">
              <img src={WomanSecurity} alt="woman book" />
            </section>
        </section>
        <div class="footerf ">
          <div class="separador">
            <div class="footer1"> 
              <div class="support">
                <ul>
                  <li> <b> Sobre nós </b></li>
                  <li>Quem somos</li>
                  <li>Estudo</li>
                  <li>Carreira</li>
                </ul>
              </div>
            </div>
            <div class="support">
              <ul>
                <li> <b> Ajuda </b></li>
                <li>Começar a investir</li>
                <li>Criar carteira de crypto</li>
                <li>Ativar/desativar 2FA</li>
                <li>Depósitos em crypto</li>
                <li>Depósitos em reais</li>
                <li>Saques em reais</li>
                <li>Saques em cryptos</li>
              </ul>
            </div>
            <div class="support">
              <ul>
                <li> <b> Educação </b></li>
                <li>O que é Bitcoin?</li>
                <li>O que é Blockchain?</li>
                <li>O que é Etherum?</li>
                <li>O que é itecoin?</li>
                <li>Diversos outros</li>
              </ul>
            </div>
            <div class="support">
              <ul>
                <li> <b> Transparência </b></li>
                <li>Taxas e limites</li>
                <li>Termos de Uso</li>
                <li>Políticas de privacidade</li>
              </ul>
            </div>
          </div>
          <div class="redes">
            <img src={Instagram} alt="logoinsta" />
            <img src={Facebook} alt="logoface" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div class="footer2">
          <p> <b> Powered by Sistematicos - Unip 2022 - Tcc </b></p>
        </div>
      </section>
    </>
  );
}