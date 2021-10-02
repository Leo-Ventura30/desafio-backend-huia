"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clients", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cpf: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clients");
  },
};
