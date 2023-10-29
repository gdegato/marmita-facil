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
      <h1 className='text-dark text-4xl font-semibold text-center mb-8 flex justify-center items-center tracking-tighter'>Seu cardápio</h1>
      <div className='mt-8 text-center'>
        <SummaryCardapio />
        <p className='pt-10 font-bold'>Deseja montar outro cardápio?</p>
      </div>

      <div className="flex items-center justify-around gap-4 mt-8">
        <Link to="/montemarmita">
          <Button text="SIM" isSmall={true} />
        </Link>
        <Link to="/planejamento">
          <Button isSecondary text="NÃO" isSmall={true} />
        </Link>
      </div>
    </Default>
  )
}

export default Cardapio
