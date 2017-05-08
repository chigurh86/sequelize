module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [1,140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: DataTypes.FALSE,
    }
  });
  return burger;
}
