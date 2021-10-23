import Star from '@component/icons/Star'
import {
  Box,
  OutlinedInputProps,
  OutlinedTextFieldProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Style from '@styles/common/CustomSelect.module.scss'
import { FC } from 'react'

const TextFieldStyled = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#FAFAFA',
  },
}))

interface TextFieldCustomProps extends OutlinedTextFieldProps {
  label?: string
  required?: boolean
}

const TextFieldCustom: FC<TextFieldCustomProps> = ({
  label,
  required = false,
  ...rest
}) => {
  return (
    <div className={Style.container}>
      {label && (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typography variant="body1" className={Style.title}>
            {label}
          </Typography>
          {required && <Star />}
        </Box>
      )}

      <TextFieldStyled fullWidth {...rest} />
    </div>
  )
}

export default TextFieldCustom
