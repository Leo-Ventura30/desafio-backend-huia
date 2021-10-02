"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
      },
      id_code: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      id_business: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
        references: { model: "business", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_manufacturing: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
        references: { model: "manufacturing", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("products");
  },
};
