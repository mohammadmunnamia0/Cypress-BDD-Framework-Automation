# Cypress BDD + Cucumber/Gherkin Project Setup Guide

This project demonstrates how to set up a Cypress automation framework using Behavior-Driven Development (BDD) with Cucumber and Gherkin syntax.

## Table of Contents

- [What is BDD?](#what-is-bdd)
- [What is Cucumber?](#what-is-cucumber)
- [Why use Cucumber with Cypress?](#why-use-cucumber-with-cypress)
- [Gherkin keywords](#gherkin-keywords)
- [Required dependencies](#required-dependencies)
- [Project setup steps](#project-setup-steps)
- [Folder structure](#folder-structure)
- [Example feature file](#example-feature-file)
- [Setup checklist](#setup-checklist)

## What is BDD?

BDD stands for Behavior-Driven Development.

BDD is a way of writing test cases in plain, readable language so that non-technical people such as Product Owners (POs), Project Managers (PMs), developers, and testers can understand the expected behavior of the application.

### Key concepts

- BDD (Behavior-Driven Development)
- Cucumber
- Gherkin syntax
- Cypress
- Given
- When
- Then

In BDD, we describe the behavior of the application using keywords like `Given`, `When`, and `Then` and map them to automation code.

## What is Cucumber?

Cucumber is a tool that supports BDD by allowing us to write test scenarios in Gherkin syntax and connect them with automation code.

Cucumber works with:

- Feature files
- Step definitions

### Feature files

Feature files describe the behavior and functionality of the application using Gherkin syntax.

### Step definitions

Step definitions contain the automation code mapped to the `Given`, `When`, `Then`, and other Gherkin steps.

## Why use Cucumber with Cypress?

Using Cucumber with Cypress provides several benefits:

1. Collaboration
   - PMs, POs, developers, and QAs can read and understand test cases easily.
2. Readability
   - Tests are easier to understand because they are written in simple language.
3. Clear test documentation
   - Feature files act as documentation of expected behavior.
4. Goal achievement
   - The team can align better with product requirements and expected outcomes.
5. Reusability
   - Common steps can be reused across multiple scenarios.
6. BDD maintenance
   - Helps teams follow BDD practices in Agile and Scrum workflows.

## Gherkin keywords

Gherkin provides several keywords used to describe application behavior.

### 1. Feature
A feature provides a high-level description of the functionality being tested.

### 2. Scenario
A scenario describes a specific behavior or test case with a few steps.

### 3. Given
`Given` describes the precondition or prerequisite of a test case. It defines the initial state before an action is performed.

### 4. When
`When` describes the action or event performed by the user, such as:

- Click
- Input
- Select
- Scroll
- Submit

### 5. Then
`Then` describes the expected result of the action. This is where assertions are typically performed.

### 6. And
`And` is used to add more steps to `Given`, `When`, or `Then` and makes scenarios easier to read.

### 7. Background
`Background` defines common steps shared by multiple scenarios within the same feature.

### 8. Scenario Outline
`Scenario Outline` is a template used to run the same scenario with multiple data rows from an `Examples` table.

## Required dependencies

To set up a Cypress automation project, you generally need:

1. Node.js
   - Provides `npm` for installing packages.
2. Cypress
   - End-to-end test framework used to automate application behavior.
3. Visual Studio Code
   - Code editor used to write and manage the project.

## Project setup steps

### Step 1: Create and open the project folder

Create a new folder for the Cypress project and open it in VS Code.

```bash
code .
```

### Step 2: Check Node.js and npm versions

```bash
node -v
npm -v
```

Make sure both are installed and working properly before continuing.

### Step 3: Initialize the Node.js project

```bash
npm init
```

This creates a `package.json` file.

### Step 4: Install Cypress

```bash
npm install cypress --save-dev
```

or

```bash
npm i cypress --save-dev
```

This installs Cypress and adds it to `devDependencies` in `package.json`.

### Step 5: Open Cypress

```bash
npx cypress open
```

This opens the Cypress app and may guide you through the initial setup.

### Step 6: Install the Cucumber/Gherkin extension

Install the VS Code extension:

- Cucumber (Gherkin) language support

Link:

- https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

This helps with:

- Gherkin syntax highlighting
- `.feature` file support
- Autocomplete
- Step-definition navigation

### Step 7: Install Cypress Cucumber preprocessor

Install the required dependency as per the package documentation:

```bash
npm install cypress-cucumber-preprocessor --save-dev
```

> Note: Always verify the installation instructions for the specific version you are using.

### Step 8: Configure `cypress.config.js`

```js
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
```

This tells Cypress to use the Cucumber preprocessor when it processes `.feature` files.

### Step 9: Configure `package.json`

Add the following configuration:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

Ensure the JSON syntax remains valid.

### Step 10: Create the Cucumber folder structure

```text
cypress/
└── e2e/
    ├── features/
    ├── pages/
    └── step_definitions/
```

### Folder responsibilities

#### `features/`
Contains Cucumber feature files such as:

- `login.feature`
- `fund_request.feature`
- `customer_onboarding.feature`

#### `pages/`
Contains page object model files such as:

- `LoginPage.js`
- `DashboardPage.js`
- `FundRequestPage.js`

These files hold:

- Locators
- Page actions
- Reusable methods

#### `step_definitions/`
Contains step definition files such as:

- `login.js`
- `fund_request.js`
- `customer_onboarding.js`

These map the `.feature` file steps to Cypress automation code.

### Step 11: Configure the feature file pattern

In `cypress.config.js`:

```js
specPattern: "cypress/e2e/features/*.feature"
```

This instructs Cypress to look in the `features` folder and execute `.feature` files.

### Step 12: Configure the step definition path

In `package.json`:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "step-definitions": "cypress/e2e/step_definitions"
}
```

This connects feature files to the step definitions used by Cypress.

### Step 13: Project setup is complete

At this stage, the basic Cypress + Cucumber/Gherkin setup is ready.

## Folder structure

```text
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── login.feature
│   │   ├── pages/
│   │   │   └── LoginPage.js
│   │   └── step_definitions/
│   │       └── login.js
│   ├── fixtures/
│   └── support/
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```

## Example feature file

```gherkin
Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter a valid username and password
    And I click the login button
    Then I should be redirected to the dashboard
```

## Automation flow

```text
Feature File
   ↓
Gherkin Scenario
   ↓
Step Definitions
   ↓
Page Objects
   ↓
Cypress Commands
   ↓
Application Under Test
```

This structure keeps the framework organized, reusable, maintainable, and easy to understand.

## Setup checklist

Before starting test-case development, make sure you have completed the following:

- [ ] Node.js installed
- [ ] npm installed
- [ ] Node.js project initialized
- [ ] Cypress installed
- [ ] Cypress successfully opened
- [ ] Cucumber/Gherkin extension installed
- [ ] Cucumber preprocessor installed
- [ ] `cypress.config.js` configured
- [ ] `package.json` configured
- [ ] `features` folder created
- [ ] `pages` folder created
- [ ] `step_definitions` folder created
- [ ] Feature file pattern configured
- [ ] Step-definition path configured

## Next step

Project setup is complete. The next step is to write your first feature file, create the corresponding step definitions, and implement the page object model with Cypress.

---

This README was formatted for GitHub and project readability.



