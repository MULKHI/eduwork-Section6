/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    });

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('Online {enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
        //fungsi perintah dibawah untuk mengcek apakah ada text Online pada <li> <a> (Assertions)
        cy.get('li').find('a').should('contain.text', 'Online')
        cy.get('li').find('a').should('have.length',2)
    });

});