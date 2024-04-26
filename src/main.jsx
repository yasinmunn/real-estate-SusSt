import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import EstateDetails from './components/EstateDetails/EstateDetails.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';
import EditProfile from './components/EditProfile/EditProfile.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Projects from './components/Projects/Projects.jsx';
import Leaflet from './components/Leaflet/Leaflet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/project',
        element: <PrivateRoute><Projects></Projects></PrivateRoute>
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('EstateDetail.json')
      },
      {
        path: '/leaflet',
        element: <Leaflet></Leaflet>
      }
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
