/**
 * 
 * 
 * 
 *  Matheus
 *  Renata 
 *  Leandro
 *  Ana
 *  Lucas
 * 
 *  paraCada (item da) listaDeAlunos
 *      // dar uma nota aleatoria
 * 
 * 
 */

const listaDeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 8
    },
    {
        nome: 'Leandro',
        nota: 9
    },
    {
        nome: 'Ana',
        nota: 4
    },
    {
        nome: 'Lucas',
        nota: 10
    }

    
]

listaDeAlunosENotas.forEach(aluno => {

    if (aluno.nota < 7) {
        console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
    }
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})