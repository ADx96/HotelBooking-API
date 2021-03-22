module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    hotelname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customername: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    Date: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    customerpassportnumber: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    hotellocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Roomnum: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
  });

  return Booking;
};
