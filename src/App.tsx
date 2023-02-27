import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


import { Router } from './Router'


export function App() {

  return (
      <BrowserRouter> 
        <Router />
        <ToastContainer />
      </BrowserRouter> 
  )
}


