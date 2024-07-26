const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']
//const nomesAtualizados = new Set(nomes) //set é um conjunto e não um array, métodos array não funcionam com Set
//const listaNomesAtualizados = [...nomesAtualizados] //convertendo conjunto em array

const listaNomesAtualizados = [...new Set(nomes)] //refatorado

//console.log(nomesAtualizados)
console.log(listaNomesAtualizados)