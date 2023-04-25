import React from 'react'
import './styles.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoMarmita } from '../../assets/images/logo-marmita.svg'

const Home = () => {
  return (
    <div className="container-home base-card">
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
        <ul>
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
        <div className="button-home">
          <Link to="/montemarmita">
            <Button text="criar cardápio" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
