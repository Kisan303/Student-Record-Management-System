import logo from '../project-logo.png';

import { useState } from 'react';

export default function Navbar() {
    const [userFirstName, setUserFirstName] = useState("<User's First Name>")
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
                <p>Hi {userFirstName}!</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav d-flex ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Log Out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}