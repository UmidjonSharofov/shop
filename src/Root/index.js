import React from "react";
import Navbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { navbar } from "../Components/ulits";
import Error from "../Components/error/index.jsx";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          {navbar.map((v) => (
            <Route key={v.id} path={v.path} element={v.element} />
          ))}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Root;
