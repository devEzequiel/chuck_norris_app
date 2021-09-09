import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";
import { InputContainer, InputField, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputField ref={inputRef} name={name} {...rest} autoComplete="on" />
      {error && <span className="input-error">{error}</span>}
    </InputContainer>
  );
};

export default Input;
