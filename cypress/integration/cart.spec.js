const faker = require("faker");
faker.locale = "id_ID"; //localize for indonesia name
const inventoryPage = require('../pages/inventoryPage/inventoryPage');

describe('Cart', () => {

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const zipCode = faker.address.zipCode();

  beforeEach(function(){
    cy.visit('');
    cy.fixture('data-driven/credentialsUsers')
        .then(credentials => {
            this.credentials = credentials;
        });
  });

  it('As standard user, verify the components of a product card in the cart', function() {
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);
    inventoryPage.elements.titleSpan().should('have.text', 'Products');
    inventoryPage.clickbtnAddtoCart();
    inventoryPage.clickCartLink();

    //asert
    inventoryPage.elements.shoppingcartTitle().should('have.text', 'Your Cart');
    inventoryPage.elements.titleProduct().should('have.text', 'Sauce Labs Onesie');
    inventoryPage.elements.descProduct().should('exist');
    inventoryPage.elements.priceProduct().should('eq', 7.99);
  });

  it('As standard user, verify to check product removal using the cancel', function() {
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);
    inventoryPage.elements.titleSpan().should('have.text', 'Products');
    inventoryPage.clickbtnAddtoCart();
    inventoryPage.clickCartLink();

    //assert
    inventoryPage.elements.shoppingcartTitle().should('have.text', 'Your Cart');
    inventoryPage.clickbtnRemove();
    inventoryPage.elements.shoppingcartBadge().should('not.exist');
  });

  it('As standard user, verify to successfully buy products', function() {
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);
    inventoryPage.elements.titleSpan().should('have.text', 'Products');
    inventoryPage.clickbtnAddtoCart();
    inventoryPage.clickCartLink();

    // //assert
    inventoryPage.elements.shoppingcartTitle().should('have.text', 'Your Cart');
    inventoryPage.clickbtnCheckout();
    inventoryPage.elements.titleCheckout().should('have.text', 'Checkout: Your Information');

    // fill checkout form
    inventoryPage.elements.firstNameCheckoutForm().type(firstName);
    inventoryPage.elements.lastNameCheckoutForm().type(lastName);
    inventoryPage.elements.postalCodeCheckoutForm().type(zipCode);

    inventoryPage.clickbtnContinue();
    inventoryPage.elements.titleCheckoutOverview().should('have.text', 'Checkout: Overview')
    inventoryPage.elements.titleProduct().should('have.text', 'Sauce Labs Onesie');
    inventoryPage.elements.descProduct().should('exist');
    inventoryPage.elements.priceProduct().should('eq', 7.99);

    inventoryPage.clickbtnFinishCheckout();
    inventoryPage.elements.titleCheckoutComplete().should('have.text', 'Checkout: Complete!');
    inventoryPage.elements.completeOrderMessage().should('have.text', 'THANK YOU FOR YOUR ORDER');
    
  });

  afterEach(function() {
    //logout
    cy.logout();
    inventoryPage.elements.baseUrl().should('eq', Cypress.config('baseUrl'));
  });
});