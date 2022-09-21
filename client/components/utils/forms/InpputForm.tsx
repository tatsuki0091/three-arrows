import React from "react";
import { InputForm } from "../../../types/authentication";

const InpputForm = ({
  htmlFor,
  label,
  type,
  name,
  value,
  onChange,
}: InputForm) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-gray-800"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default InpputForm;
