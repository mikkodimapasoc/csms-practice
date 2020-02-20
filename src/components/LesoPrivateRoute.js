import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function LesoPrivateRoute({
  component: Component,
  authenticated,
  currentUser,
  email,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true &&
        (email === 'mikko.dimapasoc@gmail.com' ||
          email === 'admin-leso@gmail.com') ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
}
