import { Outlet } from "react-router-dom";
import StaffDashboard from "./StaffDashboard";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StaffReport(){
    const [userID, setUserID] = useState("");
    const params = useParams(); 
    const [listOfTeachers, setListOfTeachers] = useState([]); 
    const [selectID, setSelectID] = useState("");
    const navigate = useNavigate();
    useEffect(() => {  
        setUserID(params.id.toString());
        displayListOfTeachers();
        deleteTeacherAccount();
    }, [1]);      
    async function displayListOfTeachers() { 
        try{
            await fetch(`http://127.0.0.1:5000/get_all_users`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setListOfTeachers(promisedata))
            .catch(error => console.error("Error:", error));
            console.log("Able to fetch all users!");            
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };     
    async function deleteTeacherAccount(email) { 
        try{
            await fetch(`http://127.0.0.1:5000/delete_user/${email}`, {
                method: "DELETE",
            });
            console.log("Able to delete user account!");            
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };
    return(
        <>
        <div className="row col-12 bg-primary-subtle text-primary-emphasis d-flex align-items-center justify-content-center">           
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
                            <a className="nav-link active" href={`/staff-report/${userID}`}>Manage Teachers</a>
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

            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                <li className="list-group-item">Number of Employed Teachers: <b>{listOfTeachers.filter(t => t.role === "teacher").length}</b></li>
                <li className="list-group-item d-none">Number of Full-time Faculty Staff Employed - Fall Term 2024: <b>200</b></li>
                <li className="list-group-item d-none">Faculty to Student ratio: <b>5:50</b> </li>
                </ul>      
            </div>
            <div className="col-2"></div>
            
            <div className="col-2"></div>
            <div className="col-8">                
                <h1>Faculty Staff Portfolio</h1>
            </div>
            <div className="col-2"></div> 

            <div className="col-2"></div>
            <div className="col-8 p-1">
                <div className="accordion bg-body-tertiary" id="accordionExample">
                    {listOfTeachers.filter(t => t.role === "teacher").map((teacher, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+index.toString()} aria-expanded="false" aria-controls={"collapse_"+index.toString()}>
                                Prof. {teacher.firstname} {teacher.lastname} {selectID}
                            </button>
                            </h2>
                            <div id={"collapse_"+index.toString()} className="accordion-collapse collapse bg-body-tertiary" data-bs-parent="#accordionExample">
                            <div className="accordion-body">                        
                                <StaffDashboard id={teacher._id.toString()}/>                                
                                <div className="row">
                                    <div className="col-6"><a className="nav-link active d-none" href="#">Update</a></div>
                                    <div className="col-6"><button onClick={() => deleteTeacherAccount(teacher.email)}>Delete</button></div>
                                </div>
                            </div>
                            </div>
                        </div> 
                    ))}               
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        </>
    );
}