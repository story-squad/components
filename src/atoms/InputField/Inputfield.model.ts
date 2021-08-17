import { ReactNode } from "react";

type InputVariantTypes = "default" | "success" | "error" | "warning";

type InputFieldTypes =
  | "text"
  | "email"
  // | "phone"
  | "date"
  | "time"
  | "textarea";

export interface ICustomInputProps {
  variant?: InputVariantTypes;
  inputType?: InputFieldTypes;
  placeholder?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
