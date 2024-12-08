import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import User from './User';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import StaffRerport from './components/StaffReport';
import StudentReport from './components/StudentReport';
import CourseReport from './components/CourseReport';
import CourseForm from './components/CourseForm';
import StaffDashboard from './components/StaffDashboard';
import StudentDashboard from './components/StudentDashboard';
import reportWebVitals from './reportWebVitals';
import StaffReport from './components/StaffReport';

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
    path: "/admin-dashboard/:id",
    element: <User />,
    children: [
      {
        path: "/admin-dashboard/:id",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/course-report",
    element: <User />,
    children: [
      {
        path: "/course-report",
        element: <CourseReport />,
      },
    ],
  },
  {
    path: "/create-course",
    element: <User />,
    children: [
      {
        path: "/create-course",
        element: <CourseForm />,
      },
    ],
  },
  {
    path: "/update-course",
    element: <User />,
    children: [
      {
        path: "/update-course",
        element: <CourseForm />,
      },
    ],
  },
  {
    path: "/staff-report",
    element: <User />,
    children: [
      {
        path: "/staff-report",
        element: <StaffReport />,
      },
    ],
  },
  {
    path: "/student-report",
    element: <User />,
    children: [
      {
        path: "/student-report",
        element: <StudentReport />,
      },
    ],
  },
  {
    path: "/staff-dashboard/:id",
    element: <User />,
    children: [
      {
        path: "/staff-dashboard/:id",
        element: <StaffDashboard />
      },
    ],
  },
  {
    path: "/student-dashboard/:id",
    element: <User />,
    children: [
      {
        path: "/student-dashboard/:id",
        element: <StudentDashboard />,
      },
    ],
  },
  {
    path: "/register",
    element: <User />,
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
