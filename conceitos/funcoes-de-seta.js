// funcoes de seta / flecha

const exibirNomeDoDog = (nome) => {
    console.log(nome)
}

const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: 'Pitoco',
        peso: 12,
        dogIrmao: {
            nome: 'Bob'
        },
        adotado: true
    }
}

const listarObjetosDog = () => {
    return [{
        nome: 'Fred',
        peso: 10
    }, {
        nome: 'Tomé',
        peso: 16
    }]
}

const listarNomesDeDogs = () => {
    return [
        'Zeca',
        'Jorginho'
    ]
}

// arrow function sem bloco + com return 'automatico'
const dobrar = (numero) => numero * 2 

exibirNomeDoDog('Zeca')
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado('juca'))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())


const nomesDeDogs = listarNomesDeDogs()
