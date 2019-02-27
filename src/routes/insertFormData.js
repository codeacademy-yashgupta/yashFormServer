const Model = require('./../../models');

module.exports = [{
  path: '/formdata',
  method: 'POST',
  handler: async (req, h) => {
    await Model.form.insertFormData(req.payload.formData, req.payload.id);
    return h.response('Successfully submitted form').code(200);
  },
}];
