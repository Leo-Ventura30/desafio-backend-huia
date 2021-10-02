"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("business", {
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
      cpf_cnpj: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("business");
  },
};
