import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main.jsx';
import Home from './component/Home/Home.jsx';
import Blog from './component/Blog/Blog.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import ChefDatails from './component/chefDetails/ChefDatails.jsx';
import PrivateRoute from './component/privateRoute/PrivateRoute.jsx';
import NotFoundPage from './component/NotFoundPage/NotFoundPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chefdetails/:chefId',
        element: <PrivateRoute><ChefDatails></ChefDatails></PrivateRoute>,
        loader: ({params}) => fetch(`https://bbq-italian-server-side-safinahmedhasan.vercel.app/allCheif/${params.chefId}`)
      },
      {
        path:'/*',
        element: <NotFoundPage></NotFoundPage>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
