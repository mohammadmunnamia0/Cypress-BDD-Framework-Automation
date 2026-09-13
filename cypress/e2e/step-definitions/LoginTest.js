import {given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Alldata from "../../Data/Shared_Data";
import User_Signup_locatorsPage from "../../PageObjects/User_Signup_locatorsPage";

const Alldata = new Alldata();
const locators = new User_Signup_locatorsPage();

given('User is on the Login Page', () => {
    cy.visit(Alldata.Prime_SCF_url);
});

When('User enters valid username and password', () => {
    cy.xpath(locators.UserID).type('cad_duo');
    cy.xpath(locators.Password).type('Prime123@');
    cy.xpath(locators.Login).click();
});

Then('User Click Login Button', () => {
    cy.xpath(locators.Login).click();
});
