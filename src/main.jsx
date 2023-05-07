import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllUsers from './components/AllUsers.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import Main from './layout/Main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/all_users',
        element: <AllUsers></AllUsers>,
        loader: () => fetch("http://localhost:5000/users")
    
      },
      {
        path: '/update_details/:id',
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
