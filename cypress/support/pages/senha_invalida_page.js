/// <reference types ="cypress" />
const elementos = {
    campo: {
        email: '#user',
        senha: '#password'
    },
   
    botao: {
        btnLogin: '#btnLogin',
    }
  
  } 

  export default {
      senhaInvalida() {
        cy.get(elementos.campo.senha).type('*()(*')
        
         
  },
    
    emailValido() {
        cy.get(elementos.campo.email).type('maicon@gmail.com')
    },

    botaoLogin() {
        cy.get(elementos.botao.btnLogin).click()
    }
  }  
