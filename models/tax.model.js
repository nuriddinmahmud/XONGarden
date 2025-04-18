import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Tax = sequelize.define('Tax', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amountPaid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'taxes',
  timestamps: false,
});

export default Tax;
