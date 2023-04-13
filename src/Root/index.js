import React from "react";
import Navbar from "../Components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../Components/ulits";
import Errors from "../Components/error/index.jsx";
import Singip from "../Components/Singip";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(
            (v) =>
              v.isPrivate && (
                <Route key={v.id} path={v.path} element={ localStorage.getItem('token')?v.element: <Navigate to='/Singip' element={<Singip/>} />} />
              )
          )}

          {navbar.map(
            (v) =>
              !v.isPrivate && (
                <Route key={v.id} path={v.path} element={v.element} />
              )
          )}
        </Route>
        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
}

export default Root;
