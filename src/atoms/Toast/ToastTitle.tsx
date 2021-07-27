import React from "react";
import { ToastProps } from "react-toast-notifications";

const ToastTitle = ({ appearance }: Pick<ToastProps, "appearance">) => {
  return (
    <div className="title">
      {appearance}
    </div>
  );
};

export default ToastTitle;
