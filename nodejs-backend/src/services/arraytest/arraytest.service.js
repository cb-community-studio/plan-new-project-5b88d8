const { Arraytest } = require('./arraytest.class');
const createModel = require('../../models/arraytest.model');
const hooks = require('./arraytest.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/arraytest', new Arraytest(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('arraytest');

  service.hooks(hooks);
};