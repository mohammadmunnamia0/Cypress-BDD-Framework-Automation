import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import Alldata from "../../Data/Shared_Data";
import User_Signup_locatorsPage from "../Locators/LoginLocator";

const alldata = new Alldata();
const locators = new User_Signup_locatorsPage();

Given('User is on the Login Page', () => {
    cy.visit(alldata.Prime_SCF_url);
});

When('User enters valid username and password', () => {
    cy.xpath(locators.UserID).type('cad_duo');
    cy.xpath(locators.Password).type('Prime123@');
    cy.xpath(locators.Login).click();
});

Then('User Click Login Button', () => {
    cy.xpath(locators.Login).click();
});