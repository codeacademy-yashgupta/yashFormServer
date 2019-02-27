const Model = require('../../models');

describe('generate', () => {
  beforeEach(async () => {
    await Model.form.truncate();
  });
  it('should insert form id, name, fields, data', async () => {
    await Model.form.generate(1, 'Personal Details', ['firstName', 'lastName', 'Address', 'Country'], {});
    expect(await Model.form.count()).toEqual(1);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.form.count()).toEqual(0);
  });
});

describe('getAllForms', () => {
  beforeEach(async () => {
    await Model.form.truncate();
  });
  it('should get all the entries in the table', async () => {
    const formId = 1;
    const formName = 'Personal Details';
    const formFields = ['firstName', 'lastName', 'Address', 'Country'];
    const formData = {};
    await Model.form.generate(formId, formName, formFields, formData);
    const getAllFormData = await Model.form.getAllForms();
    expect(getAllFormData[0].dataValues.formId).not.toBeFalsy();
  });
});
afterAll(() => {
  Model.form.sequelize.close();
});
