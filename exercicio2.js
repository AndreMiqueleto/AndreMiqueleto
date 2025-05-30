const nomeTag1 = "   FrED        "
const nomeTag2 = "zeca TATU" 
const nomeTag3 = "JORGINhO"
const nomeTag4 = "RaPoSINHA "
const nomeTag5 = "  REx   "




let dogOriginalNames = [{
    Nome1: nomeTag1,
    Nome2: nomeTag2,
    nome3: nomeTag3,
    Nome4: nomeTag4,
    Nome5: nomeTag5
    //raca: raca.slice(0,1).toUpperCase() + raca.slice(1).toLowerCase()
}]

console.log("TAGS ORIGINAIS:")

console.log(dogOriginalNames)


let nomeTag1Fixed, nomeTag2Fixed


nomeTag1Fixed = nomeTag1.trim().toLowerCase(),
nomeTag2Fixed = nomeTag2.toLowerCase(),
nomeTag2Fixed.slice(0,1).toUpperCase() + nomeTag2Fixed.slice(1).toLowerCase()


    // // Remove espaços extras no começo e fim
    // const nomeLimpo = nomeOriginal.trim();
  
    // // Formata o nome: primeira letra maiúscula e o resto minúsculo
    // const nomeFormatado = nomeLimpo.charAt(0).toUpperCase() + nomeLimpo.slice(1).toLowerCase();


let dogFixedNames = [{
    Nome1: nomeTag1Fixed.slice(0,1).toUpperCase() + nomeTag1Fixed.slice(1).toLowerCase(),
    Nome2: nomeTag2Fixed.charAt(0).toUpperCase() + nomeTag2Fixed.slice(1).toLowerCase(),
    nome3: nomeTag3,
    Nome4: nomeTag4
    //raca: raca.slice(0,1).toUpperCase() + raca.slice(1).toLowerCase()
}]


function removerCaracteresEspeciais(nome) {
    return nome.replace(/[ˆ])
}

console.log("TAGS CORRIGIDAS:")

console.log(dogFixedNames)











/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

// const nomeDog = "tH   oR@!%  "
const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length === 1;

// 10 == '10'
// 10 === '10'

/*
/*

  operadores = comparacao, logica, aritmética

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

*/

const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1
}