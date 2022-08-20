/// <reference types="cypress" />

//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('Login / Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').contains('Signin').click()
    });
    // Negative Scenario //
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').clear().type('invalid username')
        cy.get('#user_password').clear().type('invalid password')
        cy.get('#user_remember_me').click()
        cy.get('#login_form').contains('Sign in').click()

    });

    it('Should display error message', () => {
        cy.get('div[class="alert alert-error"]').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    // Positive Scenario //
    it('Should login application with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').clear().type(username)
        cy.get('#user_password').clear().type(password)
        cy.get('#user_remember_me').click()
        cy.get('#login_form').contains('Sign in').click()
        // perintah dibawah adalah untuk memastikan user sudah masuk pada halaman
        cy.get('ul[class="nav nav-tabs"]').should('be.visible')
        cy.get('h2').should('contain.text', 'Cash Accounts')

        });

    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').contains('Logout').click()
        cy.get('div[class="clearfix"]').should('be.visible')
        //fungsi perintah dibawah untuk mengcek apakah ada text Home pada <strong>
        cy.get('strong').should('contain.text', 'Home')

    });
});