import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Error from './Components/Error';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('public/Services.json')
      },
      {
        path: "/gallery",
        element:<Gallery></Gallery>,
        
      },
      
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
