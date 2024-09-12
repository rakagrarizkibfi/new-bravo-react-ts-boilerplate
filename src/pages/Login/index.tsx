import { memo } from 'react'

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Formik, Form, Field } from 'formik'

import { BfiLogoLarge } from '~/assets/png'
import CustomTextField from '~/components/Form/CustomTextField'

import useCustom from './hooks'
import loginSchema from './schema'
import useStyle from './style'

const Login = () => {
  const { data, methods } = useCustom()
  const { classes } = useStyle()

  return (
    <Box className={`${classes.container} ${classes.background}`}>
      <Box height='100vh' className={classes.formContainer}>
        <Box mb={6} data-testid='box-logo'>
          <img className={classes.logo} src={BfiLogoLarge} alt='landing' />
        </Box>
        <Box data-testid='box-card' minWidth='25%' className={classes.whiteCardBox}>
          <Box className={classes.title} data-testid='box-title'>
            Welcome to BFI Approver Platform
          </Box>
          <Box className={classes.subTitle} data-testid='box-subtile'>
            Enter your credentials to access your account.
          </Box>

          {data.error && (
            <Box className={classes.errorMessage} data-testid='box-login-error-message'>
              <span className={classes.errorTitle}>Login failed:</span>
              <span>Invalid username or password.</span>
            </Box>
          )}

          <Formik
            initialValues={{
              username: '',
              password: '',
              keepSignIn: false,
            }}
            validationSchema={loginSchema}
            onSubmit={methods.handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box className={classes.formSection}>
                  <Field
                    data-testid='input-username'
                    data-testid-helpertext='error-username'
                    name='username'
                    type='text'
                    placeholder='Enter your email'
                    component={CustomTextField}
                    InputProps={{
                      startAdornment: <EmailIcon className={classes.iconStyle} />,
                    }}
                  />
                  <Field
                    data-testid='input-password'
                    data-testid-helpertext='error-password'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    component={CustomTextField}
                    InputProps={{
                      startAdornment: <LockIcon className={classes.iconStyle} />,
                    }}
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
              </Form>
            )}
          </Formik>
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
  )
}

export default memo(Login)
