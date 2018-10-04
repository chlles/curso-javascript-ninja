/*
Crie um array com 5 items (tipos variados).
*/

arr = [ 'Arroz', { carioca: 'A' , preto: 'B' }, 17.90, true, function buy(x, y) { return x + y } ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(x){
	arr.push(x);
	return arr
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem([ 'Sacolinha', 2, true ]);

>>	["Arroz", {…}, 17.9, true, ƒ, Array(3)]
		0: "Arroz"
		1: {carioca: "A", preto: "B"}
		2: 17.9
		3: true
		4: ƒ buy(x, y)
		5: (3) [ 'Sacolinha', 2, true ]
		
	

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log( 'O segundo elemento do segundo array é ' + arr[5][1]);
>> O segundo elemento do segundo array é 2

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O primeiro array tem ' + arr.length + ' itens.');
>> O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O segundo array tem ' + arr[5].length + ' itens.');
>> O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?
