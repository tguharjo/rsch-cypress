const sidebarMenu = require("../pages/sidebarMenu/sidebarMenu");
const inventoryPage = require('../pages/inventoryPage/inventoryPage');

describe('Sidebar Menu', () => {
  
  beforeEach(function(){
    cy.visit('');
    cy.fixture('data-driven/credentialsUsers')
        .then(credentials => {
            this.credentials = credentials;
        });
  });

  it('As standard user, Verify the various menu and links on sidebar', function () {
    cy.typeLogin(this.credentials.standardUsername,this.credentials.systemPassword);
    cy.sidebar();

    //assert
    sidebarMenu.elements.inventorySidebar().should('have.attr', 'href').and('equal', '#');
    sidebarMenu.elements.aboutSidebar().should('have.attr', 'href').and('equal', 'https://saucelabs.com/');
    sidebarMenu.elements.logoutSidebar().should('have.attr', 'href').and('equal', '#');
    sidebarMenu.elements.resetSidebar().should('have.attr', 'href').and('equal', '#');
  });

  afterEach(function() {
    sidebarMenu.clicklogoutSidebar();
    inventoryPage.elements.baseUrl().should('eq', Cypress.config('baseUrl'));
  })
});