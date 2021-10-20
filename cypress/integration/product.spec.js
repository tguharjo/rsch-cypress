const inventoryPage = require('../pages/inventoryPage/inventoryPage');

describe('Product Page', () => {
  
  beforeEach(function(){
    cy.visit('');
    cy.fixture('data-driven/credentialsUsers')
        .then(credentials => {
            this.credentials = credentials;
        });
  });

  it('As standard user, Verify the title page & sorting is show', function(){
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);

    //assert
    inventoryPage.elements.titleSpan().should('have.text', 'Products')
    inventoryPage.elements.sortSpan().should('have.value', 'az');
  });

  it('As standard user, Verify the detail product page, should contain details name, desc & price',  function() {
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);
    inventoryPage.elements.titleSpan().should('have.text', 'Products');
    inventoryPage.clickProduct();
    
    // assert
    inventoryPage.elements.containerProduct().should('have.attr', 'class');
    inventoryPage.elements.titleProductDetails().should('have.text', 'Sauce Labs Onesie');
    inventoryPage.elements.descProductDetails().should('exist');
    inventoryPage.elements.priceProductDetails().should('eq', 7.99);
  })

  afterEach(function() {
    //logout
    cy.logout();
    inventoryPage.elements.baseUrl().should('eq', Cypress.config('baseUrl'));
  });
});