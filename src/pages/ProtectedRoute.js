import React from 'react'
import { getToken, isLoggedIn } from '../apis/Auth'
import pathLocations from '../utils/pathLocations'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn2 = isLoggedIn()
  const token = getToken()

  return isLoggedIn2 ? <Component /> : <Navigate to={'/login'} />
}

export default ProtectedRoute
