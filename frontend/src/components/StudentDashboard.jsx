export default function StudentDashboard(){
    return(
        <>        
        <div className="row col-12 bg-primary-subtle text-primary-emphasis p-5">
            <div className="col-2"></div>
            <div className="col-8 p-1 text-start">
                <ul className="list-group list-group">
                <li className="list-group-item">Student Name: Ralph Eimerson Ompoc</li>
                <li className="list-group-item">Student ID: c0921675</li>
                <li className="list-group-item">Program: Full Stack Software Development</li>
                <li className="list-group-item">Year: 2nd</li>
                <li className="list-group-item">Term: 3</li>
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