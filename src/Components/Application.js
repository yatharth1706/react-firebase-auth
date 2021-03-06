import React from 'react';
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

const Application = () => {
    const user = null;
    return(
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signup" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
    )
}

export default Application;