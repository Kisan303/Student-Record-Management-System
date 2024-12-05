import logo from '../project-logo.png';

export default function Navbar() {
  return (
    <div class="row col-12">
    <div class="col-8">            
        <div class="col-6 p-3">
        <a class="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
        <h4>Student Management Record System</h4>
        </div>
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
  );
}