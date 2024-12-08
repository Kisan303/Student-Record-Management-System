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
                        <a className="nav-link" href="/staff-report">Faculty Staff Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/student-report">Student Report</a>
                    </li>
                </ul>
            </div> 
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-8">                
                <h1>Students Portfolio</h1>
            </div>
            <div className="col-2"></div> 
            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                <li className="list-group-item">Professor Name: Jim Terry</li>
                <li className="list-group-item">Faculty ID: c0921675</li>
                <li className="list-group-item">Department: Computing Studies</li>
                </ul>      
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-5 p-1">
                <h3>CSD-4553-01: Cloud Computing</h3>
            </div>
            <div className="col-3 p-1">
                <div className="row p-0 m-0 g-0">
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">Create Report</button>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">Edit Report</button>
                </div>
                </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>      
            <div className="col-8 p-1">
                <table className="table table-striped">
                <thead>
                    <tr className="text-center">
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
                    <td className="text-center">3.9</td>
                    <td className="text-center">A+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921345</th>
                    <td>John Watson</td>
                    <td className="text-center">4.0</td>
                    <td className="text-center">A+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921643</th>
                    <td>Jackie Chan</td>
                    <td className="text-center">3.8</td>
                    <td className="text-center">A+</td>
                    </tr>
                </tbody>
                </table>
            </div>  
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-5 p-1">
                <h3>CSD-3301-01: Full Stack JavaScript</h3>
            </div>
            <div className="col-3 p-1">
                <div className="row p-0 m-0 g-0">
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">Create Report</button>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">Edit Report</button>
                </div>
                </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>      
            <div className="col-8 p-1">
                <table className="table table-striped">
                <thead>
                    <tr className="text-center">
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
                    <td className="text-center">3.4</td>
                    <td className="text-center">A-</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921345</th>
                    <td>John Watson</td>
                    <td className="text-center">2.8</td>
                    <td className="text-center">B+</td>
                    </tr>
                    <tr>
                    <th scope="row">C0921643</th>
                    <td>Jackie Chan</td>
                    <td className="text-center">3.6</td>
                    <td className="text-center">A</td>
                    </tr>
                </tbody>
                </table>
            </div>  
            <div className="col-2"></div>
            </div>
            <div className="bg-primary-subtle text-primary-emphasis">
            <div className="row col-12">
                <div className="col-4"></div>
                <div className="col-4 p-3">
                </div>        
                <div className="col-4"></div>
            </div>
        </div>
        </>
    );
}