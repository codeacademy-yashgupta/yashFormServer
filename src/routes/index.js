const pingRoute = require('./ping');
const getAllForms = require('./getAllForms');
const insertNewForm = require('./insertNewForm');
const formFields = require('./getAllFormFields');
const insertFormData = require('./insertFormData');

module.exports = [
  ...pingRoute,
  ...getAllForms,
  ...insertNewForm,
  ...formFields,
  ...insertFormData,
];
