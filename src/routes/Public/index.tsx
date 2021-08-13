import React from "react";
import { Route } from "react-router-dom";

const PublicRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
