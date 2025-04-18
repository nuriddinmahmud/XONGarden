import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function connectDB() {
  try {
    await sequelize.sync({ force: true });
<<<<<<< HEAD
    console.log("Database successfully.");
=======
    console.log("Database connection has been established successfully.");
>>>>>>> 7cb734d7b6540f7b93b971e2d4b5964c72751fc5

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

connectDB();