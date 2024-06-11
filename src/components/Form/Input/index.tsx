import { InputHTMLAttributes, forwardRef, useId } from "react";
import {
  HelperTextStyled,
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name = "", label, helperText, ...props }, ref) => {
    const inputId = useId();

    return (
      <InputContainer>
        {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
        <StyledInput
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          {...props}
        />
        {helperText && <HelperTextStyled>{helperText}</HelperTextStyled>}
      </InputContainer>
    );
  }
);
