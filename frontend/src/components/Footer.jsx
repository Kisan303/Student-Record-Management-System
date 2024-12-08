import logo from '../project-logo.png';

export default function Navbar() {
  return (
    <div className="row col-12">
    <div className="col-8">            
        <div className="col-6 p-3">
        <a className="navbar-brand" href="/"><img style={{width: "auto", height: "50px"}} src={logo} alt="Project Logo"></img></a>
        <h4>Student Management Record System</h4>
        </div>
    </div>
    <div className="col-4">
        <ul className="list-group list-group-flush text-primary">
            <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">Home</a></li>
            <li className="list-group-item"><a href="/admin-login" className="text-dark text-decoration-none">Admin</a></li>
            <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">Faculty</a></li>
            <li className="list-group-item"><a href="#" className="text-dark text-decoration-none">Student</a></li>
            <li className="list-group-item"><a href="#about-us" className="text-dark text-decoration-none">About Us</a></li>
            <li className="list-group-item"><p>&copy; 2024 Company Name. All Rights Reserved</p></li>
        </ul>
    </div>
    </div>
  );
}