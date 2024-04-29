import { registerAs } from '@nestjs/config';

export default registerAs('postgresql', () => ({
  type: process.env.TYPE,
  host: process.env.HOST,
  port: process.env.PORT_DB,
  database: process.env.DB_NAME,
  username: process.env.USER,
  password: process.env.PASS,
}));
