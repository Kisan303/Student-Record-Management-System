import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/Login';
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
