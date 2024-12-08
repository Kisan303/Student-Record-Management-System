import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Login(){
    const [title, setTitle] = useState("");
    const [formUser, setFormUser] = useState({
        email: "",
        password: "",
        _id: "",
    });
    const [fetchUser, setFetchUser] = useState({
        _id: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "",
        username: "",
    });
    const [userDashboard, setuserDashboard] = useState("");
    const url = window.location.href;    
    const navigate = useNavigate();

    useEffect(() => {
        if (url.includes("admin-login")) setTitle("Admin");
        if (url.includes("staff-login")) setTitle("Faculty Staff");
        if (url.includes("student-login")) setTitle("Student");
    }, []);

    async function handleLogin(e){
        e.preventDefault();
        const user = { ...formUser };
        try{
            let response;
            let userdata;
            response = await fetch('http://127.0.0.1:5000/login', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                  });
            if(response.ok) {
                await fetch('http://127.0.0.1:5000/login', {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }).then(data => data.json())
                .then(promisedata => userdata = promisedata)
                .catch(error => console.error("Error:", error));
                console.log("Success Fetch!" + userdata._id);
                if("admin" === userdata.role) navigate(`/admin-dashboard/${userdata._id}`);
                if("teacher" === userdata.role) navigate(`/staff-dashboard/${userdata._id}`);
                if("student" === userdata.role) navigate(`/student-dashboard/${userdata._id}`);
            };
            if(!response.ok) console.log("Fail Fetch!");
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };
    function updateForm(value) {
        return setFormUser((prev) => {
            return { ...prev, ...value };
        });
    };

    function toggleUserDashboard() {
        if (url.includes("admin-login")) setuserDashboard("/admin-dashboard/6755a1074fcf24d5f7d477a7");
        if (url.includes("staff-login")) setuserDashboard("staff-dashboard");
        if (url.includes("student-login")) setuserDashboard("student-dashboard");
    };

    return (
        <>
        <div>      
            <div className="col-12 bg-primary-subtle text-primary-emphasis">
                <div className="row col-12">          
                    <div className="col-4"></div>
                    <div className="text-center col-4 border-bottom"> 
                        <h1>{title}</h1>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4 p-3">
                        <form onSubmit={handleLogin} action={userDashboard}>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" value={formUser.email} onChange={(e) => updateForm({email: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" value={formUser.password} onChange={(e) => updateForm({password: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3 d-none">
                                <div className="col-sm-10 offset-sm-2 text-start">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                    Remember Me
                                    </label>
                                </div>
                                </div>
                            </div>                              
                            <button className="btn btn-primary" type="submit">LOGIN</button>
                            <a href={userDashboard} className="btn btn-primary d-none" onClick={toggleUserDashboard}>Log in</a>
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