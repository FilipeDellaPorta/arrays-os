const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// exemplo acidental de for... in ; )
// for (let nota in notas) {
//     somaDasNotas += notas[nota]
// } 

// exemplo de for... of
for (let nota of notas) {
    somaDasNotas += nota
}


const media = somaDasNotas/notas.length

console.log(`a média das notas é: ${media}`)