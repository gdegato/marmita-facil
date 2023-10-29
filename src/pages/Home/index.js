import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoMarmita } from '../../assets/images/logo-marmita.svg'
import Default from '../../templates/default'

const Home = () => {
  return (
    <Default>
      <div className="mb-2">
        <div className="flex justify-center items-center mb-2">
          <LogoMarmita />
        </div>

        <h2 class="font-bold text-dark text-xl text-center tracking-tighter mb-5">Marmitas fáceis para aproveitar o melhor da vida</h2>
        <h4 className='font-bold text-red text-base text-center tracking-tighter mb-5'>
          Quer uma rotina de alimentação saudável economizando tempo e dinheiro?
          Vem com a gente!
        </h4>
      </div>

      <div>
        <ul>
          <li className='mb-2 text-sm text-center'>
            Criamos cardápios de marmitas que podem ser preparadas em poucas
            horas, baseadas nas suas possibilidades financeiras e seu gosto
            culinário, para vários dias.
          </li>
          <li className='mb-2 text-sm text-center'>
            Responda o nosso formulário e, de acordo com suas escolhas,
            criaremos um cardápio especialmente para você!
          </li>
          <li className='text-sm text-center'>
            Tenha acesso a várias funcionalidades com nossos recursos Premium.
          </li>
        </ul>
        <div className="text-center mt-4">
          <Link to="/montemarmita">
            <Button text="Criar Cardápio" />
          </Link>

          <Link to="/montemarmita">
            <Button text="Cardápios Prontos" isSecondary={true} />
          </Link>
        </div>
      </div>
    </Default>
  )
}

export default Home
