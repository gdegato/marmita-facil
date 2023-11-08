import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoMarmita } from '../../assets/images/logo-marmita.svg'
import Default from '../../templates/default'

const Home = () => {
  return (
    <Default isHome={true}>
      <div className="sm:max-w-lg sm:mx-auto">
        <div className="mb-2">
          <div className="flex justify-center items-center mb-2">
            <LogoMarmita />
          </div>

          <h2 className="font-bold text-dark text-xl text-center tracking-tighter mb-5">
            Marmitas fáceis para aproveitar o melhor da vida
          </h2>
          <h4 className="font-bold text-red text-base text-center tracking-tighter mb-5">
            Quer uma rotina de alimentação saudável economizando tempo e
            dinheiro? Vem com a gente!
          </h4>
        </div>

        <div>
          <ul>
            <li className="mb-2 text-sm text-center md:text-left">
              Criamos cardápios de marmitas que podem ser preparadas em poucas
              horas, baseadas nas suas possibilidades financeiras e seu gosto
              culinário, para vários dias.
            </li>
            <li className="mb-2 text-sm text-center md:text-left">
              Responda o nosso formulário e, de acordo com suas escolhas,
              criaremos um cardápio especialmente para você!
            </li>
            <li className="text-sm text-center md:text-left">
              Tenha acesso a várias funcionalidades com nossos recursos Premium.
            </li>
          </ul>
          <div className="flex flex-col text-center mt-4 gap-4 items-center justify-center sm:flex-row">
            <Link to="/montemarmita">
              <Button text="Criar Cardápio" />
            </Link>

            <Link to="/cardapiosprontos">
              <Button text="Cardápios Prontos" isSecondary={true} />
            </Link>
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Home
