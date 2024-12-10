import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function StudentDashboard(){
    const [dataSet, setDataSet] = useState([]);
    const params = useParams();
    const [records, setRecords] = useState([]);
    const [classes, setClasses] = useState([]); 
    const [studentID, setStudentID] = useState("");

    useEffect(() => {
        setStudentID(params.id.toString());   
        const displayDashboard = async () => { 
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
        async function displayRecords(){ 
            try{
                await fetch(`http://127.0.0.1:5000/get_record`, {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    },
                }).then(data => data.json())
                .then(promisedata => setRecords(promisedata))
                .catch(error => console.error("Error:", error));
                console.log(records);
                console.log("Made it here!");
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
        displayDashboard();
        displayRecords();  
        displayClasses();
    });
    return(
        <>        
        <div className="row col-12 bg-primary-subtle text-primary-emphasis p-5">
            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                    <li className="list-group-item">Student Name: {dataSet.firstname} {dataSet.lastname}</li>
                    <li className="list-group-item">Student E-mail: {dataSet.email}</li>
                    <li className="list-group-item">Role: {dataSet.role}</li>
                </ul>      
            </div>
            <div className="col-2"></div>            
            <div className="col-2"></div>      
            <div className="col-8 p-1">
                <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Class Section</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {records.filter(r => r.student_id === studentID).map((record, index) => (
                        <tr className="text-start">
                            <th scope="row" className="text-center">{index+1}</th>
                            <td>{classes.filter(c => c._id.toString() === record.section_id)[0].course_code}-{classes.filter(c => c._id.toString() === record.section_id)[0].section}: {classes.filter(c => c._id.toString() === record.section_id)[0].course_name}</td>   
                            <td className="text-center">{record.grade}</td>
                        </tr>
                    ))} 
                </tbody>    
                </table>
            </div>  
            <div className="col-2"></div>
        </div>
        </>
    );
}