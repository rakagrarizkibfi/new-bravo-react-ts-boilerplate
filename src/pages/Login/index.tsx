import { Textfield, TextFieldType } from '@bfi-finance/frontend-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

import { BfiLogoLarge } from '~/assets/png';

import useCustom from './hooks';
import loginSchema from './schema';
import useStyle from './style';
import { LoginFormData } from './types';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { methods } = useCustom();
  const { classes } = useStyle();

  return (
    <Box className={`${classes.container} ${classes.background}`}>
      <Box height='100vh' className={classes.formContainer}>
        <Box mb={6} data-testid='box-logo'>
          <img className={classes.logo} src={BfiLogoLarge} alt='landing' />
        </Box>
        <Box data-testid='box-card' minWidth='25%' className={classes.whiteCardBox}>
          <Box className={classes.title} data-testid='box-title'>
            Welcome to BFI React TS Boilerplate
          </Box>
          <Box className={classes.subTitle} data-testid='box-subtile'>
            Enter your credentials to access your account.
          </Box>

          {/* 
          // ? : Error Message Form
          <Box className={classes.errorMessage} data-testid='box-login-error-message'>
            <span className={classes.errorTitle}>Login failed:</span>
            <span>Invalid username or password</span>
          </Box> */}
          <form onSubmit={handleSubmit(methods.onSubmitLogin)}>
            <Box className={classes.formSection}>
              <Textfield
                data-testid='input-username'
                type={TextFieldType.TEXT}
                placeholder='Enter your email'
                title='Email'
                required
                error={typeof errors.username?.message !== 'undefined'}
                helperText={errors.username?.message}
                {...register('username')}
              />
              <Textfield
                data-testid='input-password'
                type={TextFieldType.PASSWORD}
                placeholder='Enter your password'
                title='Password'
                required
                error={typeof errors.password?.message !== 'undefined'}
                helperText={errors.password?.message}
                {...register('password')}
              />
              <Button
                data-testid='btn-submit-login'
                variant='contained'
                color='secondary'
                className='btn-rounded'
                disabled={isSubmitting}
                type='submit'
              >
                Login
              </Button>
              <Box mt={2}>
                {/* <ButtonSSO
                      isSubmitting={isSubmitting}
                      ssoLinks={data.memoSsoLink}
                    /> */}
              </Box>
            </Box>
          </form>
        </Box>
        <Box className={classes.underTitle} mt={8}>
          <span>Forgot your password?</span>
          <span>
            <a className={classes.resetPass} href='/'>
              Reset Password
            </a>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Login);
