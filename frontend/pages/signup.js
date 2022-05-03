import React from "react";
import Auth from "../components/main/Auth";
import { APP_CONSTANT } from "../components/constant/app_constant";

const Signup = () => {
  return <Auth name={APP_CONSTANT.signup} redirect={APP_CONSTANT.login} />;
};

export default Signup;
