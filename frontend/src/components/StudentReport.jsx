import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";

export default function StaffReport(){
    const [userID, setUserID] = useState("");
    const [students, setStudents] = useState([]);
    const params = useParams(); 
    useEffect(() => {  
        setUserID(params.id.toString());
        displayListOfStudents();
    }, [1]); 
          
    async function displayListOfStudents() { 
        try{
            await fetch(`http://127.0.0.1:5000/get_all_users`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setStudents(promisedata))
            .catch(error => console.error("Error:", error));      
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    }; 
    async function unenrollStudent(email) { 
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
                            <a className="nav-link active" href={`/student-report/${userID}`}>Manage Students</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/register/${userID}`}>Register User</a>
                        </li>
                    </ul>
                </div>
            </div> 
            <div className="col-1"></div>    
            <div className="col-2"></div>
            <div className="col-8">                
                <h1>Students Portfolio</h1>
            </div>
            <div className="col-2"></div> 
            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                    <li className="list-group-item">Number of Students Enrolled: <b>{students.filter(t => t.role === "student").length}</b> </li>
                </ul>      
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-8 p-1">
                <div className="accordion bg-body-tertiary" id="accordionExample">
                    {students.filter(s => s.role === "student").map((student, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_"+index.toString()} aria-expanded="false" aria-controls={"collapse_"+index.toString()}>
                                {student.firstname} {student.lastname}
                            </button>
                            </h2>
                            <div id={"collapse_"+index.toString()} className="accordion-collapse collapse bg-body-tertiary" data-bs-parent="#accordionExample">
                            <div className="accordion-body">                        
                                <StudentDashboard id = {student._id}/>                                
                                <div className="row">
                                    <div className="col-6"><a className="nav-link active" href={`/update-user/${student._id}`}>Update</a></div>
                                    <div className="col-6"><button onClick={() => unenrollStudent(student.email)}>Delete</button></div>
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