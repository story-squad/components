import React from "react";
import { Inputfield, Label } from "../../atoms";
import { ICustomInput } from "../../atoms/InputField";

const Input = ({
  ...props
}: React.PropsWithChildren<ICustomInput>): React.ReactElement => {
  return (
    <div>
      <Label />
      <Inputfield {...props} />
    </div>
  );
};

export default Input;
