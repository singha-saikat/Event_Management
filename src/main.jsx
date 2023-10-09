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
import Login from './Pages/Login';
import AuthProvider from './Components/Provider/AuthProvider';
import Register from './Components/Register';
import Services from './Components/Our services/Services';
import EventDetails from './Components/EventDetails';
import PrivateRoutes from './Components/PrivateRoutes';
import ReviewsPage from './Pages/Review/ ReviewsPage';




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
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/review",
        element:<ReviewsPage></ReviewsPage>
      },
      {
        path:"/services",
        element: <Services></Services>,
        loader: () => fetch('public/Services.json')
      },
      {
        path:"/services/:id",
        element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
        // loader: () => fetch('public/Services.json')
      },
      
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
