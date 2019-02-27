const Model = require('./../../models');

module.exports = [{
  path: '/form',
  method: 'POST',
  handler: async (req, h) => {
    const timeStamp = new Date().getTime().toString().slice(-8);
    await Model.form.generate(timeStamp, req.payload.formName, req.payload.formFields, {});
    return h.response('Successfully created a new form').code(201);
  },
}];
