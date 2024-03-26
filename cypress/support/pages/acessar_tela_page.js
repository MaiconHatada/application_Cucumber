/// <reference types ="cypress" />

const elemento = {
    campo: {
        telaLogin: '.right_list_fix > :nth-child(1) > a'
},
    msg: {
        mensagensInvalidas: '.invalid_input'
    }

}

export default {

    acessarTelaLoginPage() {

        cy.visit('/')
          .get(elemento.campo.telaLogin).click()
    },
    
    mensagemErro(message) {
        cy.get(elemento.msg.mensagensInvalidas)
           .should('have.text', message)
    }, 

    }
