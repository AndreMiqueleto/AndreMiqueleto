const pesoDoDog = 5

const qtdEstoque = 1000



function qtdDiaria(pesoDoDog, qtdEstoque){
    const gramasPorDia = pesoDoDog * 30
    const duracaoEstoque = Math.floor(qtdEstoque/gramasPorDia)

    console.log('Nome do Dog: Zeca')
    console.log(`Peso: ${pesoDoDog}`)
    console.log(`Estoque: ${qtdEstoque}`)

    console.log(`Quantidade diaria: ${gramasPorDia} gramas`)
    console.log(`Estoque dura: ${duracaoEstoque} dias`)
 }



qtdDiaria(10, 2000)








