describe ('Testes de Contato', () => {
    
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    })

    it('Envia mensagem com todos campos válidos', () => {
        cy.get('#id_contact').select(1).should("have.value", '2')
        cy.get('#email').type('nome@dominio.com')
        cy.get('#message').type(' ')
        cy.get('#submitMessage').click()
        cy.get('.alert').should('have.text','Your message has been successfully sent to our team.')
    })

    it('Não envia mensagem ao cs com email invalido', () => {
        cy.get('#id_contact').select(1).should("have.value", '2')
        cy.get('#email').type('nome@dominio.')
        cy.get('#message').type(' ')
        cy.get('#submitMessage').click()
        cy.get('.alert ol > li').should('have.text','Invalid email address.')
    })

    it('Não enviar mensagem sem campo de mensagem preenchido', () => {
        cy.get('#id_contact').select(1).should("have.value", '2')
        cy.get('#email').type('nome@dominio.com')
        cy.get('#submitMessage').click()
        cy.get('.alert ol > li').should('have.text', 'The message cannot be blank.')


    })
    
    it('Não enviar mensagem sem campo de subject selecionado', () => {
        cy.get('#email').type('nome@dominio.com')
        cy.get('#message').type(' ')
        cy.get('#submitMessage').click()
        cy.get('.alert ol > li').should('have.text', 'Please select a subject from the list provided. ')


    })

})
