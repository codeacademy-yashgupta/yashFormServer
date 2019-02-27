const pingRoute = require('./ping');
const getAllForms = require('./getAllForms');
const insertNewForm = require('./insertNewForm');
const formFields = require('./getAllFormFields');

module.exports = [
  ...pingRoute,
  ...getAllForms,
  ...insertNewForm,
  ...formFields,
];
