import { useEffect, useState } from "react";

export default function Login(){
    const [title, setTitle] = useState("");
    const [userDashboard, setuserDashboard] = useState("");
    const url = window.location.href;

    useEffect(( ) => {
        if (url.includes("admin-login")) setTitle("Admin");
        if (url.includes("staff-login")) setTitle("Faculty Staff");
        if (url.includes("student-login")) setTitle("Student");
    }, [ ]);

    function toggleUserDashboard() {
        if (url.includes("admin-login")) setuserDashboard("admin-dashboard");
        if (url.includes("staff-login")) setuserDashboard("staff-dashboard");
        if (url.includes("student-login")) setuserDashboard("student-dashboard");
    }

    return (
        <>
        <div>      
            <div class="col-12 bg-primary-subtle text-primary-emphasis">
                <div class="row col-12">          
                    <div class="col-4"></div>
                    <div class="text-center col-4 border-bottom"> 
                        <h1>{title}</h1>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4 p-3">
                        <form>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10 offset-sm-2 text-start">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label class="form-check-label" for="gridCheck1">
                                    Remember Me
                                    </label>
                                </div>
                                </div>
                            </div>
                            <a href={userDashboard} class="btn btn-primary" onClick={toggleUserDashboard}>Log in</a>
                        </form>
                        <div>
                            <a href="register" class="btn btn-primary">Register new account</a>
                        </div>
                    </div>        
                    <div class="col-4"></div>
                </div>
                <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
                    <h1 class="p-3">Log in as Admin</h1>
                </div>
            </div>
        </div>
        <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
            <h1 class="p-3">Welcome to Student Record Management System</h1>
        </div>
        </>
    );
}