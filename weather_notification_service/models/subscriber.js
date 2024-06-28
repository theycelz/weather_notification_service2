const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscriber = sequelize.define('Subscriber', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Subscriber;
