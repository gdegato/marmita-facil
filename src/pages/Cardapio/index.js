import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/Button'


function Cardapio() {
  return (
    <div className="container-cardapio base-card">
       <Header />
      <h1>Aqui deve exibir um único cardapio</h1>
      <p>Quer montar mais um cardapio?</p>

      <div className="button-cardapio">
        <Link to="/montemarmita">
          <Button text="SIM" />
        </Link>
        <Link to="/planejamento">
          <Button text="NÃO" />
        </Link>
      </div>


    </div>
  )
}

export default Cardapio
