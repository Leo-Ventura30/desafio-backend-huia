module.exports = (sequelize, DataTypes) => {
  const Manufacturing = sequelize.defines("Manufacturing", {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    id_code: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity_products: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
  return Manufacturing;
};
