import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Transport = sequelize.define('Transport', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  transportType: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}
, {
  tableName: 'transports',
  timestamps: false,
});

export default Transport;
