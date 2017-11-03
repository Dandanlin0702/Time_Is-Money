module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

 Category.associate = (models) => {
    models.Category.hasMany(models.SubCategory);
  }

  return Category;
};
