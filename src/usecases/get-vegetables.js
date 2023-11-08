import { getAllFoods } from '../data/foods'

async function getVegetables() {
  const foods = await getAllFoods()
  return foods.filter((food) => food.type === 'vegetables')
}

export { getVegetables }
