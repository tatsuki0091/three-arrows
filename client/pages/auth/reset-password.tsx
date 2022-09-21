import React, { useState } from "react";
import { Content, Button } from "../../components/authentication/styles";
import { useForm } from "../../components/utils/forms/hooks";
import InpputForm from "../../components/utils/forms/InpputForm";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ResetRassword = () => {
  const [errors, setErrors] = useState<Object | undefined>({});
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });
  function loginUserCallback() {
    console.log("tesdsfsft");
  }
  return (
    <Content>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Reset Password
          </h1>
          <form className="mt-6">
            <InpputForm
              htmlFor={"email"}
              label={"Email"}
              type={"email"}
              name={"email"}
              value={values.email}
              onChange={onChange}
            />
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-purple-600">
                Reset Password
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-800">
            Back to{" "}
            <Link href="/auth/login">
              <a className="font-medium text-blue-400 hover:underline">
                Sign In
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Content>
  );
};

export default ResetRassword;
