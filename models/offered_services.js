module.exports = (sequelize, DataTypes) => {
  const OfferedService = sequelize.define('OfferedService', {
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    is_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    requested_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    num_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

 OfferedService.associate = (models) => {
    models.OfferedService.belongsTo(models.User);
    models.OfferedService.belongsTo(models.Service);
  }

  return OfferedService;
};
