import Storage from '../../data/storage'

const SummaryCardapio = () => {
  const cardapio = Storage.get('cardapio')

  return (
    <div className="bg-white/70 border border-gray-500 rounded-lg">
      {cardapio || Array.isArray(cardapio) ? (
        cardapio.map((marmita, index) => (
          <div
            key={index}
            className="border-b border-gray-500 w-4/5 mx-auto py-6 last:border-0"
          >
            <p className="font-indie text-3xl">
              {marmita.quantidade} marmitas #{index + 1}
            </p>
            {marmita.ingredientes.map((ingrediente, index) => {
              return (
                <p key={index} className="font-indie text-xl">
                  {ingrediente.name} - {ingrediente.quantity}gr
                </p>
              )
            })}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default SummaryCardapio
