interface IInput {
  name: string;
  value?: string;
  type: "text" | "tel" | "email";
  label: string;
  status?: "success" | "error";
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export type { IInput };
