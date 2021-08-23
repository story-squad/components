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
  // the message is for the error message on the input
  message?: string;
}
