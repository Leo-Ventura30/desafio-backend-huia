const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.defines(
    "Clients",
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
      cpf: {
        allowNull: false,
        type: DataTypes.VIRTUAL,
      },
      cpf_hash: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      hooks: {
        beforeSave: async (clients) => {
          if (clients.cpf) {
            clients.cpf_hash = await bcrypt.hash(clients.cpf, 8);
          }
        },
      },
    }
  );
  Clients.prototype.checkCpf = function (cpf) {
    return bcrypt.compare(cpf, this.cpf_hash);
  };
  return Clients;
};
