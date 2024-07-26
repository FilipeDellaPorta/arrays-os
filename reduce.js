const notasDaSalaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const notasDaSalaJava = [6, 5, 8, 9, 5, 6]
const notasDaSalaPython = [7, 3.5, 8, 9.5]

function calculaMedia(listaDeNotas) {
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota
    // }, 0)
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0)
    const media = somaDasNotas / listaDeNotas.length
    return media
}

console.log(calculaMedia(notasDaSalaJS))
console.log(calculaMedia(notasDaSalaJava))
console.log(calculaMedia(notasDaSalaPython))