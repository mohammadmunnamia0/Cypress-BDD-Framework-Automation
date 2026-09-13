Feature: Login Test

    Login to the Application Optifin

    Scenario: Login to the Optifin Application With Valid Credentials
        Given User is on the Login Page
        When User enters valid username and password
        Then User Click Login Button
