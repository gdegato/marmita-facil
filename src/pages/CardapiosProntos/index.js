import Button from '../../components/Button'
import Select from '../../components/Select'
import Default from '../../templates/default'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Storage from '../../data/storage'
import cardapios from "../../data/cardapios.json"

function CardapiosProntos() {
    const history = useHistory()
    const [quantidade, setQuantidade] = useState(0);
    const [cardapio, setCardapio] = useState()

    const quantidadeSelectInputOptions = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
    ]

    const isValidForm = () => {
        return quantidade > 0 && cardapio
    }

    const adicionaMarmita = (e) => {
        e.preventDefault();

        if (isValidForm()) {
            const cardapioSalvoAnteriormente = Storage.get('cardapio');
            let cardapioNovo = []

            if (cardapioSalvoAnteriormente && Array.isArray(cardapioSalvoAnteriormente)) {
                cardapioNovo = cardapioSalvoAnteriormente
            }

            cardapioNovo.push({
                "proteina": cardapio[0].proteina,
                "carboidrato": cardapio[0].carboidrato,
                "vegetal": cardapio[0].vegetal,
                quantidade
            })

            Storage.save('cardapio', cardapioNovo);

            history.push('/cardapio')
        }
    }

    return (
        <Default withHeader>
            <div className='sm:max-w-sm sm:mx-auto'>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-dark text-4xl font-semibold text-center mb-8 flex justify-center items-center tracking-tighter'>Escolha um cardápio pronto</h1>
                    <div className='w-full'>
                        <Select
                            options={cardapios.map((cardapio) => ({ value: cardapio.ingredients, label: cardapio.name }))}
                            getOptionValue={(option) => option.value}
                            onChange={({ value }) => setCardapio([value])}
                            className="w-full mb-5"
                            placeholder="Cardápios"
                            borderColor="red"
                        />
                    </div>
                </div>

                <div className='bg-white/70 border border-gray-500 rounded-lg  mb-4'>
                    {cardapio || Array.isArray(cardapio) ? cardapio.map((marmita, index) => (
                        <div key={index} className='w-4/5 mx-auto py-6'>
                        <p className='font-indie text-xl text-center'>{marmita.proteina} - 100gr</p>
                        <p className='font-indie text-xl text-center'>{marmita.carboidrato} - 100gr</p>
                        <p className='font-indie text-xl text-center'>{marmita.vegetal} - 200gr</p>
                        </div>
                    )) : <></>}
                </div>
                <div className='flex justify-around items-center'>
                    <h3 className='font-bold text-center text-dark text-xl mr-3'>Quantidade de marmitas</h3>
                    <Select
                        options={quantidadeSelectInputOptions}
                        onChange={({ value }) => setQuantidade(value)}
                        placeholder="0"
                        className="w-1/2 xs:max-w-[80px]"
                        borderColor="gray"
                    />
                </div>
                <div className="mt-10 mb-4 text-center">
                    <Button disabled={!isValidForm()} onClick={adicionaMarmita} text="avançar" isSecondary={true} />
                </div>
            </div>
        </Default>
    )
}

export default CardapiosProntos