import { z, ZodType } from 'zod';

import { LoginFormData } from './types';

const loginSchema: ZodType<LoginFormData> = z.object({
  username: z
    .string({
      required_error: 'Username or email is required',
    })
    .min(4, 'Username must contain at least 4 character'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(4, 'Password must contain at least 4 characters'),
});

export default loginSchema;
