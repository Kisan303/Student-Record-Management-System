import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(){
    const [title, setTitle] = useState("");
    const [userDashboard, setuserDashboard] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(null);
    const [datas, setDatas] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);
    const url = window.location.href;    
    const navigate = useNavigate();

    useEffect(() => {
        if (url.includes("admin-login")) setTitle("Admin");
        if (url.includes("staff-login")) setTitle("Faculty Staff");
        if (url.includes("student-login")) setTitle("Student");
    }, []);

    function handleLogin(){
        axios.post('http://127.0.0.1:5000/login',{'email': email, 'password': password})
            .then((response) => {
                console.log(response);
                axios.get('http://127.0.0.1:5000/login')
                    .then((responsenew)=>{
                        console.log(responsenew.data);
                        setDatas(responsenew.data);
                        console.log(datas._id)
                        navigate(`http://localhost:3000/admin-dashboard/${datas._id.toString()}`);
                    })
                    .catch((error1)=>{
                        console.error('Error fetching data:', error1);
                    });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    function toggleUserDashboard() {
        if (url.includes("admin-login")) setuserDashboard("http://localhost:3000/admin-dashboard/67553159884e60348aaf39f0");
        if (url.includes("staff-login")) setuserDashboard("staff-dashboard");
        if (url.includes("student-login")) setuserDashboard("student-dashboard");
    }

    return (
        <>
        <div>      
            <div className="col-12 bg-primary-subtle text-primary-emphasis">
                <div className="row col-12">          
                    <div className="col-4"></div>
                    <div className="text-center col-4 border-bottom"> 
                        <h1>{title}</h1>
                        <h3>Input: {email}</h3>
                        <h5>Response: {datas}</h5>
                        <h6>{responseMessage}</h6>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4 p-3">
                        <form onSubmit={handleLogin}>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3 d-none">
                                <div className="col-sm-10 offset-sm-2 text-start">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" for="gridCheck1">
                                    Remember Me
                                    </label>
                                </div>
                                </div>
                            </div>                              
                            <button type="submit">LOGIN</button>
                            <a href={userDashboard} className="btn btn-primary" onClick={toggleUserDashboard}>Log in</a>
                        </form>
                        <div>
                            <a href="register" className="btn btn-primary">Register new account</a>
                        </div>
                    </div>        
                    <div className="col-4"></div>
                </div>
                <div className="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
                    <h1 className="p-3">Log in as Admin</h1>
                </div>
            </div>
        </div>
        <div className="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
            <h1 className="p-3">Welcome to Student Record Management System</h1>
        </div>
        </>
    );
}