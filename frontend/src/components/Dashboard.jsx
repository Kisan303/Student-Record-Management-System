export default function Dashboard(){
    return(
        <>        
        <div class="row col-12 bg-primary-subtle text-primary-emphasis p-5">
            <div class="col-2"></div>
            <div class="col-8 p-1 text-start">
                <ul class="list-group list-group">
                <li class="list-group-item">Student Name: Ralph Eimerson Ompoc</li>
                <li class="list-group-item">Student ID: c0921675</li>
                <li class="list-group-item">Program: Full Stack Software Development</li>
                <li class="list-group-item">Year: 2nd</li>
                <li class="list-group-item">Term: 3</li>
                </ul>      
            </div>
            <div class="col-2"></div>
            <div class="col-2"></div>      
            <div class="col-8 p-1">
                <table class="table table-striped">
                <thead>
                    <tr class="text-center">
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
                    <td class="text-center">A+</td>
                    <td class="text-center">3.9</td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-3301-01</th>
                    <td>Full Stack JavaScript</td>
                    <td class="text-center">A-</td>
                    <td class="text-center">3.3</td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-4202-01</th>
                    <td>DevOps: Tools and Practices</td>
                    <td class="text-center">A</td>
                    <td class="text-center">3.5</td>
                    </tr>
                </tbody>
                </table>
            </div>      
            <div class="col-2"></div>
        </div>
        </>
    );
}