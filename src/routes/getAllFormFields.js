const Model = require('./../../models');

module.exports = [{
  path: '/formfields/{id}',
  method: 'GET',
  handler: async (req, h) => Model.form.getAllFormField(req.params.id),
}];
