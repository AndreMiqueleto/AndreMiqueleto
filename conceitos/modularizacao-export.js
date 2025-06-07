/**
  
    Sintaxe CommonJS:
     module.exports = {} /require('')
    
    ESM - Ecmascript Standard Modules
        export {} / import

 */

function exibirNomeDoDog(paramNomeDog) {
    console.log(`O nome do dog é ${paramNomeDog}`)
}

function exibirIdadeDoDog(paramIdadeDog) {
    console.log(`O nome do dog é ${paramIdadeDog}`)
}

// exibirNomeDoDog('Zeca')
// exibirNomeDoDog('Fred')

export {
    exibirNomeDoDog,
    exibirIdadeDoDog
}
