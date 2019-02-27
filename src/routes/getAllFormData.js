const Model = require('./../../models');

module.exports = [{
  path: '/formdata/{id}',
  method: 'GET',
  handler: async (req, h) => Model.form.getAllFormData(req.params.id),
}];
