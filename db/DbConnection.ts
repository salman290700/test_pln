import mysql from 'mysql2/promise'
import { GetDBSettings } from "./db";

const dbSettings = GetDBSettings();
const Pool = mysql.createPool({
  host: dbSettings.host,
  user: dbSettings.user,
  password: dbSettings.password,
  database: dbSettings.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 1000
})

export default Pool;