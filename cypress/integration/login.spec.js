import loginPage from '../pages/loginPage/loginPage'
import inventoryPage from '../pages/inventoryPage/inventoryPage'

const datalogin = require('../fixtures/data-driven/sauceUsers.json');

describe('Login Page', function(){

  beforeEach(function(){
    cy.visit('');
  });

  datalogin.forEach(datalogin => {

      it(datalogin.name, function(){

        //fill form login
        loginPage.typeUsername(datalogin.username);
        loginPage.typePassword(datalogin.password);
        loginPage.clickLogin();

        if(datalogin.name === 'As standard user, can login to inventory page'){
          inventoryPage.elements.titleSpan().should('have.text', datalogin.expected)
        }else if (datalogin.name === 'As problem user, should failed display product list'){
          inventoryPage.elements.failedImg().should('have.attr', 'src').should('include', datalogin.expected);
        }else {
          loginPage.elements.errorMessage().should('have.text', datalogin.expected) 
        }
      });
  });

});