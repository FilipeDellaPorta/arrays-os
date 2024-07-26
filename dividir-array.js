const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 
'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2) 
// o fim não é incluído, por isso a lista da sala 1 não termina no índice 10 e sim no 9

const sala2 = listaEstudantes.slice(listaEstudantes.length/2)


console.log(sala1)


console.log(sala2)

// console.log(listaEstudantes.length)