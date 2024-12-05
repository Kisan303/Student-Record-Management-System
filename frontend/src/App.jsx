import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="col-12 bg-primary-subtle text-primary-emphasis vh-100">
        <Outlet />
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
      <Footer />
    </div>
  );
}

export default App;