import { useState } from 'react'




import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Componte/Layout'
import Home from './Componte/Home'
import Portfolio from './Componte/Portfolio'
import Contact from './Componte/Contact'
import About from './Componte/About'





function App() {
 

  let routes = createBrowserRouter([
    {path:'/' ,element:<Layout></Layout> , children:[
      {index:true , element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/about' , element:<About></About>},
      {path:'/portfolio' , element:<Portfolio></Portfolio>},
      {path:'/contact' , element:<Contact></Contact>}
     
    ]}
  ])
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
