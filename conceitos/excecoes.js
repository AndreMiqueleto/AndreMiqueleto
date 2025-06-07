/** 
    
    tentar {
        //conexao com banco(exemplo)
    } pegar (erro/excessao){
        // Ssalvar a excessao em algum lugar...
        //exibir 
    }
*/

// TENTAR FAZER ALGO QUE PODE DAR ERRO
try {
    console.log(`Tentando alimentar o Pet...`)
    //throw new Error('pet nao quis alimento') -> O THROW LANÇA ERRO

    // EX: TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
} catch (excecao) {
    // TRATAR ESSE ERRO - EXIBIR, SALVAR, MELHOR A DESCRICAO DESSE ERRO
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
} finally {
    // SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL
    console.log(`Sempre serei executado!`)
}