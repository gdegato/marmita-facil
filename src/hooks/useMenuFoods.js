import { useEffect, useState } from 'react'

import { getMenuFoods } from '../usecases/get-menus'

function useMenuFoods() {
  const [menuFoods, setMenuFoods] = useState([])

  useEffect(() => {
    const get = async () => {
      try {
        setMenuFoods(await getMenuFoods())
      } catch (error) {
        console.log('Error on get menu foods')
      }
    }
    get()
  }, [])

  return menuFoods
}

export default useMenuFoods
