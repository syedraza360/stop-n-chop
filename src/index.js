import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@emotion/react'
import { appTheme } from './theme'
import 'react-phone-input-2/lib/material.css'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

serviceWorkerRegistration.unregister()

reportWebVitals()
