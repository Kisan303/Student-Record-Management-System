import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function  StaffDashboard({id}){
    const [teacher, setTeacher] = useState([]);
    const [records, setRecords] = useState([]);
    const [classes, setClasses] = useState([]);
    const [teacherID, setTeacherID] = useState("");
    const params = useParams(); 

    useEffect(() => {    
        displayDashboard();
        displayRecords();
        displayClasses();
        if(id == ""){setTeacherID(params.id.toString())}
        else{setTeacherID(id)};
    });   
    async function displayDashboard() { 
        try{
            await fetch(`http://127.0.0.1:5000/${teacherID}`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setTeacher(promisedata))
            .catch(error => console.error("Error:", error));
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };  
    async function displayRecords() { 
        try{
            await fetch(`http://127.0.0.1:5000/get_record`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setRecords(promisedata))
            .catch(error => console.error("Error:", error));
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    }; 
    async function displayClasses() { 
        try{
            await fetch(`http://127.0.0.1:5000/get_class`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then(data => data.json())
            .then(promisedata => setClasses(promisedata))
            .catch(error => console.error("Error:", error));
            console.log(classes);
        }catch(error){
            console.error('A problem occurred with your fetch operation: ', error);
        }
    };
    return(
        <>
        <div className="row col-12 bg-primary-subtle text-primary-emphasis p-5  d-flex align-items-center justify-content-center">
            <div className="col-2 d-sm-none"></div>
            <div className="col-8 col-sm-12 p-1 text-start">
                <ul className="list-group list-group">
                    <li className="list-group-item">Professor Name: {teacher.firstname} {teacher.lastname}</li>
                    <li className="list-group-item">Teacher E-mail: {teacher.email}</li>
                    <li className="list-group-item">Role: {teacher.role}</li>
                </ul>      
            </div>
            <div className="col-2 d-sm-none"></div>
            <div className="col-2 d-sm-none"></div>
            <div className="col-5 col-sm-12 p-1">
                <h3>Class Records</h3>
            </div>
            <div className="col-2 d-sm-none"></div>
            <div className="col-2 d-sm-none"></div>      
            <div className="col-8 col-sm-12 p-1">
                <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Class Section</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {records.filter(r => r.teacher_id === params.id.toString()).map((record, index) => (
                        <tr className="text-start">
                            <th scope="row" className="text-center">{index+1}</th>
                            <td>{classes.filter(c => c._id.toString() === record.section_id)[0].course_code}-{classes.filter(c => c._id.toString() === record.section_id)[0].section}:{classes.filter(c => c._id.toString() === record.section_id)[0].course_name}</td>
                            <td>{record.student_id}</td>
                            <td className="text-center">{record.grade}</td>
                        </tr>
                    ))} 
                </tbody>
                </table>
            </div>  
            <div className="col-2 d-sm-none"></div>
            
            </div>
            <div className="bg-primary-subtle text-primary-emphasis">
            <div className="row col-12 d-sm-none">
                <div className="col-4"></div>
                <div className="col-4 p-3">
                </div>        
                <div className="col-4"></div>
            </div>
        </div>
        </>
    );
}