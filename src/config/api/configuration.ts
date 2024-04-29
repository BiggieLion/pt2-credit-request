import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  env: process.env.ENV || 'LOCAL',
  node_env: process.env.NODE_ENV || 'development',
  stage: process.env.STAGE || 'v1',
  level: process.env.LOG_LEVEL || 'debug',
  custom_domain: process.env.CUSTOM_DOMAIN || false,
}));
