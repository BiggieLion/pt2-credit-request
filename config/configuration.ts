export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'staging',
  AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID,
});
