import React, { useRef, useState } from "react";
import Login from "./Login";
import styled from "styled-components";
import Sign from "./Sign";

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openLoginFunc = () => {
    setOpenLogin(!openLogin);
  };

  const openSignUpFunc = () => {
    setOpenSignUp(!openSignUp);
  };

  return (
    <div>
      <button onClick={openLoginFunc}>로그인(모달오픈)</button>
      {openLogin && (
        <Login openSignUpFunc={openSignUpFunc} openLoginFunc={openLoginFunc} />
      )}
      {openSignUp && (
        <Sign openSignUpFunc={openSignUpFunc} openLoginFunc={openLoginFunc} />
      )}
    </div>
  );
};

export default App;
