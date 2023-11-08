import Button from '../../components/Button'
import Select from '../../components/Select'
import Default from '../../templates/default'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Storage from '../../data/storage'
import useFoods from '../../hooks/useFoods'
import { getQuantityGrRandom } from '../../usecases/get-quantity-in-gr-random'

function MonteMarmita() {
  const foods = useFoods()
  const history = useHistory()
  const [quantidade, setQuantidade] = useState(0)
  const [proteina, setProteina] = useState()
  const [carboidrato, setCarboidrato] = useState()
  const [vegetal, setVegetal] = useState()

  const quantidadeSelectInputOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ]

  const isValidForm = () => {
    return quantidade > 0 && proteina && carboidrato && vegetal
  }

  const adicionaMarmita = (e) => {
    e.preventDefault()

    if (isValidForm()) {
      const cardapioSalvoAnteriormente = Storage.get('cardapio')
      let cardapioNovo = []

      if (
        cardapioSalvoAnteriormente &&
        Array.isArray(cardapioSalvoAnteriormente)
      ) {
        cardapioNovo = cardapioSalvoAnteriormente
      }

      cardapioNovo.push({
        ingredientes: [
          { ...proteina, quantity: getQuantityGrRandom() },
          { ...carboidrato, quantity: getQuantityGrRandom() },
          { ...vegetal, quantity: getQuantityGrRandom() },
        ],
        quantidade,
      })

      Storage.save('cardapio', cardapioNovo)

      history.push('/cardapio')
    }
  }

  return (
    <Default withHeader>
      <div className="sm:max-w-sm sm:mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-dark text-4xl font-semibold text-center mb-8 flex justify-center items-center tracking-tighter">
            Monte com seus ingredientes preferidos
          </h1>
          <div className="w-full">
            <Select
              options={foods?.proteins?.map((proteina) => ({
                value: proteina,
                label: proteina.name,
              }))}
              getOptionValue={(option) => option.value}
              onChange={({ value }) => setProteina(value)}
              className="w-full mb-5"
              placeholder="Proteína"
              borderColor="red"
            />
          </div>
          <div className="w-full">
            <Select
              options={foods?.carbohydrates?.map((carboidrato) => ({
                value: carboidrato,
                label: carboidrato.name,
              }))}
              getOptionValue={(option) => option.value}
              onChange={({ value }) => setCarboidrato(value)}
              className="w-full mb-5"
              placeholder="Carboidrato"
              borderColor="orange"
            />
          </div>
          <div className="w-full">
            <Select
              options={foods?.vegetables?.map((vegetal) => ({
                value: vegetal,
                label: vegetal.name,
              }))}
              getOptionValue={(option) => option.value}
              onChange={({ value }) => setVegetal(value)}
              className="w-full mb-5"
              placeholder="Legumes & Vegetais"
              borderColor="green"
            />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <h3 className="font-bold text-center text-dark text-xl mr-3">
            Quantidade de marmitas
          </h3>
          <Select
            options={quantidadeSelectInputOptions}
            onChange={({ value }) => setQuantidade(value)}
            placeholder="0"
            className="w-1/2 xs:max-w-[80px]"
            borderColor="gray"
          />
        </div>
        <div className="mt-10 mb-4 text-center">
          <Button
            disabled={!isValidForm()}
            onClick={adicionaMarmita}
            text="Adicionar"
            isSecondary={true}
          />
        </div>
      </div>
    </Default>
  )
}

export default MonteMarmita
