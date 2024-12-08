import { Outlet } from "react-router-dom";
import StaffDashboard from "./StaffDashboard";

export default function StaffReport(){
    return(
        <>
        <div className="row col-12 bg-primary-subtle text-primary-emphasis p-5  d-flex align-items-center justify-content-center">
            <div className="col-2"></div>              
            <div className="navbar navbar-expand-lg bg-body-tertiary col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/course-report">Course Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/staff-report">School Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/staff-report">Faculty Staff Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/student-report">Student Report</a>
                    </li>
                </ul>
            </div> 
            <div className="col-2"></div>

            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                <li className="list-group-item">Number of Full-time Faculty Staff Employed - Fall Term 2024: <b>500</b></li>
                <li className="list-group-item">Number of Full-time Faculty Staff Employed - Fall Term 2024: <b>200</b></li>
                <li className="list-group-item">Faculty to Student ratio: <b>5:50</b> </li>
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
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Prof. Jackie Chan
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                        
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Engr. Will Smith, PhD, MA
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                      
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Dr. Michelle Tan
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                          
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        </>
    );
}