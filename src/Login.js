import React, { useState } from "react";
import styled from "styled-components";

const Outside = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inside = styled.div`
  background-color: white;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputStyle = styled.input`
  width: 60%;
  border: none;
  border-bottom: 0.5px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonStyle = styled.button`
  width: 80%;
  background-color: gray;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 8px;
  margin-top: 3px;
`;

const TextName = styled.p`
  color: red;
  text-align: left;
`;

const Login = ({ openLoginFunc, openSignUpFunc }) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Outside>
      <button onClick={openLoginFunc}>닫기</button>
      <Inside>
        <img src="../image/LOGO.png"></img>
        <TextName>이메일 주소</TextName>
        <InputStyle
          placeholder="이메일주소"
          value={title}
          onChange={onChangeTitle}
        />
        <TextName>비밀번호</TextName>
        <InputStyle
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />

        <ButtonGroup>
          <ButtonStyle>로그인</ButtonStyle>
          <ButtonStyle
            onClick={() => {
              openLoginFunc();
              openSignUpFunc();
            }}
          >
            {" "}
            회원가입
          </ButtonStyle>
        </ButtonGroup>
      </Inside>
    </Outside>
  );
};

export default Login;
