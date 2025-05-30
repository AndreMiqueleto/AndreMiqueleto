/**
 *  Console API
 */

// console.log("Aula inicial JS")
// console.error("Falha na execução")
// console.warn("Atenção")
// console.table([{
//     nome: 'Samuel',
//     turma: '02',
//     disciplina: 'Prog JS'
// },
// {
//     nome: 'Lucas',
//     turma: '02',
//     disciplina: 'Prog JS'
// }
// ])

/**
 *  Constantes e Variaveis
 */

// const - para informacoes que nunca mudam
// var ou let - para informacoes que podem mudar

// informacoes que nao mudam, precisa declarar o valor pra ela
const nome = 'Zeca'
const raca = 'vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


/**
    Tipos de dados - cadeia, inteiro, real, logico, vetor, matriz
    (funcoes - leia e escreva)
  
    cadeia - string
    inteiro/real - number
    logico - boolean
    vetor/matrix - array
    
    undefined
    null

    BigInt = number para numeros extremamente grandes

    symbol = 'ídentificador unico'

    // o typescript - validação de tipos
 */

// const valor = "null"

// console.log(valor)

/**
 *  Strings
 */

// 'Turma 02 do PGATS' -  aspas simples ou single quote
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS`- template strings

// const turma = "02"
// let data = "05 de Abril"

// console.log("Aula 03 da turma " + turma + " no sabado dia 05 de abril")

// console.log(`Aula 03 da turma ${turma} no sabado dia ${ data }`) //interpolacao de strings

// console.log(data.length)

// // split - separar a string
// const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"

// const nomesDeAlunosSplit = nomesDeAlunos.split(" ")



// console.log(nomesDeAlunosSplit)

// console.log(nomesDeAlunos.toLowerCase())

// console.log(nomesDeAlunos.toUpperCase())

// console.log(nomesDeAlunos.includes("G"))

// console.log(nomesDeAlunos.replaceAll('a', 'i'))

// const conceitosLogica = "               inteiro real cadeia de caracteres....          "

// console.log(conceitosLogica.trim())  //ignora os espacos, mostra sem espaco

// let dataParaCortar = "05 de Abril"

// const cpf ="3588055809"

// console.log(dataParaCortar.slice(0, 2))

// console.log(cpf.slice(0, 5))


//Nome informa nome, idade, peso, racao e se é adotado ou nao

//a tag deve ter: 
// -o nome em letras maiusculas 
// - a raca com a primeira letra maiuscula 
// - peso

console.log("Informe o nome do seu cachorro")