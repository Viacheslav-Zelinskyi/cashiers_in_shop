require('dotenv').config();

export const DatabaseConfig = {
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'shop',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT || 5432,
};

export const port = process.env.PORT || 3000;
