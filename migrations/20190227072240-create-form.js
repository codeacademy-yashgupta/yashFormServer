module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('forms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    formName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    formFields: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    formData: {
      type: Sequelize.JSONB,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('forms'),
};
