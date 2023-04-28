/* import React, { useState } from 'react' */
import './styles.css'
import Button from '../../components/Button'
import Select from '../../components/Select'
import Default from '../../templates/default'
import { useState } from 'react';
import proteinas from '../../data/proteinas.json'
import carboidratos from '../../data/carboidratos.json'
import vegetais from '../../data/vegetais.json'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MonteMarmita() {
    const history = useHistory()
    const [quantidade, setQuantidade] = useState(0);
    const [proteina, setProteina] = useState();
    const [carboidrato, setCarboidrato] = useState();
    const [vegetal, setVegetal] = useState();

    const quantidadeSelectInputOptions = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
    ]

    const adicionaMarmita = (e) => {
        e.preventDefault();
        // logic to add marmita
        console.log('Marmita: ', {
            marmita: {
                proteina,
                carboidrato,
                vegetal
            },
            quantidade
        })
        history.push('/cardapio')
    }

    return (
        <Default withHeader>
            <div className="container-balanceando-titulo">
                <h1>Monte sua marmita</h1>
                <Select
                    options={proteinas.map((proteina) => ({ value: proteina.name, label: proteina.name }))}
                    getOptionValue={(option) => option.value}
                    onChange={({ value }) => setProteina(value)}
                    className="w-full mb-5"
                    placeholder="Proteína"
                />
                <Select
                    options={carboidratos.map((carboidrato) => ({ value: carboidrato.name, label: carboidrato.name }))}
                    getOptionValue={(option) => option.value}
                    onChange={({ value }) => setCarboidrato(value)}
                    className="w-full mb-5"
                    placeholder="Carboidrato"
                />
                <Select
                    options={vegetais.map((vegetal) => ({ value: vegetal.name, label: vegetal.name }))}
                    getOptionValue={(option) => option.value}
                    onChange={({ value }) => setVegetal(value)}
                    className="w-full mb-5"
                    placeholder="Legumes & Vegetais"
                />
            </div>
            <div className='flex justify-center items-center'>
                <h3 className='font-bold text-center text-xl mr-3'>Quantidade de marmitas</h3>
                <Select
                    options={quantidadeSelectInputOptions}
                    onChange={({ value }) => setQuantidade(value)}
                    placeholder="0"
                    className="w-1/2"
                />
            </div>
            <div className="mt-10 mb-4 text-center">
                <Button onClick={adicionaMarmita} text="criar cardápio" />
            </div>
        </Default>
    )
}

export default MonteMarmita
