/// <reference types ="cypress" />


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import acessar_tela_page from "../pages/acessar_tela_page"
import senha_invalida_page from "../pages/senha_invalida_page"
import email_invalido_page from "../pages/email_invalido_page"
import registro_cadastro_page from "../pages/registro_cadastro_page"


Given('acesso a tela do curso', () => {
    acessar_tela_page.acessarTelaLoginPage()
})

When('clicar em login', () => {
    senha_invalida_page.botaoLogin()

})

Then('eu vejo a mensagem de {string}', (message) => {
    acessar_tela_page.mensagemErro(message)
})

Given('preencho o email', () => {
    senha_invalida_page.emailValido("maicon@gmail.com")
})



Given('preencho a senha', () => {
    email_invalido_page.senhaValida()
})

Then('login será realizado com sucesso', () => {
    registro_cadastro_page.loginRealizadoSucesso()
})

