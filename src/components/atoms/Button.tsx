import { ComponentProps, FC } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};
