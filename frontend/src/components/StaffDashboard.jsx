export default function  StaffDashboard(){
    return(
        <>
        <div class="row col-12 bg-primary-subtle text-primary-emphasis p-5  d-flex align-items-center justify-content-center">
            <div class="col-2 d-sm-none"></div>
            <div class="col-8 col-sm-12 p-1 text-start">
                <ul class="list-group list-group">
                <li class="list-group-item">Professor Name: Jim Terry</li>
                <li class="list-group-item">Faculty ID: c0921675</li>
                <li class="list-group-item">Department: Computing Studies</li>
                </ul>      
            </div>
            <div class="col-2 d-sm-none"></div>
            <div class="col-2 d-sm-none"></div>
            <div class="col-5 col-sm-12 p-1">
                <h3>CSD-4553-01: Cloud Computing</h3>
            </div>
            <div class="col-2 d-sm-none"></div>
            <div class="col-2 d-sm-none"></div>      
            <div class="col-8 col-sm-12 p-1">
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
            <div class="col-2 d-sm-none"></div>
            <div class="col-2 d-sm-none"></div>
            <div class="col-5 col-sm-12 p-1">
                <h3>CSD-3301-01: Full Stack JavaScript</h3>
            </div>
            <div class="col-2 d-sm-none"></div>
            <div class="col-2 d-sm-none"></div>      
            <div class="col-8 col-sm-12 p-1">
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
            <div class="col-2 d-sm-none"></div>
            </div>
            <div class="bg-primary-subtle text-primary-emphasis">
            <div class="row col-12 d-sm-none">
                <div class="col-4"></div>
                <div class="col-4 p-3">
                </div>        
                <div class="col-4"></div>
            </div>
        </div>
        </>
    );
}