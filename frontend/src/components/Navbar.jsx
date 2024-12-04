import { NavLink } from "react-router-dom";
import logo from '../project-logo.png';
export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sign in
                    </a>
                    <ul class="dropdown-menu">
                    <li><NavLink to="/admin-login">Admin</NavLink></li>
                    <li><NavLink to="/staff-login">Faculty Staff</NavLink></li>
                    <li><NavLink to="/student-login">Student</NavLink></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about-us">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact-us">Contact Us</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  );
}