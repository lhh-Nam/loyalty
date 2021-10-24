import Star from "@component/icons/Star";
import {
  Box,
  OutlinedTextFieldProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Style from "@styles/components/CustomSelect.module.scss";
import { FC } from "react";

const TextFieldStyled = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(() => ({
  "& .MuiOutlinedInput-root": {
    //borderRadius: "10px",
    backgroundColor: "#FAFAFA",
  },
}));

interface TextFieldCustomProps extends OutlinedTextFieldProps {
  label?: string;
  required?: boolean;
  endAdor?: JSX.Element;
}

const TextFieldCustom: FC<TextFieldCustomProps> = ({
  label,
  required = false,
  endAdor,
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

      <TextFieldStyled
        fullWidth
        {...rest}
        InputProps={{
          endAdornment: <div>{endAdor}</div>,
        }}
      />
    </div>
  );
};

export default TextFieldCustom;
