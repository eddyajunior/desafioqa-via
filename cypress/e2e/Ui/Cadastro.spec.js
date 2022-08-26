/// <reference types="cypress" />
const faker = require('faker-br');

describe('CONEXAO-001 - Cadastro', () => {
    const name = faker.name.findName();
    const password = faker.internet.password();
    const email = faker.internet.email(name);

    beforeEach(() => {
        cy.visit('cadastrar');
    });

    it('01.38 - Todos os dados preenchidos, NOME, E-MAIL, SENHA não informados, CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.37 - Todos os dados preenchidos, NOME, E-MAIL, SENHA e CONFIRMAR não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.36 - Todos os dados preenchidos, NOME e SENHA não informados, E-MAIL inválido', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.35 - Todos os dados preenchidos, NOME não informado, E-MAIL inválido, CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.34 - Todos os dados preenchidos, NOME e CONFIRMAR não informados, E-MAIL inválido', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.33 - Todos os dados preenchidos, NOME não informados, E-MAIL inválido', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
    });

    it('01.32 - Todos os dados preenchidos, NOME, E-MAIL, SENHA não informados, CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.31 - Todos os dados preenchidos, NOME, E-MAIL, SENHA e CONFIRMAR não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.30 - Todos os dados preenchidos, NOME, E-MAIL e SENHA não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.29 - Todos os dados preenchidos, NOME, E-MAIL não informados e CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.28 - Todos os dados preenchidos, NOME, E-MAIL e CONFIRMAR não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.27 - Todos os dados preenchidos, NOME e E-MAIL não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
    });

    it('01.26 - Todos os dados preenchidos, NOME e CONFIRMAR não informados, SENHA < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
    });

    it('01.25 - Todos os dados preenchidos, NOME e CONFIRMAR não informados, SENHA < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.24 - Todos os dados preenchidos, NOME, SENHA e CONFIRMAR não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.23 - Todos os dados preenchidos, NOME em branco, SENHA não informada', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.22 - Todos os dados preenchidos, NOME em branco, CONFIRMAR não informado', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.21 - Todos os dados preenchidos, NOME em branco, CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.20 - Todos os dados preenchidos, NOME em branco', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
    });

    it('01.19 - Todos os dados preenchidos, E-MAIL em branco,  SENHA < 6 caracteres e CONFIRMAR não informado', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.18 - Todos os dados preenchidos, E-MAIL em branco,  SENHA e CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
    });

    it('01.17 - Todos os dados preenchidos, E-MAIL em branco,  SENHA < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.16 - Todos os dados preenchidos, E-MAIL e SENHA não preenchidos', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.15 - Todos os dados preenchidos, E-MAIL, SENHA e CONFIRMAR não preenchidos', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.14 - Todos os dados preenchidos, E-MAIL e SENHA não preenchidos', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.13 - Todos os dados preenchidos, E-MAIL não preenchido e CONFIRMAR < 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.12 - Todos os dados preenchidos, E-MAIL e CONFIRMAR não informados', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.11 - Todos os dados preenchidos, E-MAIL não informado', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
    });

    it('01.10 - Todos os dados preenchidos, SENHA e CONFIRMAR menor que 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
    });

    it('01.09 - Todos os dados preenchidos, SENHA menor 6 caracteres, CONFIRMAR em branco', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.08 - Todos os dados preenchidos, SENHA menor 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.07 - Todos os dados preenchidos, SENHA e CONFIRMAÇÃO não informadas', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.06 - Todos os dados preenchidos, SENHA não informada e CONFIRMAÇÃO menor que 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.05 - Todos os dados preenchidos, SENHA não informada', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(password);

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.04 - Todos os dados preenchidos, CONFIRMAÇÃO não informada', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();

        // Act 
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Confirmar senha é obrigatória');
    });

    it('01.03 - Todos os dados preenchidos, CONFIRMAÇÃO menor que 6 caracteres', () => {
        // Arrange
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name);
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email(name));
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123');

        // Act
        cy.get('[data-test="register-submit"]').click();

        // Assert
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain', 'Senhas precisam ser idênticas');
    });

    it('01.02 - Deve excluir a conta criada com sucesso', () => {
        let newEmail = '';
        let newPassword = '';

        cy.newAccount(true).then(data => {
            newEmail = data.email;
            newPassword = data.password;
        });
 
        cy.removeAccount(newEmail, newPassword);

        // Assert
        cy.get('.alert-undefined').should('contain', 'Sua conta foi removida');
    }); 

    it('01.01 - Deve criar a conta com sucesso', () => {
        // Arrange
        let newEmail = '';
        let newPassword = '';

        cy.newAccount().then(data => {
            newEmail = data.email;
            newPassword = data.password;
        });
     });

   
});