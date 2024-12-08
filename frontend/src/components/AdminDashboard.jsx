import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AdminDashboard(){
    const [dataSet, setDataSet] = useState([]);
    const params = useParams(); 
    // axios.post('http://127.0.0.1:5000/',{'id': params.id})
    // .then((response) => {
    //     console.log(response);
    //     axios.get('http://127.0.0.1:5000/')
    //         .then((responsenew)=>{
    //             const userData = responsenew.data;
    //             console.log(userData);
    //             setDataSet(userData);
    //         })
    //         .catch((error1)=>{
    //             console.error('Error fetching data:', error1);
    //         });
    // })
    // .catch((error) => {
    //     console.error('Error fetching data:', error);
    // }); 
    
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
    // {
    //     axios.get(`http://127.0.0.1:5000/${params.id.toString()}`)
    //         .then((response)=>{
    //             const userItems = response.data.items;   
    //             const userData = response.data;
    //             console.log(userItems);
    //             setDataSet(userData);
    //         })
    //         .catch((error1)=>{
    //             console.error('Error fetching data:', error1);
    //     });
    };
    return(
        <>
        <div className="col-12 bg-primary-subtle text-primary-emphasis d-flex justify-content-center">
        <div className="row col-12">
            <div className="col-1"></div>
            <div className="navbar navbar-expand-lg bg-body-tertiary col-10">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/course-report">Course Report</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/staff-report">School Report</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/staff-report">Faculty Staff Report</a></li>
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/student-report">Student Report</a></li>
                    </ul>
                </div>
            </div>
            </div> 
            <div className="col-1"></div> 

            <div className="col-1"></div>
            <div className="col-10 p-1 text-start">
                <ul className="list-group list-group">
                <li className="list-group-item">Professor Name: {dataSet.firstname} {dataSet.lastname}</li>
                <li className="list-group-item">Faculty E-mail: {dataSet.email}</li>
                <li className="list-group-item">Role: {dataSet.role}</li>
                </ul>      
            </div>
            <div className="col-1"></div>
            
            <div className="col-1"></div>
            <div className="col-10 text-start">
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
            <div className="col-1"></div>
        </div>
        </div>
        </>
    );
}