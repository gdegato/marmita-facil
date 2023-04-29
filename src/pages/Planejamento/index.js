import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Storage from '../../data/storage'
import Default from '../../templates/default'
import './styles.css'
import SummaryCardapio from '../../components/SummaryCardapio'

function Planejamento() {
    const history = useHistory();
    const cardapio = Storage.get('cardapio')

    if (!cardapio || !Array.isArray(cardapio)) history.push('/montemarmita')

    return (
        <Default withHeader>
            <h1 className='mt-8 font-bold text-2xl text-center'>Planejamento final</h1>
            <div className='mt-4 text-center'>
                <SummaryCardapio />
            </div>
            <div className='mt-4 p-4 text-sm text-gray-600 rounded-xl bg-white/70 border border-solid border-[#9E9E9E]'>
                <p>A média de tempo para preparar uma refeição é de, no mínimo, uma hora. O planejamento que você montou equivale a 15 horas para aproveitar com o que quiser!</p>
            </div>
        </Default>
    )
}

export default Planejamento
