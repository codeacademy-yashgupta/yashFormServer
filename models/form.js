module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('form', {
    formId: DataTypes.INTEGER,
    formName: DataTypes.STRING,
    formFields: DataTypes.JSONB,
    formData: DataTypes.JSONB,
  }, {});
  form.generate = (formId, formName, formFields, formData) => form.findOrCreate({
    where: {
      formId,
      formName,
      formFields,
      formData,
    },
  }).then(() => (form)).catch((err) => {
    console.log(err);
  });
  form.getAllForms = () => form.findAll();

  return form;
};
