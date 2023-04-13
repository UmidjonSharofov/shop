import React, { useRef, useState } from "react";
import { Contener, Wrapper } from "./stayle";
import { useNavigate } from "react-router-dom";

export default function Singip() {
  const usernameRef = useRef();
  const userPasswordRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [isName, setName] = useState(false);
  const navigate=useNavigate()
  const login = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          usrename: usernameRef.current.value,
          Password: userPasswordRef.current.value,
        })
      );
      setLoading(false);
      navigate('/')
      window.location.reload()
    }, 2000);
  };
  const Fullname= ()=>{
    setName(!isName)
  }
  return (
    <Contener>
        <h1>Login</h1>
      <Wrapper>
        {
          isName?
        <input type="text" placeholder="Full Name"/>:""
        }
        <input
          ref={usernameRef}
          type="email"
          placeholder="Enter your username"
        />
        <input
          ref={userPasswordRef}
          type="text"
          placeholder="Enter your password"
        />
        <button onClick={login} type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <span onClick={Fullname}>{isName?'Do you already have an account? Login': 'Do you have an account? Register'}</span>
      </Wrapper>
    </Contener>
  );
}
