/**
 * para, faca
 * contador; condicao; manipulacao do contador (incremento/decremento)
 * 
 * quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
 */

const quantidadeCalculada = 3

for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {

    console.log(`Dando o petisco de n˚ ${quantidadeDePetiscos}`)
}


const gatos = ['Lessie', 'Pony', 'Fumaca']

for(let indice=0; indice < gatos.length; indice++) {
    console.log(`Dando o Petisco para ${gatos[indice]}`)
}