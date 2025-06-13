import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
configDotenv()

export const DataBaseQuery = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

async function testConnection(){
  try {
    await DataBaseQuery.authenticate();
    await DataBaseQuery.sync()
    console.log('Успешное подключение к базе данных!');
  } catch (error) {
    console.error('При подключении базы данных произошла ошибка!', error);
  }
}

testConnection();