## rsch-cypress

### SwagLabs Testing
every page of the website is split into its respecting feature containing several user scenarios, assertion is also being done at the end of an action.


```bash
--- Happy Path
# Cart
   As standard user, verify the components of a product card in the cart
   As standard user, verify to check product removal using the cancel
   As standard user, verify to successfully buy products

# Login
   As standard user, can login to inventory page

# Product
   As standard user, Verify the title page & sorting is show
   As standard user, Verify the detail product page, should contain details name, desc & price

# Sidebar
   As standard user, Verify the various menu and links on sidebar

--- Unhappy Path
# Login
   As standard user, should display incorrect username message
   As standard user, should display incorrect password message
   As locked out user, should display locked out message
   As problem user, should failed display product list

```

***

### Built With
* Cypress 8.x.x


### Getting Started

To run the automation test you need to:

### Installation
1. install the latest node
2. clone this repo
   > $ git clone git@github.com:tguharjo/rsch-cypress.git

3. install dependencies
   >  $ npm install

4. open cypress (*for the first time, wait a minute*)
   > $ npm run cypress:open

5. for running all test cases, click **Run 4 integrations specs**

