import Storage from '../../data/storage'
import './index.css'

const SummaryCardapio = () => {
    const cardapio = Storage.get('cardapio');

    return (
        <div className='frame-cardapio'>
          {cardapio || Array.isArray(cardapio) ? cardapio.map((marmita, index) => (
            <div key={index} className='box-marmita w-4/5 mx-auto py-6'>
              <p className='font-indie text-3xl'>{marmita.quantidade} marmitas #{index + 1}</p>
              <p className='font-indie text-xl'>{marmita.proteina}- 100gr</p>
              <p className='font-indie text-xl'>{marmita.carboidrato}- 100gr</p>
              <p className='font-indie text-xl'>{marmita.vegetal}-200gr</p>
            </div>
          )) : <></>}
        </div>
    )
}

export default SummaryCardapio;