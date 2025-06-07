const listaBrinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

function entregarBrinquedos(brinquedos){
    listaBrinquedos.forEach((brinquedo, i) => {
        console.log(`Entregando brinquedo ${i+1}: ${brinquedo}`)
    })
}
entregarBrinquedos(listaBrinquedos)
//console.log("Todos os brinquedos foram entregues")