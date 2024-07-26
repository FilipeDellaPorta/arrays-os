const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(listaEstudantes)

listaEstudantes.splice(1, 2, 'Rodrigo') 
//primeiro parâmetro define a posição inicial da remoção 
//segundado parâmetro é a quantidade de elementos a serem removidos a partir da posição
//terceiro parâmetro é o elemento a ser incluído

console.log(listaEstudantes)