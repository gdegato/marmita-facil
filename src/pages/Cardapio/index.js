import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Default from '../../templates/default'
import Button from '../../components/Button'
import Storage from '../../data/storage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import SummaryCardapio from '../../components/SummaryCardapio'


function Cardapio() {
  const history = useHistory();
  const cardapio = Storage.get('cardapio')

  if (!cardapio || !Array.isArray(cardapio)) history.push('/montemarmita')

  return (
    <Default withHeader>
      <div className='mt-8 text-center'>
        <div className='frame-cardapio'>
          <SummaryCardapio />
        </div>
        <p className='pt-10 font-bold'>Quer adicionar mais marmitas?</p>
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
