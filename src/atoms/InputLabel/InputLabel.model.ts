type LabelType = "default" | "required" | "optional";

export interface ICustomLabelProps {
  label?: string;
  labelType?: LabelType;
  toolTip?: boolean;
}
