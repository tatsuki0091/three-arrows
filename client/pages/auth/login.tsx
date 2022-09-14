import React, { useState } from "react";
import { Content, Button } from "../../components/authentication/styles/form";
import { useForm } from "../../components/utils/forms/hooks";
import InpputForm from "../../components/utils/forms/InpputForm";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Login = () => {
  const [errors, setErrors] = useState<Object | undefined>({});
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
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
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
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
              htmlFor={"password"}
              label={"Password"}
              type={"password"}
              name={"password"}
              value={values.password}
              onChange={onChange}
            />
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
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

export default Login;
