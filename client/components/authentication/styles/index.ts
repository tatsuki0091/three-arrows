import styled from "styled-components";

export const Content = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../img/logo.jpeg");
  background-repeat: no-repeat; /* 画像の繰り返しを指定  */
  background-position: center center; /* 画像の表示位置を指定  */
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
