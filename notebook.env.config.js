const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 900,
    viewportWidth: 1440,
  },
});
