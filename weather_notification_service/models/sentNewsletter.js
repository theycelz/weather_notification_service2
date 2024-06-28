const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SentNewsletter = sequelize.define('SentNewsletter', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  newsletterDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = SentNewsletter;
