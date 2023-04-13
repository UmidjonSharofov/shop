import React, { useRef, useState } from "react";

export default function Singip() {
  const usernameRef = useRef();
  const userPasswordRef = useRef();
  const [isLoading, setLoading] = useState(false);
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

    }, 2000);
  };
  return (
    <div>
      <input ref={usernameRef} type="email" placeholder="Enter your username" />
      <input
        ref={userPasswordRef}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={login} type="submit">
        {isLoading?'Loading':'Login'}
      </button>
    </div>
  );
}
