import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [datas, setDatas] = useState([]);
    const [responseMessage, setResponseMessage] = useState("");
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
            let userid;
            response = await fetch('http://127.0.0.1:5000/login', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                  });
            //const record = response.json();
            //setFetchUser(record);
            //console.log(record);
            //console.log(fetchUser._id.toString());
            if(response.ok) {
                await fetch('http://127.0.0.1:5000/login', {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }).then(data => data.json())
                .then(promisedata => userid = promisedata._id)
                .catch(error => console.error("Error:", error));
                //xsetuserDashboard("/admin-dashboard/"+userid);
                console.log("Success Fetch!" + userid);
                navigate(`/admin-dashboard/${userid}`);
            };
            if(!response.ok) console.log("Fail Fetch!");
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
        //console.log("Handle login.");
        // axios.post('http://127.0.0.1:5000/login',{'email': email, 'password': password})
        //     .then((response) => {
        //         console.log("Post user infor!" + response)
        //         // axios.get(`http://127.0.0.1:5000/login`)
        //         //     .then((responsenew)=>{
        //         //         console.log("Get user infor!")
        //         //         const userItems = responsenew.data.items;   
        //         //         const userData = responsenew.data;
        //         //         console.log(userData._id);
        //         //         setDatas(userData);
        //         //     })
        //         //     .catch((error1)=>{
        //         //         console.error('Error fetching data:', error1);
        //         // });
        //         //setuserDashboard("/admin-dashboard/"+datas._id);
        //         // const userInfo = response.data;
        //         // setDatas(userInfo);
        //         // console.log(userInfo.toString());
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching data:', error);
        //     });
        console.log("Redirect to Dashboard!")
        //setuserDashboard("/admin-dashboard/"+datas._id);
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
                        <h3>Input: {formUser.email}</h3>
                        <h5>Response: {datas}</h5>
                        <h6>{responseMessage}</h6>
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