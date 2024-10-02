const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const app = express();

// 使用 bodyParser 來解析 POST 請求中的 JSON 資料
app.use(bodyParser.json());

// 設置 PostgreSQL 連接池
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 測試資料庫連線
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    user TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    score INT DEFAULT 0
  );
`, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table is ready');
  }
});
