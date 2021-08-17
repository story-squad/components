import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { ICustomLabelProps } from "./InputLabel.model";
const Label = ({
  value,
  toolTip,
  labelType,
}: React.PropsWithChildren<ICustomLabelProps>): React.ReactElement => {
  return (
    <label className="label">
      <span className="require">{labelType === "required" && "*"}</span>
      {value} {toolTip ? <FiHelpCircle className="optional" /> : ""}
      <span className="optional">{labelType === "optional" && "(optional)"}</span>
    </label>
  );
};

export default Label;
