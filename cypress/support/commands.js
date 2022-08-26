// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
const faker = require('faker-br');

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('login', { timeout: 30000 });

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
    cy.get('[data-test="login-password"]').type(password);

    cy.get('[data-test="login-submit"]').click();
    cy.wait('@loadpage');
});

Cypress.Commands.add('newAccount', (isNewAccountPage) => {
    const name = faker.name.findName();
    const password = faker.internet.password();
    const email = faker.internet.email(name);

    if (!isNewAccountPage) cy.visit('cadastrar', { timeout: 30000});

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

    cy.get('[data-test="register-submit"]').click();

    let account = { "name": name, "email" : email, "password": password};

    cy.log(account);
    return cy.wrap(account);
});

Cypress.Commands.add('removeAccount', (email, password) => {
        cy.login(email, password);

        cy.get('[data-test="dashboard-createProfile"]').click();
        cy.get('#mui-component-select-status').click();
        cy.get('[data-test="status-10"]').type('Outro');
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JavaScript');
        cy.get('[data-test="profile-submit"]').click();
        cy.get('[data-test="dashboard-deleteProfile"]').click();        
});
