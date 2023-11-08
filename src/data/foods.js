import axios from './api'

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24

async function getAllFoods() {
  const response = await axios.get('/foods', {
    id: 'foods',
    cache: {
      ttl: ONE_DAY_IN_MS,
    },
  })
  return response.data
}

export { getAllFoods }
