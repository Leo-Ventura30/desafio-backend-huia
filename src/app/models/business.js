const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpf_cnpj: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.VIRTUAL,
      },
      password_hash: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeSave: async (business) => {
          if (business.password) {
            business.password_hash = await bcrypt.hash(business.password, 8);
          }
        },
      },
    }
  );
  Business.prototype.checkpassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };
  return Business;
};
