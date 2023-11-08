import { getAllFoods } from '../data/foods'

async function getCarbohydrates() {
  const foods = await getAllFoods()
  return foods.filter((food) => food.type === 'carbohydrates')
}

export { getCarbohydrates }
