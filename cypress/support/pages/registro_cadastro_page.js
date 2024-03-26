/// <reference types ="cypress" />
const elementos = {
    botao: {
      btnLogin: '#btnLogin',
    },
    campos: {
      usuario: '#user',
      senha: '#password',
  
    },
    mensagens: {
      msgSucesso: '#swal2-title',
      msgBoasVindas: '#swal2-html-container'
    }
  }
export default {

    preencheCadastroUsuarioPage() {
        cy.get(elementos.campos.usuario).type('maicon@gmail.com')
            .get(elementos.campos.senha).type('9878767')
            .get(elementos.botao.btnLogin).click()
           
    },

    loginRealizadoSucesso() {
        cy.get(elementos.mensagens.msgSucesso).contains('Login realizado').should('be.visible')
        cy.get(elementos.mensagens.msgBoasVindas).should('have.text', 'Olá, maicon@gmail.com')
    }
}