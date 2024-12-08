import axios from "axios";
import { useState, useEffect } from "react";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("admin");
    const [responseMessage, setResponseMessage] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/data')
            .then((response) => {
                setData(response.data.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <div className="col-12 bg-primary-subtle text-primary-emphasis vh-100  d-flex align-items-center justify-content-center">
            <div className="row col-12">        
                <div className="col-4"></div>
                <div className="text-center col-4 border-bottom"> 
                <h1>Create New User</h1>
                <h5>{responseMessage},{username},{email},{role}</h5>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4 p-3 position-flex top-0 start-50">
                    <form className="row g-3">
                        <div className="row g-3 col-12 d-none">
                            <div className="col-md-12">
                                <label for="inputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                            </div>
                            <div className="col-md-12">
                                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="col-md-8 d-none">
                            <label for="inputDateOfBirth" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="inputDateOfBirth"/>
                        </div>
                        <div className="col-md-4">
                            <label for="inputRole" className="form-label">Role</label>
                            <select id="inputRole" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="admin" selected>Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label for="inputUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="inputUsername"  value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputConfirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputPhone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                        </div>
                        <div className="col-12 d-none">
                            <label for="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="col-12 d-none">
                            <label for="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="col-md-6 d-none">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="col-md-4 d-none">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2 d-none">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                        <div className="col-12 d-none">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label text-start" for="gridCheck">
                                    By registering an account, you agree to SMRS Conditions of Use and Privacy Notice.
                                </label>
                            </div>
                        </div>
                        <div className="col-12">                            
                            <button type="submit">register</button>
                            <a href="/" className="btn btn-primary">Submit</a>
                        </div>
                    </form>
                </div>        
                <div className="col-4"></div>
            </div>
            </div>
        </>
    );
}