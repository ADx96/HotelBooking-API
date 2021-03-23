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
      defaultValue: 0,
      validate: {
        min: 1,
      },
    },
    mobile: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 1,
      },
    },
    Date: {
      type: DataTypes.STRING,
    },
    EndDate: {
      type: DataTypes.STRING,
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

    movienight: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Booking;
};
