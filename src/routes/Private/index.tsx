import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }
  return null;
};

export default PrivateRoute;
