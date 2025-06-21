/**
 * 
 *  describe -> agrupador de testes
 *  it       -> implementacao do teste   
 * 
 */
import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        // verifique se: <valor atual> é igual a <valor esperado>

    })

    it('segundo teste', async function() {
        // throw new Error()    
        assert.equal(exibirNomeDogFormatado('ZeCA'), 'ZECA');
    })
})

