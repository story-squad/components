import React from "react";
import { ICustomToastProps } from "./Toast.model";

const Toast = ({
  children,
  ...props
}: React.PropsWithChildren<ICustomToastProps>): React.ReactElement => {
  return <div {...props}>{children}</div>;
};

export default Toast;
