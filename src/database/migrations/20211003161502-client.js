"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("client", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf_hash: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: false,
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
    return queryInterface.dropTable("client");
  },
};
