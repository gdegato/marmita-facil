import Axios from 'axios'
import { setupCache, buildWebStorage } from 'axios-cache-interceptor'

const options = {
  baseURL: 'https://marmita-facil-api.onrender.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export default setupCache(Axios.create(options), {
  storage: buildWebStorage(localStorage, 'marmitafacil_'),
  cacheTakeover: false,
})
