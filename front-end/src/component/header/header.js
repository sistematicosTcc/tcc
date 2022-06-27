import './header.css'
import { Link } from "react-router-dom";
import OptDown from "../../images/opt_down.png"
import Logo from "../../images/logo_crp.png"

function Header(){
  return(
    <>
      <header class="head">
        <div class="bet">
            <Link to="/home" >
              <img class="head-logo" src={Logo} alt="logo"/>
            </Link>
          <ul>
            <li>
              <img class="header-opt" src={OptDown} alt="logo" />
              <ul>
                <li><Link to="/home" className='options'>Exchange</Link></li>
                <li><Link to="/home" className='options'>Trust Wallet</Link></li>
              </ul>
            </li>
          </ul>
          <nav class="header-first">
            <Link to="/home" className='header-item'>Compre Crypto</Link>
            <Link to="/home" className='header-item'>Mercado</Link>
            <Link to="/home" className='header-item'>Trade</Link>
            <Link to="/home" className='header-item'>NFT</Link>
          </nav>
        </div>
        <nav class="header-second">
        <Link to="/login" className='header-item'>Entrar</Link>
          <form action="/">
            <button class="header-button" >
              <Link to="/cad">Registrar</Link>
            </button>
          </form>
        </nav>
      </header>
    </>
  )
}

export default Header;