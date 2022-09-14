import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
