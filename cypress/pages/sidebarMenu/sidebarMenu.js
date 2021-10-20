class sidebarMenu {
  elements = {
    sidebar: () => cy.get('#react-burger-menu-btn'),
    inventorySidebar: () => cy.get('#inventory_sidebar_link'),
    aboutSidebar: () => cy.get('#about_sidebar_link'),
    logoutSidebar: () => cy.get('#logout_sidebar_link'),
    resetSidebar: () => cy.get('#reset_sidebar_link')
  }

  clicklogoutSidebar() {
    this.elements.logoutSidebar().click();
  }

}

module.exports = new sidebarMenu();