import React from "react";
import { Inputfield, Label } from "../../atoms";
import { ICustomInputProps } from "../../atoms/InputField";
import { ICustomLabelProps } from "../../atoms/InputLabel";
import "./input.scss";

const Input = (
  props: React.PropsWithChildren<ICustomInputProps & ICustomLabelProps>
): React.ReactElement => {
  return (
    <div>
      <Label {...props} />
      <Inputfield {...props} />
      <div className="message">
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Input;
