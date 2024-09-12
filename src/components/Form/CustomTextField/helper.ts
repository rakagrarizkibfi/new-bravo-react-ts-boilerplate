import { TextFieldProps } from '@mui/material/TextField'
import { FieldProps, getIn } from 'formik'

export interface BaseProps extends FieldProps, Omit<TextFieldProps, 'name' | 'value' | 'error'> {}

export const fieldToTextField = ({
  disabled,
  variant = 'outlined',
  field,
  form,
  onBlur,
  helperText,
  ...props
}: BaseProps) => {
  const fieldError = getIn(form.errors, field.name)
  const showError = getIn(form.touched, field.name) && !!fieldError

  return {
    variant,
    error: showError,
    helperText: showError ? fieldError : helperText,
    disabled: disabled ?? form?.isSubmitting,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onBlur:
      onBlur ??
      // eslint-disable-next-line func-names
      function (e) {
        field.onBlur(e ?? field.name)
      },
    ...field,
    ...props,
  }
}
