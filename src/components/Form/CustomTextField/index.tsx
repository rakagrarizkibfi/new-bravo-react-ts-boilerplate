import React, { memo } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { fontSize } from '~/styles/theme'

import { BaseProps, fieldToTextField } from './helper'

interface CustomTextFieldProps extends BaseProps {
  'data-testid-helpertext'?: string
  'data-testid': string
  children: React.ReactNode
  className?: string
  labelText?: string
}

const CustomTextField = ({
  'data-testid-helpertext': dataTestIdHelperText = '',
  'data-testid': dataTestId,
  children,
  className,
  labelText = '',
  ...props
}: CustomTextFieldProps) => {
  return (
    <Box mb={labelText ? 6 : 0} px={labelText ? 6 : 0}>
      {labelText && (
        <Box fontSize={fontSize[14]} mb={2}>
          {labelText}
        </Box>
      )}
      <TextField
        inputProps={{
          'data-testid': dataTestId,
        }}
        FormHelperTextProps={
          {
            'data-testid': dataTestIdHelperText,
          } as any
        }
        className={`${className} main-textfield`}
        {...fieldToTextField(props)}
      >
        {children}
      </TextField>
    </Box>
  )
}
export default memo(CustomTextField)
