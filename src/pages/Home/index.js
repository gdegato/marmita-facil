import React from 'react'
import './styles.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoMarmita } from '../../assets/images/logo-marmita.svg'
import Default from '../../templates/default'

const Home = () => {
  return (
    <Default>
      <div className="container-home-titulo">
        <div className="logo-home">
          <LogoMarmita />
        </div>

        <h2>Marmitas fáceis para aproveitar o melhor da vida</h2>
        <h4>
          Quer uma rotina de alimentação saudável economizando tempo e dinheiro?
          Vem com a gente!
        </h4>
      </div>

      <div className="container-home-texto">
        <ul className='list-disc'>
          <li>
            Criamos cardápios de marmitas que podem ser preparadas em poucas
            horas, baseadas nas suas possibilidades financeiras e seu gosto
            culinário, para vários dias.
          </li>
          <li>
            Responda o nosso formulário e, de acordo com suas escolhas,
            criaremos um cardápio especialmente para você!
          </li>
          <li>
            Tenha acesso a várias funcionalidades com nossos recursos Premium.
          </li>
        </ul>
        <div className="my-4 text-center">
          <Link to="/montemarmita">
            <Button text="Criar Cardápio" />
          </Link>
        </div>
      </div>
    </Default>
  )
}

export default Home
