import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { ICustomLabelProps } from "./InputLabel.model";
const Label = ({
  value = "INPUT LABEL",
  toolTip,
  type,
}: React.PropsWithChildren<ICustomLabelProps>): React.ReactElement => {
  return (
    <label className="label">
      <span className="require">{type === "required" && "*"}</span>
      {value} {toolTip ? <FiHelpCircle className="optional" /> : ""}
      <span className="optional">{type === "optional" && "(optional)"}</span>
    </label>
  );
};

export default Label;
