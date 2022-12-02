/// <reference types="Cypress" />

it ("Swag Labs smoke test automatition", () => {
    //Step 1
    cy.visit('https://www.saucedemo.com/')
    //Step 2
    cy.get('[data-test="username"]').type("standard_user");
    //Step 3
    cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="username"]').should("have.value", "standard_user");
        cy.get('[data-test="password"]').should("have.value", "secret_sauce");
    //Step 4
    cy.get('[data-test="login-button"]').click();
        cy.get('.app_logo').should("be.visible");
    //Step 5
    cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_name').should("have.text", "Sauce Labs Backpack");
    //Step 6
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').should("not.be.empty");
    //Step 7
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').should("be.empty");
    //Step 8
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').should("not.be.empty");
    //Step 9
    cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should("contain", "Sauce Labs Backpack" && "$29.99");
    //Step 10
    cy.get('[data-test="checkout"]').click();
        cy.get('.title').should("contain.text", "Checkout: Your Information");
        cy.get('[data-test="continue"]').should("be.visible");
    //Step 11
    cy.get('[data-test="firstName"]').type("Jasmin");
    //Step 12
    cy.get('[data-test="lastName"]').type("Brdarić");
    //Step 13
    cy.get('[data-test="postalCode"]').type("71000");
        cy.get('[data-test="firstName"]').should("have.value", "Jasmin");
        cy.get('[data-test="lastName"]').should("have.value", "Brdarić");
        cy.get('[data-test="postalCode"]').should("have.value", "71000");
    //Step 14
    cy.get('[data-test="continue"]').click();
        cy.get('.cart_item').should("contain", "Sauce Labs Backpack" && "$29.99");
        cy.get('[data-test="finish"]').should("be.visible");
    //Step 15
    cy.get('[data-test="finish"]').click();
        cy.get('.pony_express').should("be.visible");
        cy.get('.complete-text').should("have.text", "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    //Step 16
    cy.get('[data-test="back-to-products"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('.app_logo').should('be.visible')
    //Step 17
    cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').should("be.visible");
    //Step 18
    cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.get('[data-test="login-button"]').should("be.visible");
  });
