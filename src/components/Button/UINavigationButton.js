import { Button } from '@mui/material'
import React from 'react'

const UINavigationButton = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>
}

export default UINavigationButton
