import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin-login",
    element: <App />,
    children: [
      {
        path: "/admin-login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/staff-login",
    element: <App />,
    children: [
      {
        path: "/staff-login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/student-login",
    element: <App />,
    children: [
      {
        path: "/student-login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <App />,
    children: [
      {
        path: "/admin-dashboard",
        element: <Register />,
      },
    ],
  },
  {
    path: "/staff-dashboard",
    element: <App />,
    children: [
      {
        path: "/staff-dashboard",
        element: <Register />,
      },
    ],
  },
  {
    path: "/student-dashboard",
    element: <App />,
    children: [
      {
        path: "/student-dashboard",
        element: <Register />,
      },
    ],
  },
  {
    path: "/register",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
