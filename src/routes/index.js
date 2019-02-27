const pingRoute = require('./ping');
const getAllForms = require('./getAllForms');

module.exports = [
  ...pingRoute,
  ...getAllForms,
];
