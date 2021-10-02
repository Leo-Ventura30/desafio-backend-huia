const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.defines(
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
      login: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.VIRTUAL,
      },
      password_hash: {
        allowNull: false,
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
