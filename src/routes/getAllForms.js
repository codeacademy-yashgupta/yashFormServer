const Model = require('./../../models');

module.exports = [{
  path: '/forms',
  method: 'GET',
  handler: async (req, h) => Model.form.getAllForms(),
}];
