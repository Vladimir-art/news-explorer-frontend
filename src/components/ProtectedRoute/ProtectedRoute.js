/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  !props.loggedIn && props.openLogin(); // если попытается попасть на страницу «Сохранённые статьи» — открывается модальное окно авторизации
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  )
}

export default ProtectedRoute;
