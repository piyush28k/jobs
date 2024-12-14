import React from 'react'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Explore from './components/Explore.jsx'
import ReactDOM from 'react-dom/client'
import JobDetail from './components/JobDetail.jsx'
import Profile from './components/Profile.jsx'
import Blog from './components/Blog.jsx'
import AuthProvider from './context/AuthProvider.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Explore' element={<Explore/>}/>
      <Route path='Blog' element={<Blog/>}/>
      <Route path='Profile' element={<Profile/>}/>
      <Route path='Explore/job/:id' element={<JobDetail/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)