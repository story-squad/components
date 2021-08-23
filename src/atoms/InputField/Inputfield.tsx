import { classnames } from "@story-squad/react-utils";
import React, { useState } from "react";
import { ICustomInputProps } from "./InputField.model";
import "./inputField.scss";

const Inputfield = ({
  iconLeft,
  iconRight,
  variant,
  inputType,
  placeholder,
}: React.PropsWithChildren<ICustomInputProps>): React.ReactElement => {
  const [isFocused, setFocused] = useState(false);
  const [isHover, setHover] = useState(false);

  const focus = () => setFocused(true);
  const unfocus = () => setFocused(false);
  const hover = () => setHover(true);
  const unhover = () => setHover(false);

  return (
    <div
      onMouseEnter={hover}
      onMouseLeave={unhover}
      className={classnames(
        "input-wrapper",
        variant,
        isHover && "hover",
        isFocused && "focus"
      )}
    >
      {iconLeft}
      <input
        className="input"
        onFocus={focus}
        onBlur={unfocus}
        type={inputType}
        placeholder={placeholder}
      />
      {iconRight}
    </div>
  );
};

export default Inputfield;
