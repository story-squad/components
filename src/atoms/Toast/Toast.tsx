import { classnames } from "@story-squad/react-utils";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ToastProps } from "react-toast-notifications";
import "./toast.scss";
import ToastTitle from "./ToastTitle";

const Toast = ({ appearance, children }: ToastProps): React.ReactElement => {
  return (
    <div className={classnames("toast", appearance)}>
      <FaRegCheckCircle />
      <div className="text-wrapper">
        <ToastTitle appearance={appearance} />
        <p className="message">{children}</p>
      </div>
    </div>
  );
};

export default Toast;
