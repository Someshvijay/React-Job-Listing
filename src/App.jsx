import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element = {<Homepage/>}/>
    <Route path='/jobs' element = {<JobsPage/>}/>
    <Route path='/jobs/:id' element = {<JobPage/>} loader={jobLoader}/>
    <Route path='/add-job' element = {<AddJobPage />} />
    <Route path='*' element = {<NotFoundPage/>}/>
  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}


export default App