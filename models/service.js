module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Service.associate = (models) => {
    models.Service.belongsTo(models.User);
    models.Service.belongsTo(models.SubCategory);
    models.Service.hasMany(models.RequestedService);
  }

  return Service;
};
