import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'staging', 'production'),
  AWS_COGNITO_USER_POOL_ID: Joi.string().required(),
  AWS_COGNITO_CLIENT_ID: Joi.string().required(),
});
