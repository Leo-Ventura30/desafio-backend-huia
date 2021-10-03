const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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
      id_business: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV1,
        type: DataTypes.UUID,
      },
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Business, { foreignKey: "id_business" });
  };

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };
  return User;
};
