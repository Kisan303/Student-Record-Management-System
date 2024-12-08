import axios from "axios";
import { useState, useEffect } from "react";

export default function Register(){
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [role, setRole] = useState("admin");
    // const [responseMessage, setResponseMessage] = useState("");
    // const [data, setData] = useState(null);
    const [formUser, setFormUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "",
        username: "",
    });
    async function handleRegister(e){
        e.preventDefault();
        const registerUser = { ...formUser };
        try{
            let response;
            let userdata;
            response = await fetch('http://127.0.0.1:5000/register', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(registerUser),
                  });
            if(response.ok) console.log("Success registration!");
            if(!response.ok) console.log("Fail to register!");
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };
    
    function updateForm(value) {
        return setFormUser((prev) => {
            return { ...prev, ...value };
        });
    };
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/api/data')
    //         .then((response) => {
    //             setData(response.data.message);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);
    return (
        <>
            <div className="col-12 bg-primary-subtle text-primary-emphasis vh-100  d-flex align-items-center justify-content-center">
            <div className="row col-12">
            <div className="col-2"></div>              
            <div className="navbar navbar-expand-lg bg-body-tertiary col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/course-report">Course Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/staff-report">School Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/staff-report">Faculty Staff Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student-report">Student Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/register">Enroll Student</a>
                    </li>
                </ul>
            </div> 
            <div className="col-2"></div>        
                <div className="col-4"></div>
                <div className="text-center col-4 border-bottom"> 
                <h1>Create New User</h1>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4 p-3 position-flex top-0 start-50">
                    <form className="row g-3" onSubmit={handleRegister} action="/">
                        <div className="row g-3 col-12">
                            <div className="col-md-12">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" value={formUser.firstname} onChange={(e) => updateForm({ firstname: e.target.value})} required/>
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" value={formUser.lastname} onChange={(e) => updateForm({ lastname: e.target.value})} required/>
                            </div>
                        </div>
                        <div className="col-md-8 d-none">
                            <label htmlFor="inputDateOfBirth" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="inputDateOfBirth"/>
                        </div>
                        <div className="col-md-4">  
                            <label htmlFor="inputRole" className="form-label">Role</label>
                            <select id="inputRole" className="form-select" value={formUser.role} onChange={(e) => updateForm({ role: e.target.value})}>
                            <option value="admin" selected>Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="inputUsername"  value={formUser.username} onChange={(e) => updateForm({ username: e.target.value})} required/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" value={formUser.email} onChange={(e) => updateForm({ email: e.target.value})} required/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" value={formUser.password} onChange={(e) => updateForm({ password: e.target.value})} required/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputConfirmPassword"/>
                        </div>
                        <div className="col-md-12 d-none">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone"/>
                        </div>
                        <div className="col-12 d-none">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="col-12 d-none">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="col-md-6 d-none">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-md-4 d-none">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2 d-none">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                        <div className="col-12 d-none">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label text-start" htmlFor="gridCheck">
                                    By registering an account, you agree to SMRS Conditions of Use and Privacy Notice.
                                </label>
                            </div>
                        </div>
                        <div className="col-12">                            
                            <button type="submit" className="btn btn-primary">Register</button>
                            <a href="/" className="btn btn-primary d-none">Submit</a>
                        </div>
                    </form>
                </div>        
                <div className="col-4"></div>
            </div>
            </div>
        </>
    );
}