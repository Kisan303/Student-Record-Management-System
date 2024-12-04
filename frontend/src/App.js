import logo from './project-logo.png';
import { useEffect, useLayoutEffect, useState } from "react";
import './App.css';

function App() {
  const [isDisplayLogin, setisDisplayLogin] = useState(true);
  const [user, setUser] = useState("");
  const toggleAdminLogin = () => {
    setisDisplayLogin(false);
    setUser("Admin");
  }
  const toggleStaffLogin = () => {
    setisDisplayLogin(false);
    setUser("Faculty Staff");
  }
  const toggleStudentLogin = () => {
    setisDisplayLogin(false);
    setUser("Student");
  }
  return (
    <div className="App">
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
                    <li><a class="dropdown-item" href="#" onClick={toggleAdminLogin}>Admin</a></li>
                    <li><a class="dropdown-item" href="#" onClick={toggleStaffLogin}>Faculty Staff</a></li>
                    <li><a class="dropdown-item" href="#" onClick={toggleStudentLogin}>Student</a></li>
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
      <div class="col-12 bg-primary-subtle text-primary-emphasis vh-100">
        <div>
          <div style={{display: isDisplayLogin ? "none" : "block"}}>      
            <div class="col-12 bg-primary-subtle text-primary-emphasis">
              <div class="row col-12">          
                <div class="col-4"></div>
                <div class="text-center col-4 border-bottom"> 
                  <h1>{user}</h1>
                </div>
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4 p-3">
                  <form>
                    <div class="row mb-3">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3"/>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"/>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-10 offset-sm-2 text-start">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                          <label class="form-check-label" for="gridCheck1">
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="btn btn-primary">Log in</a>
                  </form>
                </div>        
                <div class="col-4"></div>
              </div>
              <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
                  <h1 class="p-3">Log in as {user}</h1>
              </div>
            </div>
          </div> 
        </div>
        <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
            <h1 class="p-3">Welcome to Student Record Management System</h1>
        </div>
      </div>
      <div id="about-us" class="col-12 bg-body-tertiary text-primary-emphasis vh-100 p-5">
          <h1 class="p-3 text-center">About Us</h1>
          <div class="row col-12 p-3">
              <div class="col-1   "></div>
              <div class="col-5"></div>
              <div class="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>            
              <div class="col-1"></div>
          </div>
          <div class="row col-12 p-3">
              <div class="col-1   "></div>
              <div class="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="col-5"></div>            
              <div class="col-1"></div>
          </div>
      </div>  
      <div id="contact-us" class="bg-body-tertiary text-primary-emphasis vh-100 p-5">
        <div class="row p-3">
          <div class="col-4"></div>
          <div class="col-4">
            <form class="row g-3">            
              <div class="col-12 text-center border-bottom"> 
                <h1>Contact Us</h1>
              </div>
              <div class="col-md-12">
                  <label for="inputFirstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
              </div>
              <div class="col-md-12">
                  <label for="inputLastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"/>
              </div>
              <div class="col-md-12">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail"/>
              </div>
              <div class="col-md-12">
                <label for="inputMessage" class="form-label">Message</label>
                <textarea class="form-control vh" id="inputMessage" placeholder="Write your message here."></textarea>
              </div>
              <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div class="row col-12">
          <div class="col-8">            
              <div class="col-2 p-3 text-bg-dark"><h1>LOGO</h1></div>
          </div>
          <div class="col-4">
              <ul class="list-group list-group-flush text-primary">
                  <li class="list-group-item"><a href="#" class="text-dark text-decoration-none">Home</a></li>
                  <li class="list-group-item"><a href="/admin-login" class="text-dark text-decoration-none">Admin</a></li>
                  <li class="list-group-item"><a href="#" class="text-dark text-decoration-none">Faculty</a></li>
                  <li class="list-group-item"><a href="#" class="text-dark text-decoration-none">Student</a></li>
                  <li class="list-group-item"><a href="#about-us" class="text-dark text-decoration-none">About Us</a></li>
                  <li class="list-group-item"><p>&copy; 2024 Company Name. All Rights Reserved</p></li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
