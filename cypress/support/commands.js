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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>
import * as XLSX from 'xlsx';

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

// this Block of code is defined to skip the uncaught exceptions from cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// upload file command
Cypress.Commands.add('UploadFile',(locator,filename)=>{
   return cy.get(locator).attachFile(filename,{force:true});
})
//another approach to use upload command
Cypress.Commands.add('upload',(filename , locator)=>{
    cy.fixture(filename).then((fileContent) => {
        // Target the file input element and trigger the file upload event
        cy.get(locator).attachFile({
          fileContent,
          fileName: filename,
          mimeType: 'xlsm'
        })
    })
})
// Login to Website command
Cypress.Commands.add('Login',(username,password)=>{
        cy.visit('https://aws-stage.blnsoftware.com/')
        cy.get('#login').type(username)
        cy.get('#password').type(password)
        cy.get(".submit > input[type='submit']").click();
        let welcometext;
        cy.get('.logout').then((intext)=>{
            welcometext=intext.text()
        cy.log(welcometext);
         expect(welcometext).to.contains('Welcome');
    })
})
/*
Cypress.Commands.add('readXlsmFile', (filePath) => {
   return cy.readFile(filePath, 'binary').then((fileContent) => {
      const workbook = XLSX.read(fileContent, { type: 'binary' });
      const sheetName = workbook.SheetNames[2];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      return data;
    });
}); 
Cypress.Commands.add('convertExcelToJson', (filePath) => {
    return new Promise((resolve, reject) => {
      readXlsxFile(filePath)
        .then((rows) => {
          const jsonData = [];
          const header = rows[0];
          for (let i = 1; i < rows.length; i++) {
            const data = {};
            for (let j = 0; j < header.length; j++) {
              data[header[j]] = rows[i][j];
            }
            jsonData.push(data);
          }
          
          resolve(jsonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });*/
  Cypress.Commands.add('convertExcelToJson', (filePath) => {
    return cy.readFile(filePath, 'binary').then((fileContent) => {
      const workbook = XLSX.read(fileContent, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      return jsonData;
    });
  });
  
  