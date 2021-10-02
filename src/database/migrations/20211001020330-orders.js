"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
      },
      id_code: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      total_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      id_clients: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
        references: { model: "clients", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_business: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
        references: { model: "business", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_products: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        type: Sequelize.UUID,
        references: { model: "products", key: "id" },
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
    return queryInterface.dropTable("orders");
  },
};
