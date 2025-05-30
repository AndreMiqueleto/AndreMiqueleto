const nomeDog = "Fred"
const porte = 'medio'
const tempo = 30


// Decidir o tipo de atividade 
let atividade

switch (porte){ 
    case 'pequeno':
        atividade = 'brincar dentro de casa'
        break
    case 'medio':
        atividade = 'caminhada no quarteirão'
        break
    case 'grande':
        atividade = 'correr no parque'
        break
    default:
        atividade = 'porte invalido'
}


// Ajustar a mensagem de acordo com o tempo
let mensagem

if (tempo < 15) {
    mensagem = 'atividade rápida'
} else if (tempo <= 30) {
    mensagem = 'tempo ideal'
} else {
    mensagem = 'hora da diversão'
}

console.log(`${mensagem}: [${atividade}]`)
