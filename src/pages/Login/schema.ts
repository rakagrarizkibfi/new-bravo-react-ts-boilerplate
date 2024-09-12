import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username must contain at least 4 character')
    .required('Username or email is required'),
  password: Yup.string()
    .min(4, 'Password must contain at least 4 characters')
    .required('Password is required'),
})

export default loginSchema
