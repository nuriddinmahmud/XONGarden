import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Repair = sequelize.define('Repair', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'repairs',
  timestamps: false, // createdAt / updatedAt kerak bo‘lmasa
});

export default Repair;
