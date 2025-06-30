import { exibirNomeDogFormatado } from '../testes/testes-de-unidade.js'
import assert, { fail } from 'node:assert'

describe('Testes do Projeto', () => {
  it(`deve exibir o nome do dog com letras maiúsculas`, () => {
    assert.strictEqual(exibirNomeDogFormatado('Fred'), 'FRED')
    
    // verifique se: <valor atual> É IGUAL A <valor esperado>
  })

  it('primeiro teste', () => {

  })

  it('segundo teste', async function() {
    // throw new Error()    
    assert.equal(exibirNomeDogFormatado('ToBiaS'), 'TOBIAS');
  })

  it('Forçando Erro!', () => {
    try {
      throw new Error('Forçando um erro')  
    } catch (error) {
      assert.fail(`Erro esperado, apenas para testar o erro: ${error.message}`)
    }
  })

})