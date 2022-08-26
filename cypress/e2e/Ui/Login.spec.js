/// <reference types="cypress" />
const faker = require('faker-br');

describe('CONEXAO-002 - Login', () => {
    const name = faker.name.findName();
    const password = faker.internet.password();
    const email = faker.internet.email(name);

    beforeEach(() => {
        cy.visit('login');
    });

    context('Dado que acesso a página de login', () => {
        it('Quando eu clicar no botão login sem preencher dados', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
            
            cy.get('[data-test="login-submit"]').click();

            // Assert
            cy.get('[data-test="login-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
            cy.get('[data-test="login-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        });

        it('Quando eu clicar no botão login preenchendo apenas o E-MAIL', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('[data-test="login-password"] > .MuiFormHelperText-root').should('contain', 'Senha é obrigatória');
        }); 

        it('Quando eu clicar no botão login preenchendo apenas a SENHA', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').focus().blur();
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('[data-test="login-email"] > .MuiFormHelperText-root').should('contain', 'Email é obrigatório');
        });

        it('Quando eu clicar no botão login preenchendo a SENHA < 6 caracteres', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('.MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        });        

        it('Quando eu clicar no botão login preenchendo E-MAIL inválido, SENHA < 6 caracteres', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123');
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('[data-test="login-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
            cy.get('.MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres');
        });

        it('Quando eu clicar no botão login preenchendo E-MAIL inválido, SENHA correta', () => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('a@a');
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password);
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('[data-test="login-email"] > .MuiFormHelperText-root').should('contain', 'Digite um email válido');
        });

        it('Quando eu clicar no botão login preenchendo E-MAIL inválido, SENHA < 6 caracteres', () => {
            let newName = faker.name.findName();
            let newEmail = faker.internet.email(newName);
            let newPassword = faker.internet.password();
    
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(newEmail);
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(newPassword);
            
            cy.get('[data-test="login-submit"]').click();
    
            // Assert
            cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas');
        });

        it('Quando eu clicar no botão login todos os dados preenchidos e corretos', () => {
            let loginEmail = 'edson@conexaoqa.com.br';
            let loginPassword = '123456';
            
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(loginEmail);
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(loginPassword);
                    
            cy.get('[data-test="login-submit"]').click();
            
            // Assert
            cy.get('[data-test="dashboard-welcome"]').should('contain', 'Edson QA');
        });
    });
});