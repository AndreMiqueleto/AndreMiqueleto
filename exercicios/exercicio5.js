
const nomeDog = "Zeca"
const pesoDog = 8

const retornaPorte = (nomeDog, pesoDog) => {
    const porte = pesoDog <= 10 // se if
    ? 'pequeno'
    : 'medio' // senao

    console.log('------')
    console.log(`Nome: ${nomeDog}`)
    console.log(`Peso: ${pesoDog}`)
    console.log(`Porte: ${porte}`)
    console.log('------')
}


retornaPorte(nomeDog, pesoDog)
retornaPorte('Rex', 20)
