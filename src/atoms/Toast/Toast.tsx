import { classnames } from "@story-squad/react-utils";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiAlertCircle, FiX, FiXCircle } from "react-icons/fi";
import { ToastProps } from "react-toast-notifications";
import "./toast.scss";
import ToastTitle from "./ToastTitle";

const Toast = ({ appearance, children }: ToastProps): React.ReactElement => {
  return (
    <div className={classnames("toast", appearance)}>
      <div className="text-wrapper">
        <div className="icon-title-container">
          {appearance === "success" ? (
            <FaRegCheckCircle size={20} />
          ) : appearance === "error" ? (
            <FiXCircle size={20} />
          ) : (
            <FiAlertCircle size={20} />
          )}
          <ToastTitle appearance={appearance} />
        </div>
        <p className="message">{children}</p>
      </div>
      <FiX size={14} color="#878888" />
    </div>
  );
};

export default Toast;
