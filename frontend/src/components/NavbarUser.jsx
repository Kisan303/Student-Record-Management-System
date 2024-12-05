import logo from '../project-logo.png';

import { useState } from 'react';

export default function Navbar() {
    const [userFirstName, setUserFirstName] = useState("<User's First Name>")
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
                <p>Hi {userFirstName}!</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav d-flex ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Log Out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}