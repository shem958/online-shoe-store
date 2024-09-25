import React from "react";
import Login from "../components/UserAccount/Login";
import Signup from "../components/UserAccount/Signup";

function UserAccountPage() {
  return (
    <div>
      <h1>User Account</h1>
      {/* Conditionally render login or signup forms based on state */}
      <Login />
      <Signup />
    </div>
  );
}

export default UserAccountPage;
