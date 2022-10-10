import HeaderLogin from "../../component/headerLogin/headerLogin";
import Stevan from "../../images/stevan.png"
import Felipe from "../../images/felipe.png"
import Henrique from "../../images/henrique.png"
import Bruna from "../../images/bruna.png"
import Lucas from "../../images/lucas.png"
import Pedro from "../../images/pedro.png"


export function SobreNosOn() {
  return (
    <>
      <HeaderLogin />

      <h1 class="text-titulo">Sobre nós</h1>

      <p class="text-comun">
        A Gsix tech é uma empresa focada em tecnologia e acessibilidade, que traz
        diversas soluções. A empresa foi formada entre um grupo de 6 amigos, que
        admiram o mercado de tecnologia e desejam tornar seus projetos reais,
        entretanto, apenas a criação não é o suficiente. Com grandes ambições
        empresariais, eles visam atingir o máximo de pessoas que consigam acessar e
        se conectar com a tecnologia.
      </p>

      <section class="card-main">
        <section class="card-tree">
          <div class="card1">
            <img src={Stevan} alt="estevan" />
            <h1>Estevan Alvarez <br />
              RA: N401460
            </h1>
            <div class="card-content">
              <p>
                Presidente executivo de Sistemas.
              </p>
            </div>
          </div>
        </section>
        <section class="card-tree">
          <div class="card1">
            <img src={Felipe} alt="felipe" />
            <h1>Felipe Pereira <br />
              RA: N449BD7
            </h1>
            <div class="card-content">
              <p>
                Gerente executivo de Sistemas.
              </p>
            </div>
          </div>
        </section>
        <section class="card-tree">
          <div class="card1">
            <img src={Bruna} alt="bruna" />
            <h1>Bruna Alves <br />
                RA: D9105C0
            </h1>
            <div class="card-content">
              <p>
                Presidente executiva de Infraestrutura.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section class="card-main">
        <section class="card-tree">
          <div class="card1">
            <img src={Pedro} alt="pedro_tk" />
            <h1>Pedro Ignacio <br/>
                RA: N4499E0
            </h1>
            <div class="card-content">
              <p>
                Ceo & Founder
              </p>
            </div>
          </div>
        </section>
        <section class="card-tree">
          <div class="card1">
            <img src={Lucas} alt="lucas" />
            <h1>Lucas Avelino <br/>
                RA: N428JA3
            </h1>
            <div class="card-content">
              <p>
                Gerente executiva de Infraestrutura.
              </p>
            </div>
          </div>
        </section>
        <section class="card-tree">
          <div class="card1">
            <img src={Henrique} alt="henrique" />
            <h1>Henrique Lopes <br/>
                RA: N394021
            </h1>
            <div class="card-content">
              <p>
                Coordenador de projetos
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}