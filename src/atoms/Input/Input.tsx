import { classnames } from "@story-squad/react-utils";
import React from "react";
import { FiUser } from "react-icons/fi";
import { ICustomInput } from "./Input.model";

const Input = ({
  iconLeft,
  iconRight,
  style,
  type,
  placeholder,
}: React.PropsWithChildren<ICustomInput>): React.ReactElement => {
  return (
    <div className="input-wrapper">
      <input
        className={classnames("input", style, iconLeft ? "icon-true" : "")}
        type={type}
        placeholder={placeholder}
      />
      {(iconLeft || iconRight) && (
        <FiUser
          className={classnames(
            "icon",
            iconLeft ? "icon-left" : iconRight ? "icon-right" : ""
          )}
          size="20"
        />
      )}
    </div>
  );
};

export default Input;
