function getQuantityGrRandom() {
  const valores = [100, 150, 200]
  const indiceAleatorio = Math.floor(Math.random() * valores.length)
  return valores[indiceAleatorio]
}

export { getQuantityGrRandom }
