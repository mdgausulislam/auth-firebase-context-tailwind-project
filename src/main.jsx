import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Register from './components/Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Order from './components/Oder/Order.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path:'/order',
      element:<PrivateRoute><Order></Order></PrivateRoute>
    },
    {
      path:'/profile',
      element:<PrivateRoute><Profile></Profile></PrivateRoute>
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
