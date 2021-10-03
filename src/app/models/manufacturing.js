module.exports = (sequelize, DataTypes) => {
  const Manufacturing = sequelize.define("Manufacturing", {
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
      default: 0,
      type: DataTypes.INTEGER,
    },
  });
  return Manufacturing;
};
