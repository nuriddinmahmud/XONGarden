import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 
const Worker = sequelize.define('Worker', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  workerCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  salaryPerOne: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  totalSalary: {
    type: DataTypes.NUMBER,
    allowNull: true,
    validate: {
      min: 0.01,
    },
  },
}, {
  tableName: 'workers',
  timestamps: false,
});

export default Worker;
