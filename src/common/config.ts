import * as dotenv from 'dotenv';

dotenv.config();

// environment
const NODE_ENV = process.env.NODE_ENV || 'development';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

// application
const PORT = process.env.PORT ? +process.env.PORT : 4001;

// JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// database
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || 'your-mongo-db-connection-string';

export {
  PORT,
  NODE_ENV,
  LOG_LEVEL,
  MONGO_CONNECTION_STRING,
  JWT_SECRET,
  JWT_EXPIRES_IN
};
