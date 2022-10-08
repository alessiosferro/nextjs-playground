import { ComponentProps, FC } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};
