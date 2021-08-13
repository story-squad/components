import { ReactNode } from "react";

type InputVariantTypes = "default" | "success" | "error" | "warning";

type InputFieldTypes =
  | "text"
  | "email"
  // | "phone"
  | "date"
  | "time"
  | "textarea";

export interface ICustomInput {
  variant?: InputVariantTypes;
  type?: InputFieldTypes;
  placeholder?: string;
  size?: "lg" | "sm";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
