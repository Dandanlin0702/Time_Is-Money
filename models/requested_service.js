module.exports = (sequelize, DataTypes) => {
  const RequestedService = sequelize.define('RequestedService', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    requested_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    num_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    }
  });

  RequestedService.associate = (models) => {
    models.RequestedService.belongsTo(models.User);
    models.RequestedService.belongsTo(models.Service);
  }

  return RequestedService;
};
