import { classnames } from "@story-squad/react-utils";
import React, { useState } from "react";
import { ICustomInput } from "./Input.model";

const Input = ({
  iconLeft,
  iconRight,
  variant,
  type,
  placeholder,
}: React.PropsWithChildren<ICustomInput>): React.ReactElement => {
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
        type={type}
        placeholder={placeholder}
      />
      {iconRight}
    </div>
  );
};

export default Input;
