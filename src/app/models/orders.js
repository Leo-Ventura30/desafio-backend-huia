module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("Orders", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    id_code: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    total_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_client: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    id_business: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    id_products: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
  });

  Orders.associate = (models) => {
    Orders.belongsTo(models.Client, { foreignKey: "id_client" });
    Orders.belongsTo(models.Products, { foreignKey: "id_business" });
    Orders.belongsTo(models.Products, { foreignKey: "id_products" });
  };

  return Orders;
};
