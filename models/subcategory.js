module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    subcategory_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  SubCategory.associate = (models) => {
    models.SubCategory.belongsTo(models.Category);
    models.SubCategory.hasMany(models.Service);
  }

  return SubCategory;
};
