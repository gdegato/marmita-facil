import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Default from '../../templates/default'
import Button from '../../components/Button'


function Cardapio() {
  var marmita = localStorage.getItem('marmita')
  var m =JSON.parse(marmita)
  return (
    <Default withHeader>
      <div className='mt-8 text-center'>
        <div className='frame-cardapio'>
          <p>{m.quantidade} marmitas</p>
          <p>{m.proteina}- 100gr</p>
          <p>{m.carboidrato}- 100gr</p>
          <p>{m.vegetal}-200gr</p>
        </div>
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
