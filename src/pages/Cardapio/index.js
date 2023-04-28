import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Default from '../../templates/default'
import Button from '../../components/Button'


function Cardapio() {
  return (
    <Default withHeader>
      <div className='mt-8 text-center'>
        <h1>Aqui deve exibir um único cardapio</h1>
        <p>Quer montar mais um cardapio?</p>
      </div>

      <div className="button-cardapio flex items-center justify-center gap-4 mt-8">
        <Link to="/montemarmita">
          <Button text="SIM" />
        </Link>
        <Link to="/planejamento">
          <Button isSecondary text="NÃO" />
        </Link>
      </div>
    </Default>
  )
}

export default Cardapio
