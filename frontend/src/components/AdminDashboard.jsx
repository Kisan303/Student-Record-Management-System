export default function AdminDashboard(){
    return(
        <>
        <div class="col-12 bg-primary-subtle text-primary-emphasis d-flex justify-content-center">
        <div class="row col-12">
            <div class="col-1"></div>
            <div class="navbar navbar-expand-lg bg-body-tertiary col-10">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/course-report">Course Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/staff-report">School Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/staff-report">Faculty Staff Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/student-report">Student Report</a></li>
                    </ul>
                </div>
            </div>
            </div>       
            <div class="col-1"></div>
            <div class="col-1"></div>
            <div class="col-10 text-start">
                <h1>Dashboard</h1>
                <h3>Increase of student this year 2024.</h3>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success hw-25 col-3">25%</div>
                </div>
                <h3>Rate of deans lister students for Fall Term 2024</h3>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info text-dark hw-50 col-6">50%</div>
                </div>
                <h3>Rate of Factulty Performance for this year 2024</h3>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark hw-75 col-9">75%</div>
                </div>
                <h3>Rate of School Performance this Fall Term - 2024</h3>
                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger hw-100 col-12">100%</div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
        </div>
        </>
    );
}