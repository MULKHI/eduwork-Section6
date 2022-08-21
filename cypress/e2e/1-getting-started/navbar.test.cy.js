/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    });

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        //dibawah ini adalah Assersions yang saya tambahkan dan berbeda dari yang dimateri
        cy.get('div[class="span4"]').find('h4').should('have.length',6)
    });

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        //dibawah ini adalah Assersions yang saya tambahkan dan berbeda dari yang dimateri
        cy.get('div[class="signin-controls form-inputs"]').should('be.visible')
    
    });

    it('Should display homepage content', () => {
        cy.get('a[class="brand"]').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        //dibawah ini adalah Assersions yang saya tambahkan dan berbeda dari yang dimateri
        cy.get('div[class="span3"]').find('h4').should('have.length',4)
    
    });

});