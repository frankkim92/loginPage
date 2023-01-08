import React, { useEffect, useState } from "react";
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

const Sign = () => {
  const [title, setTitle] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [titleError, setTitleError] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };

  useEffect(() => {
    if (
      (title.includes("@") === false || title.includes(".com") === false) &&
      title !== ""
    ) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  }, [title]);

  return (
    <Outside>
      <Inside>
        <TextName>이메일 주소</TextName>

        <InputStyle
          style={titleError ? { borderColor: "red" } : {}}
          placeholder="이메일주소"
          value={title}
          onChange={onChangeTitle}
        />
        {titleError && (
          <span
            style={{ position: "absolute", left: 150, top: 235, color: "red" }}
          >
            이메일에러
          </span>
        )}

        <TextName>닉네임</TextName>
        <InputStyle
          placeholder="닉네임주소"
          value={nickName}
          onChange={onChangeNickName}
        />
        <TextName>비밀번호</TextName>
        <InputStyle
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <TextName>비밀번호 확인</TextName>
        <InputStyle
          type="password"
          placeholder="비밀번호"
          value={checkPassword}
          onChange={onChangeCheckPassword}
        />

        <ButtonGroup>
          <ButtonStyle> 완료</ButtonStyle>
        </ButtonGroup>
      </Inside>
    </Outside>
  );
};

export default Sign;
