import react, { ChangeEvent } from "react";

export interface InputForm {
  htmlFor: string;
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
