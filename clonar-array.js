const listaOriginal = [7, 7, 8, 9]
//const listaClonada = listaOriginal -> não está copiando os valores e sim referenciando

//listaClonada.push(10) -> os dois array são alterados, pois 

//solução: spread operator/operado de espalhamento
const listaClonada = [...listaOriginal, 10]
//listaClonada.push(10) spread operator nao precisa do push

console.log(listaOriginal)
console.log(listaClonada)

//*atribuição por valor vs atribuição por referência* 