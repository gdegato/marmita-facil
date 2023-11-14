const Storage = {
  save(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data))
  },

  get(key) {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : undefined
  },
}

export default Storage
