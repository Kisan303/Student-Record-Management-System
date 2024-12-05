export default function AdminDashboard(){
    return(
        <>
        <div class="col-12 bg-primary-subtle text-primary-emphasis vh-100  d-flex justify-content-center">
        <div class="row col-12">
            <div class="col-4"></div>
            <div class="container-fluid col-4 p-3">
                <ul navbar-nav d-flex ms-auto>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/course-report">Course Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">School Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Faculty Staff Report</a></li>
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Student Report</a></li>
                </ul>
            </div>        
            <div class="col-4"></div>
        </div>
        <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
            <h1 class="p-3">Hello Admin Name</h1>
        </div>
        </div>
        </>
    );
}