const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']

const medias = [7, 4.5, 8, 7.5]

// const tamanhoNome = alunos.filter((aluno) => {
//     return aluno.length < 4 
// })

// console.log(tamanhoNome)

const reprovados = alunos.filter((aluno, indice)=> {
    // console.log(aluno, indice)
    // medias[indice] < 7
    // console.log(medias[indice])
    // return medias[indice]
    return medias[indice] < 7
}) 

console.log(reprovados)