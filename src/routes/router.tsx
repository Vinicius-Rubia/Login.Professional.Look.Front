import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { SignIn } from "@/pages/sign-in";
import { Test } from "@/pages/test";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
