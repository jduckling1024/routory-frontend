import ProfileCard from "components/accounts/my-page/ProfileCard";
import SignIn from "components/accounts/sign-in/SignIn";
import SignUp from "components/accounts/sign-up/SignUp";
import PostMain from "components/posts/PostMain";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/main" element={<PostMain />} />
        <Route path="/profile" element={<ProfileCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;