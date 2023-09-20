const users = require("./users/users.service.js");
const arraytest = require("./arraytest/arraytest.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(arraytest);
  // ~cb-add-configure-service-name~
};
