/// <reference types ="cypress" />
const elementos = {
    campo: {
        email: '#user',
        senha: '#password'
    },
    botao: {
        btnLogin: '#btnLogin'
    },
    mensagem: {
        msgEmailInvalido: '.invalid_input'
    }
  }
  
  export default {
  
      usuarioInvalido() {
        cy.get(elementos.campo.email).type('maiconaima')
         .get(elementos.botao.btnLogin).click()
        
      },

      emailInvalido(message) {
        cy.get(elementos.mensagem.msgEmailInvalido).contains('E-mail inválido.')
          .should('have.text', message)
      },

      senhaValida() {
        cy.get(elementos.campo.senha).type('98765654')
      }
  }