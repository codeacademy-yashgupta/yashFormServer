const pingRoute = require('./ping');
const getAllForms = require('./getAllForms');
const insertNewForm = require('./insertNewForm');

module.exports = [
  ...pingRoute,
  ...getAllForms,
  ...insertNewForm,
];
