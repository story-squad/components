type LabelType = "default" | "required" | "optional";

export interface ICustomLabelProps {
  value?: string;
  labelType?: LabelType;
  toolTip?: boolean;
}
