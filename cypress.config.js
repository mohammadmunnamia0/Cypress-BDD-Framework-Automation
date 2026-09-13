// const { defineConfig } = require("cypress");
// const cucumber = require('@badeball/cypress-cucumber-preprocessor').default

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/features/*.feature',
//     setupNodeEvents(on, config) {
//        on('file:preprocessor', cucumber())
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",

    async setupNodeEvents(on, config) {
      // Register Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Register ESBuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});