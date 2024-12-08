import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function StudentDashboard(){
    const [dataSet, setDataSet] = useState([]);
    const params = useParams(); 

    useEffect(() => {    
        displayDashboard();
    });   
    async function displayDashboard() { 
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
                    <th scope="col">Course Code</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Letter Grade</th>
                    <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">CSD-4553-01</th>
                    <td>Cloud Computing</td>
                    <td className="text-center">A+</td>
                    <td className="text-center">3.9</td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-3301-01</th>
                    <td>Full Stack JavaScript</td>
                    <td className="text-center">A-</td>
                    <td className="text-center">3.3</td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-4202-01</th>
                    <td>DevOps: Tools and Practices</td>
                    <td className="text-center">A</td>
                    <td className="text-center">3.5</td>
                    </tr>
                </tbody>
                </table>
            </div>      
            <div className="col-2"></div>
        </div>
        </>
    );
}