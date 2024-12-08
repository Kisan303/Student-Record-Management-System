import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="col-12 bg-primary-subtle text-primary-emphasis vh-100">
        <Outlet />
      </div>
      <div id="about-us" className="col-12 bg-body-tertiary text-primary-emphasis vh-100 p-5">
          <h1 className="p-3 text-center">About Us</h1>
          <div className="row col-12 p-3">
              <div className="col-1   "></div>
              <div className="col-5"></div>
              <div className="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>            
              <div className="col-1"></div>
          </div>
          <div className="row col-12 p-3">
              <div className="col-1   "></div>
              <div className="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="col-5"></div>            
              <div className="col-1"></div>
          </div>
      </div>  
      <div id="contact-us" className="bg-body-tertiary text-primary-emphasis vh-100 p-5">
        <div className="row p-3">
          <div className="col-4"></div>
          <div className="col-4">
            <form className="row g-3">            
              <div className="col-12 text-center border-bottom"> 
                <h1>Contact Us</h1>
              </div>
              <div className="col-md-12">
                  <label for="inputFirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
              </div>
              <div className="col-md-12">
                  <label for="inputLastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
              </div>
              <div className="col-md-12">
                  <label for="inputEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail"/>
              </div>
              <div className="col-md-12">
                <label for="inputMessage" className="form-label">Message</label>
                <textarea className="form-control vh" id="inputMessage" placeholder="Write your message here."></textarea>
              </div>
              <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
