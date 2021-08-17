import React from "react";
import { Inputfield, Label } from "../../atoms";
import { ICustomInputProps } from "../../atoms/InputField";
import { ICustomLabelProps } from "../../atoms/InputLabel";

const Input = ({
  ...props
}: React.PropsWithChildren<
  ICustomInputProps & ICustomLabelProps
>): React.ReactElement => {
  return (
    <div>
      <Label {...props} />
      <Inputfield {...props} />
    </div>
  );
};

export default Input;
