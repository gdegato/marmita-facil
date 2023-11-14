import axios from './api'

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24

async function getMenus() {
  const response = await axios.get('/menu-foods', {
    id: 'menu',
    cache: {
      ttl: ONE_DAY_IN_MS,
    },
  })
  return response.data
}

export { getMenus }
