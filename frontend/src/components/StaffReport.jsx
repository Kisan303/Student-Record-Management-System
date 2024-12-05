import { Outlet } from "react-router-dom";
import StaffDashboard from "./StaffDashboard";

export default function StaffReport(){
    return(
        <>
        <div class="row col-12 bg-primary-subtle text-primary-emphasis p-5  d-flex align-items-center justify-content-center">
            <div class="col-2"></div>              
            <div class="navbar navbar-expand-lg bg-body-tertiary col-8">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/course-report">Course Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/staff-report">School Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/staff-report">Faculty Staff Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/student-report">Student Report</a>
                    </li>
                </ul>
            </div> 
            <div class="col-2"></div>

            <div class="col-2"></div>
            <div class="col-8 p-1 text-start">
                <ul class="list-group list-group">
                <li class="list-group-item">Number of Full-time Faculty Staff Employed - Fall Term 2024: <b>500</b></li>
                <li class="list-group-item">Number of Full-time Faculty Staff Employed - Fall Term 2024: <b>200</b></li>
                <li class="list-group-item">Faculty to Student ratio: <b>5:50</b> </li>
                </ul>      
            </div>
            <div class="col-2"></div>
            
            <div class="col-2"></div>
            <div class="col-8">                
                <h1>Faculty Staff Portfolio</h1>
            </div>
            <div class="col-2"></div> 

            <div class="col-2"></div>
            <div class="col-8 p-1">
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Prof. Jackie Chan
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">                        
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Engr. Will Smith, PhD, MA
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">                      
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Dr. Michelle Tan
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">                          
                        <StaffDashboard />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-2"></div>
            </div>
        </>
    );
}