// Hands-on
// Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
// O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo

// let lista = ['maçã', 'banana', 1, 78, 90, 3, 'Olinda']


// function filtrarInteiros(lista) {
//     let apenasInteiros = []
//     for (let i = 0; i < lista.length; i++) {
//         if (typeof lista[i] === 'number') {
//             console.log(lista[i])
//         }
//     }
//     return apenasInteiros
// }

// let resultado = filtrarInteiros(lista)


function filtrarInteiros(lista){
    //Array.from().filter()
    return lista.filter(item => typeof item === 'number')
}

let lista = [2, 'maçã', 'banana', 1, 78, 90, 3, 'Olinda', 56, 114]

// let resultado = lista.filter(Number.isInteger)
// console.log(resultado) // [1, 78, 90, 3]

let resultado = filtrarInteiros(lista)
console.log(resultado)



// Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . 
// O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
// O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo


// const texto = "o rato roeu a roupa do rei de roma"

// const obterNumeroVogais = (texto) => {
    
    

//     return numeroVogais
// }


function contarVogais(texto) {
    // Remove tudo que não for vogal e conta o restante
    return texto.replace(/[^aeiou]/g, '').length
  }
  
  // Exemplo de uso:
  console.log(contarVogais("exemplo de texto")) // Saída: 6
  
  