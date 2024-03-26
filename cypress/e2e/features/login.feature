
Feature: Login

        Eu como cliente
        Quero fazer login na aplicação
        Para fazer um pedido de compra 

    Scenario: Login com campo e-mail vazio
        Given acesso a tela do curso
        When clicar em login
        Then eu vejo a mensagem de "E-mail inválido."

   Scenario: Login com campo senha vazio
      Given acesso a tela do curso
      And preencho o email
      When clicar em login
      Then eu vejo a mensagem de "Senha inválida."


  Scenario: Login com sucesso
      Given acesso a tela do curso
      And preencho o email
      And preencho a senha
      When clicar em login
      Then login será realizado com sucesso