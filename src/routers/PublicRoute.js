import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Header from '../components/Header'

const PublicRoute = ({ component : Component, ...rest }) => ( <Route {...rest} component={(props) => ( <Component {...props} /> )}/> )

export default PublicRoute