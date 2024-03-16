export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const isLoggedIn = () => {
  const token = getToken('token')
  if (!token) {
    return false
  } else {
    return true
  }
}
