class inventoryPage {
  elements = {
      titleSpan: () => cy.get('.title'),
      failedImg: () => cy.get('.inventory_item_img').find('img'),
      sortSpan: () => cy.get('select'),
      baseUrl: () => cy.url(),
      titleProduct: () => cy.contains('.inventory_item_name', /Sauce Labs Onesie/),
      descProduct: () => cy.get('.inventory_item_desc'),
      priceProduct: () => cy.currency('.inventory_item_price').then(initial => {}),
      titleProductDetails: () => cy.get('.inventory_details_name'),
      descProductDetails: () => cy.get('.inventory_details_desc'),
      priceProductDetails: () => cy.currency('.inventory_details_price').then(initial => {
                            cy.currency('.inventory_details_price')
                          }),
      containerProduct: () => cy.get('.inventory_details_desc_container'),
      btnAddtoCart: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
      shoppingcartBadge: () => cy.get('.shopping_cart_badge'),
      shoppingcartLink: () => cy.get('.shopping_cart_link'),
      shoppingcartTitle: () => cy.get('.title'),
      btnRemoveCart: () => cy.get('[data-test="remove-sauce-labs-onesie"]'),
      btnCheckout: () => cy.get('[data-test="checkout"]'),
      titleCheckout: () => cy.get('.title'),
      firstNameCheckoutForm: () => cy.get('[data-test="firstName"]'),
      lastNameCheckoutForm: () => cy.get('[data-test="lastName"]'),
      postalCodeCheckoutForm: () => cy.get('[data-test="postalCode"]'),
      btnContinue: () => cy.get('[data-test="continue"]'),
      titleCheckoutOverview: () => cy.get('.title'),
      btnFinishCheckout: () => cy.get('[data-test="finish"]'),
      titleCheckoutComplete: () => cy.get('.title'),
      completeOrderMessage: () => cy.get('.complete-header')

  }

  clickProduct(){
    this.elements.titleProduct().click();    
  }

  clickbtnAddtoCart(){
    this.elements.btnAddtoCart().click();
  }

  clickCartLink(){
    this.elements.shoppingcartLink().click();
  }

  clickbtnRemove(){
    this.elements.btnRemoveCart().click();
  }

  clickbtnCheckout(){
    this.elements.btnCheckout().click();
  }

  clickbtnContinue(){
    this.elements.btnContinue().click();
  }

  clickbtnFinishCheckout(){
    this.elements.btnFinishCheckout().click();
  }
}

module.exports = new inventoryPage();