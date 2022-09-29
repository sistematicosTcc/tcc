import Header from "../../component/header/header";
import './pageText.css';


export function Transparencia() {
    return (
        <>
            <Header />
            <div>
                <h1 class="text-titulo">Políticas de privacidade</h1>

                <p class="text-comun">
                    Na cryptop não é solicitado nenhum dado essencial para a utilização da
                    plataforma, sendo apenas necessário o e-mail e senha, para realizar o acesso
                    e validação de confirmação de dados, seguindo todas as normas de segurança
                    da LGPD.
                </p>

                <h1 class="text-titulo">Termos de Uso</h1>

                <p class="text-comun">
                    A cryptop é apenas uma plataforma que simula as transações de criptoativos e
                    traz informações retiradas dos principais canais do mercado financeiro de
                    criptoativos. Não há rentabilidade nem ganhos financeiros para a equipe pois
                    se trata de um trabalho facultativo, e muita das suas tecnologias no trabalho
                    são consumidas externamente por meio de APIS, todos os créditos das
                    tecnologias externas estão dados dentro da documentação institucional do
                    trabalho de conclusão de curso da UNIP.
                </p>
            </div>

        </>
    )
}