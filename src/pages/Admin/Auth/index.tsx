import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import AuthComponent from "../../../components/Admin/Auth";
import { RootState } from "../../../types/user";

const Auth = () => {
  return <AuthComponent />;
};

export default Auth;
