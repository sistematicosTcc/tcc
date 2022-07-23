import React from "react";
import { Link } from "react-router-dom";

export const Teste = () => {
  return (
  <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
    <nav>
        <div className="container">
            <img src="../../images/logo_crp.png" alt="logo foguete" className="logo" />
            <div className="search-bar">
                <span className="material-icons-sharp">search</span>
                <input type="search" placeholder="Search" />
            </div>
            <div className="profile-area">
                <div className="theme-btn">
                    <span className="material-icons-sharp active">light_mode</span>
                    <span className="material-icons-sharp">dark_mode</span>
                </div>
                <div className="profile">
                    <div className="profile-photo">
                        <img src="../../images/profile-simple.png" alt="perfil simples" />
                    </div>
                    <h5>Seu cu</h5>
                    <span className="material-icons-sharp">expand_more</span>
                </div>
                <button id="menu-btn">
                    <span className="material-icons-sharp">menu</span>
                </button>
            </div>
        </div>
    </nav>
    <div className="mainContent">
        <aside>
            <button id="close-btn">
                <span className="material-icons-sharp">close</span>
            </button>
            <div className="sidebar">
                <Link to="/dashboard" >
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </Link>
                <Link to="/teste" className='active'>
                    <span className="material-icons-sharp">currency_exchange</span>
                    <h4>Exchange</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">account_balance_wallet</span>
                    <h4>Wallet</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">credit_card</span>
                    <h4>Transações</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">insights</span>
                    <h4>Análises</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">message</span>
                    <h4>Mensagens</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">help_center</span>
                    <h4>Ajuda</h4>
                </Link>
                <Link to="#">
                    <span className="material-icons-sharp">settings</span>
                    <h4>Configurações</h4>
                </Link>
            </div>
        </aside>
        {/* <section className="middle">
            <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=f279f037e83259&locales=true&logo=false&primaryColor=000E56&to=eth&toFiat=eth&toTheMoon=true' style="height: 356px; width: 100%; border: none" />
            <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
        </section> */}
        <section className="right ">
        </section>
    </div>
    <script type="text/javascript" src="main.js"></script>
  </>
  );
}

export default Teste;