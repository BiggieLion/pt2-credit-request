import { registerAs } from '@nestjs/config';

export default registerAs('ssm', () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  ssmEndpoint: process.env.SSM_ENDPOINT,
  region: process.env.AWS_REGION,
}));
