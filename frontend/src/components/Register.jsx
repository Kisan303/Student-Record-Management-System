import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const params = useParams(); 
    const [formUser, setFormUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "",
        username: "",
        phone:"",
        address:"",
        dob:"",
        gender:"",
        department:"",
        program:"",
    });
    useEffect(() => {  
        setUserID(params.id.toString());
    }, [1]);   
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
            if(response.ok) {
                console.log("Success registration!");
                navigate(`/admin-dashboard/${userID}`)
            };
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
    
    return (
        <>
            <div className="row col-12 bg-primary-subtle text-primary-emphasis d-flex justify-content-center">
                <div className="col-1"></div>              
                    <div className="navbar navbar-expand-lg bg-body-tertiary col-10">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={`/admin-dashboard/${userID}`}>Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={`/staff-report/${userID}`}>Manage Teachers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={`/student-report/${userID}`}>Manage Students</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href={`/register/${userID}`}>Register User</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="col-1"></div>         
                <div className="col-4"></div>
                <div className="text-center col-4 border-bottom"> 
                <h1>Create New User</h1>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4 p-3 position-flex top-0 start-50 text-start">
                    <form className="row g-3" onSubmit={handleRegister} action={`/admin-dashboard/${userID}`}>
                        <div className="row g-3 col-12">
                            <div className="col-md-12">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" value={formUser.firstname} onChange={(e) => updateForm({ firstname: e.target.value})} required/>
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" value={formUser.lastname} onChange={(e) => updateForm({ lastname: e.target.value})} required/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputDateOfBirth" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="inputDateOfBirth" value={formUser.dob} onChange={(e) => updateForm({ dob: e.target.value})} required/>
                        </div>
                        <div className="col-md-4">  
                            <label htmlFor="inputRole" className="form-label">Role</label>
                            <select id="inputRole" className="form-select" value={formUser.role} onChange={(e) => updateForm({ role: e.target.value})} required>
                            <option value="admin" selected>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            </select>
                        </div>
                        <div className="col-md-4">  
                            <label htmlFor="inputGender" className="form-label">Gender</label>
                            <select id="inputGender" className="form-select" value={formUser.gender} onChange={(e) => updateForm({ gender: e.target.value})} required>
                            <option value="" selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-md-12">  
                            <label htmlFor="inputDepartment" className="form-label">Department</label>
                            <select id="inputDepartment" className="form-select" value={formUser.department} onChange={(e) => updateForm({ department: e.target.value})} required>
                            <option value="" selected>Select Department</option>
                            <option value="computer studies">Computer Studies</option>
                            <option value="business management">Business Management</option>
                            </select>
                        </div>
                        <div className="col-md-12">  
                            <label htmlFor="inputProgram" className="form-label">Program Course</label>
                            <select id="inputProgram" className="form-select" value={formUser.program} onChange={(e) => updateForm({ program: e.target.value})} required>
                            <option value="" selected>Select Department</option>
                            <option value="Full Stack Software Development">Full Stack Software Development</option>
                            <option value="International Business Management">International Business Management</option>
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
                        <div className="col-md-12">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone" value={formUser.phone} onChange={(e) => updateForm({ phone: e.target.value})} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 London St, Sarnia, Ontario Canada" value={formUser.address} onChange={(e) => updateForm({ address: e.target.value})} required/>
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
                        <div className="col-12 text-end">                            
                            <button type="submit" className="btn btn-primary">Register</button>
                            <a href="/" className="btn btn-primary d-none">Submit</a>
                        </div>
                    </form>
                </div>        
                <div className="col-4"></div>
            </div>
        </>
    );
}