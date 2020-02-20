import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function CollegePrivateRoute({
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
        (email === 'pharmacy.college@gmail.com' ||
          email === 'crs.college@gmail.com') ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
}
