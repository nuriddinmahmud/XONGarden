import { sequelize } from "../config/database.js";

const Energy = sequelize.define(
  "Energy",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amountPaid: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0.01, 
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    tableName: "Energies",
    timestamps: false,
  }
);

export default Energy;