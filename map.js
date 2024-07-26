const notas = [10, 9.5, 8, 7, 6]

// const notasAtualizadas = notas.map(function(nota) {
//     return nota + 1
// })

// const notasAtualizadas = notas.map((nota) => {
//     return nota + 1
// })

// a arrow function permite a supressão das chaves e do return quando possui somente uma instrução no código

                                                    //>= 10 ? 10 : nota + 1 -> operador ternário                          
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas)

//map é um método que retorna o array enquanto a função foreach não tem retorno