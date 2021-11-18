<<<<<<< HEAD
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        return getToken() ? <Component {...props} />
        : <Redirect to={{ pathname: '/login'}} />
      }}
    />
  )
}

=======
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        return getToken() ? <Component {...props} />
        : <Redirect to={{ pathname: '/login'}} />
      }}
    />
  )
}

>>>>>>> 35cffa1ee2586e0525c2ff41fc98cc3bae63fdd4
export default PrivateRoute