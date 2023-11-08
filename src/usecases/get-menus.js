import { getMenus } from '../data/menus'
import { getQuantityGrRandom } from './get-quantity-in-gr-random'

async function getMenuFoods() {
  const menus = await getMenus()

  return menus.map((menu) => {
    return {
      ...menu,
      foods: menu.foods.map((food) => ({
        ...food,
        quantity: getQuantityGrRandom(),
      })),
    }
  })
}

export { getMenuFoods }
