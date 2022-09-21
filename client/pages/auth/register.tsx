import React, { useState } from "react";
import { Content, Button } from "../../components/authentication/styles";
import { useForm } from "../../components/utils/forms/hooks";
import InpputForm from "../../components/utils/forms/InpputForm";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Register = () => {
  const [errors, setErrors] = useState<Object | undefined>({});
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    email: "",
    phoneNumber: "",
    userImage: "",
    address: {
      country: "",
      province: "",
      city: "",
      street: "",
    },
    password: "",
    confirmPassword: "",
  });
  function loginUserCallback() {
    console.log("tesdsfsft");
  }

  //   const [loginUser,{ loading }] = useMutation(LOGIN_USER, {
  //     update(_, { data: { login: userData } }) {
  //       //   context.login(userData);
  //       navigate("/");
  //     },
  //     onError(err) {
  //       setErrors(err.graphQLErrors[0].extensions.errors);
  //     },
  //     variables: values,
  //   });
  //   function loginUserCallback() {
  //     loginUser();
  //   }
  return (
    <Content>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Sign Up
          </h1>
          <form className="mt-6">
            <InpputForm
              htmlFor={"username"}
              label={"Username"}
              type={"text"}
              name={"username"}
              value={values.username}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"email"}
              label={"Email"}
              type={"email"}
              name={"email"}
              value={values.email}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"phoneNumber"}
              label={"Phone Number"}
              type={"text"}
              name={"phoneNumber"}
              value={values.phoneNumber}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"phoneNumber"}
              label={"Phone Number"}
              type={"text"}
              name={"phoneNumber"}
              value={values.phoneNumber}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"country"}
              label={"Country"}
              type={"text"}
              name={"country"}
              value={values.address.country}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"province"}
              label={"Province"}
              type={"text"}
              name={"province"}
              value={values.address.province}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"city"}
              label={"City"}
              type={"text"}
              name={"city"}
              value={values.address.city}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"street"}
              label={"Street"}
              type={"text"}
              name={"street"}
              value={values.address.street}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"password"}
              label={"Password"}
              type={"password"}
              name={"password"}
              value={values.password}
              onChange={onChange}
            />
            <InpputForm
              htmlFor={"password"}
              label={"Password Confirm"}
              type={"password"}
              name={"confirmPassword"}
              value={values.confirmPassword}
              onChange={onChange}
            />
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-800">
            Do you have an account?{" "}
            <Link href="/auth/login">
              <a className="font-medium text-blue-400 hover:underline">
                Sign in
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Content>
  );
};

// const LOGIN_USER = gql`
//   mutation login($username: String!, $password: String!) {
//     login(username: $username, password: $password) {
//       id
//       email
//       username
//       createdAt
//       token
//     }
//   }
// `;

export default Register;
