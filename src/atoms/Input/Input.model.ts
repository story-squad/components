import { ReactNode } from "react";

type InputStyleTypes = "default";

type InputFieldTypes =
  | "text"
  | "email"
  // | "phone"
  | "date"
  | "time"
  | "textarea";

export interface ICustomInput {
  style?: InputStyleTypes;
  type?: InputFieldTypes;
  placeholder?: string;
  size?: "lg" | "sm";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
