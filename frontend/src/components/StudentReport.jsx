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
                        <a class="nav-link" href="/staff-report">Faculty Staff Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/student-report">Student Report</a>
                    </li>
                </ul>
            </div> 
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-8">                
                <h1>Students Portfolio</h1>
            </div>
            <div class="col-2"></div> 
            <div class="col-2"></div>
            <div class="col-8 p-1 text-start">
                <ul class="list-group list-group">
                <li class="list-group-item">Professor Name: Jim Terry</li>
                <li class="list-group-item">Faculty ID: c0921675</li>
                <li class="list-group-item">Department: Computing Studies</li>
                </ul>      
            </div>
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-5 p-1">
                <h3>CSD-4553-01: Cloud Computing</h3>
            </div>
            <div class="col-3 p-1">
                <div class="row p-0 m-0 g-0">
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Create Report</button>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Edit Report</button>
                </div>
                </div>
            </div>
            <div class="col-2"></div>
            <div class="col-2"></div>      
            <div class="col-8 p-1">
                <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Letter Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">C0921675</th>
                    <td>Ralph Eimerson</td>
                    <td class="text-center">3.9</td>
                    <td class="text-center">A+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921345</th>
                    <td>John Watson</td>
                    <td class="text-center">4.0</td>
                    <td class="text-center">A+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921643</th>
                    <td>Jackie Chan</td>
                    <td class="text-center">3.8</td>
                    <td class="text-center">A+</td>
                    </tr>
                </tbody>
                </table>
            </div>  
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-5 p-1">
                <h3>CSD-3301-01: Full Stack JavaScript</h3>
            </div>
            <div class="col-3 p-1">
                <div class="row p-0 m-0 g-0">
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Create Report</button>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Edit Report</button>
                </div>
                </div>
            </div>
            <div class="col-2"></div>
            <div class="col-2"></div>      
            <div class="col-8 p-1">
                <table class="table table-striped">
                <thead>
                    <tr class="text-center">
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Letter Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">C0921675</th>
                    <td>Ralph Eimerson</td>
                    <td class="text-center">3.4</td>
                    <td class="text-center">A-</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921345</th>
                    <td>John Watson</td>
                    <td class="text-center">2.8</td>
                    <td class="text-center">B+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921643</th>
                    <td>Jackie Chan</td>
                    <td class="text-center">3.6</td>
                    <td class="text-center">A</td>
                    </tr>
                </tbody>
                </table>
            </div>  
            <div class="col-2"></div>
            </div>
            <div class="bg-primary-subtle text-primary-emphasis">
            <div class="row col-12">
                <div class="col-4"></div>
                <div class="col-4 p-3">
                </div>        
                <div class="col-4"></div>
            </div>
        </div>
        </>
    );
}