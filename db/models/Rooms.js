module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define("Rooms", {
    Roomnum: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
  });

  return Rooms;
};
