import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminDashboard(){
    const [dataSet, setDataSet] = useState([]);
    const [listOfUsers, setListOfUsers] = useState([]);
    const [userID, setUserID] = useState("");
    const params = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {  
        setUserID(params.id.toString());
        displayDashboard();
        displayListOfUsers();
    }, [1]);   
    async function displayDashboard () {
        try{
            await fetch(`http://127.0.0.1:5000/${params.id.toString()}`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setDataSet(promisedata))
            .catch(error => console.error("Error:", error));
            console.log("Able to fetch!");
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };   
    async function displayListOfUsers() { 
        try{
            await fetch(`http://127.0.0.1:5000/get_all_users`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setListOfUsers(promisedata))
            .catch(error => console.error("Error:", error));
            console.log("Able to fetch all users!");            
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };
    return(
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
                                <a className="nav-link active" aria-current="page" href={`/admin-dashboard/${userID}`}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/staff-report/${userID}`}>Manage Teachers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/student-report/${userID}`}>Manage Students</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/register/${userID}`}>Register User</a>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div className="col-1"></div> 
                <div className="col-1 d-none"></div>
                <div className="navbar navbar-expand-lg bg-body-tertiary col-10 d-none">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`/admin-dashboard/${userID}`}>Course Report</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`/staff-report/${userID}`}>School Report</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`/staff-report/${userID}`}>Faculty Staff Report</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`/student-report/${userID}`}>Student Report</a></li>
                        </ul>
                    </div>
                </div>
                </div> 
                <div className="col-1 d-none"></div>   

                <div className="col-1"></div>
                <div className="col-5 p-0 text-start">
                    <ul className="list-group list-group">
                        <li className="list-group-item">Admin Name: {dataSet.firstname} {dataSet.lastname}</li>
                        <li className="list-group-item">Faculty E-mail: {dataSet.email}</li>
                        <li className="list-group-item">Role: {dataSet.role}</li>
                    </ul>      
                </div>
                <div className="col-5 p-0 text-start">
                    <ul className="list-group list-group">
                        <li className="list-group-item">Total number of Admin(s): {listOfUsers.filter(a => a.role === "admin").length}</li>
                        <li className="list-group-item">Total number of Teacher(s): {listOfUsers.filter(t => t.role === "teacher").length}</li>
                        <li className="list-group-item">Total number of Student(s): {listOfUsers.filter(s => s.role === "student").length}</li>
                    </ul>      
                </div>
                <div className="col-1"></div>
                
                <div className="col-1 d-none"></div>
                <div className="col-10 text-start d-none">
                    <h1>Dashboard</h1>
                    <h3>Increase of student this year 2024.</h3>
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success hw-25 col-3">25%</div>
                    </div>
                    <h3>Rate of deans lister students for Fall Term 2024</h3>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-info text-dark hw-50 col-6">50%</div>
                    </div>
                    <h3>Rate of Factulty Performance for this year 2024</h3>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-warning text-dark hw-75 col-9">75%</div>
                    </div>
                    <h3>Rate of School Performance this Fall Term - 2024</h3>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-danger hw-100 col-12">100%</div>
                    </div>
                </div>
                <div className="col-1 d-none"></div>            
                <div className="col-1"></div>
                <div className="col-10">
                    <table className="table table-striped text-start">
                        <thead>
                            <tr>
                            <th scope="col" className="text-center">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            {listOfUsers.map((user, index) => (
                                <tr>
                                    <td className="text-center">{index+1}</td>
                                    <td>{user.firstname} {user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>                
                <div className="col-1"></div>
        </div>
        </>
    );
}