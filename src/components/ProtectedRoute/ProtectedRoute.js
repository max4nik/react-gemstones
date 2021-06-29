import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component,
  path,
  exact = false,
  redirect = null,
}) => {
  let isLogged = false;
  const username = localStorage.getItem("email-local");
  const password = localStorage.getItem("password-local");
  if (username != null && password != null) {
    isLogged = true;
  }

  return (
    <Route path={path} exact={exact}>
      {isLogged ? component : redirect ? redirect : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
