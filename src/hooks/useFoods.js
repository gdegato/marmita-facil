import { useEffect, useState } from 'react'

import { getProteins } from '../usecases/get-proteins'
import { getCarbohydrates } from '../usecases/get-carbohydrates'
import { getVegetables } from '../usecases/get-vegetables'

function useFoods() {
  const [foods, setFoods] = useState({})

  useEffect(() => {
    const get = async () => {
      try {
        const proteins = await getProteins()
        const carbohydrates = await getCarbohydrates()
        const vegetables = await getVegetables()

        setFoods({
          proteins,
          carbohydrates,
          vegetables,
        })
      } catch (error) {
        console.log('Error on get foods')
      }
    }
    get()
  }, [])

  return foods
}

export default useFoods
