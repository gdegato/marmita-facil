/* import React, { useState } from 'react' */
import './styles.css'
import Filter from '../../components/Filter'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Select from 'react-select';
import * as dataCarboidrato from '../../components/Filter/alimentos/carboidrato.json'
import * as dataProteina from '../../components/Filter/alimentos/proteina.json'
import * as dataVegetal from '../../components/Filter/alimentos/vegetal.json'


function MonteMarmita() {
    const { carboidrato } = dataCarboidrato
    const { proteina } = dataProteina
    const { vegetal } = dataVegetal

    const listaProteina = proteina.map((item) => item)
    const listaCarboidrato = carboidrato.map((item) => item)
    const listaVegetal = vegetal.map((item) => item)

    /*  const [lista, setLista] = useState() */

    const quantidadeMarmitas = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ]

    return (
        <div className="container-balanceando base-card">
            <Header />
            <div className="container-balanceando-titulo">
                <h1>Monte sua marmita</h1>
                <Filter
                    id="proteina"
                    name="proteina"
                    value={listaProteina}
                    placeholder="Proteina"
                />
                <Filter
                    id="carboidrato"
                    name="carboidrato"
                    value={listaCarboidrato}
                    placeholder="Carboidrato"
                />
                <Filter
                    id="vegetal"
                    name="vegetal"
                    value={listaVegetal}
                    placeholder="Legumes e vegetais"
                />
            </div>
            <div className='container-quantidade'>
                <h3>Quantidade de marmitas</h3>
                <form action="" className='filter-quantidade'>
                    <Select
                        options={quantidadeMarmitas}
                        placeholder=''
                        classNamePrefix="qtd-select"
                    />
                </form>

            </div>
            <div className="button-home">
                <Link to="/cardapio">
                    <Button text="criar cardápio" />
                </Link>
            </div>
        </div>
    )
}

export default MonteMarmita
