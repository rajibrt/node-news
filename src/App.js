import './App.css'
import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routers/Routes/Routes'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
