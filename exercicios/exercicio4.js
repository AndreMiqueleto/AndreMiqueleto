/**
 * Validador de idade minima para adocao
 * 
 * script que verifique se um dog pode ser adotado com base na idade minimida definida, por exemplo, 2 anos
 * 
 * use os operadores adequados e exivva
 * - nome do dog
 * - idade
 * se está apto ou nao para adocao
 * 
 * extra: aplique uma regra com operador logico para permitir que se o cao for de pequeno porte, pode ser adotado independente da idade
 */

const idadeMinimaAdocao = 2

const idadeDog = 5
const porte = 'medio'
const nomeDog = 'Teodoro'





console.log(nomeDog)
console.log(idadeDog)
console.log(porte)



function verificarSePodeSerAdotado(idadeDog, porte){
    const apto = idadeDog <= idadeMinimaAdocao || porte == 'pequeno'// if
              ? 'sim'
              : 'não' // senao
              console.log(`Apto para adoção: ${apto}`)
}

verificarSePodeSerAdotado(1, 'medio')
verificarSePodeSerAdotado(2, 'medio')
verificarSePodeSerAdotado(3, 'pequeno')
verificarSePodeSerAdotado(5, 'grande')