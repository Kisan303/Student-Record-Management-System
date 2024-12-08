import logo from '../project-logo.png';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sign in
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="admin-login">Admin</a></li>
                            <li><a className="dropdown-item" href="staff-login">Faculty Staff</a></li>
                            <li><a className="dropdown-item" href="student-login">Student</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}