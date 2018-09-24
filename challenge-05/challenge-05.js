/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var carro = ['Legal', 3, 'azul', true, 24.500];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function meuCarro(carro){
    return carro
};

meuCarro(carro);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

meuCarro(carro[2]);
'azul'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function outraFunc(array, num){
  return array[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var carro = ['Legal', 3, 'azul', true, 24.500];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function NomeDaFunc(array, num){
  return array[num]
}

NomeDaFunc(carro, 2)
'azul'

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nome){
  var meuLivro = {
    Twilight: [
      quantidadePaginas: 456,
      autor:'Pixel Wolf',
      editora:'Aurora'
    ],
    NewMoon: [
      quantidadePaginas: 256,
      autor:'Pixel Wolf',
      editora:'Aurora'
    ],
    BreakingDawn: [
      quantidadePaginas: 839,
      autor:'Pixel Wolf',
      editora:'Aurora'
    ]
  };
  
  if nome is null {
    return meuLivro
  }else{
    return meuLivro[nome]
  }
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
