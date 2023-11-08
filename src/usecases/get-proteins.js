import { getAllFoods } from '../data/foods'

async function getProteins() {
  const foods = await getAllFoods()
  return foods.filter((food) => food.type === 'proteins')
}

export { getProteins }
