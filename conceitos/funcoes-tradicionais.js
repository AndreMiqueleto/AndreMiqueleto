//

// funcao nomeada com parametro, sem retorno
function exibirNomeDoDog(nome){
    console.log(nome)
}

// funcao nomeada com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND'){
    console.log(porte)
}


// funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

function obterObjetoDog() {
    return {
        nome: 'Pitoco',
        peso: 12,
        dogIrmao: {
            nome: 'Bob'
        },
        adotado: true
    }
}

function listarObjetosDog() {
    return [{
        nome: 'Fred',
        peso: 10
    }, {
        nome: 'Tomé',
        peso: 16
    }]
}

function listarNomesDeDogs() {
    return [
        'Zeca',
        'Jorginho'
    ]
}


exibirNomeDoDog('Zeca')
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado('juca'))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())


const nomesDeDogs = listarNomesDeDogs()
