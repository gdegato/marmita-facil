import axios from './api'

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24

async function getAllFoods() {
  const response = await axios.get('/foods', {
    cache: {
      id: 'foods',
      ttl: ONE_DAY_IN_MS,
    },
  })
  return response.data
}

export { getAllFoods }
