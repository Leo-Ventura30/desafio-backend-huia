module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    id_code: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    value: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    id_business: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
    id_manufacturing: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      type: DataTypes.UUID,
    },
  });
  Products.associate = (models) => {
    Products.belongsTo(models.Business, { foreignKey: "id_business" });
    Products.belongsTo(models.Manufacturings, {
      foreignKey: "id_manufacturing",
    });
  };

  return Products;
};
