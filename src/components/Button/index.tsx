import React from "react";
import { ButtonContent } from "./styles";

interface ButtonProps {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <ButtonContent type="submit" {...rest} {...(isLoading && "disabled")}>
      {!isLoading ? children : "Loading..."}
    </ButtonContent>
  );
};

export default Button;
