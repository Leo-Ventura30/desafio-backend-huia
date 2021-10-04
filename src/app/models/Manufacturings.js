module.exports = (sequelize, DataTypes) => {
  const Manufacturings = sequelize.define("Manufacturings", {
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
      default: 0,
      type: DataTypes.INTEGER,
    },
  });
  return Manufacturings;
};
