export default function CourseReport(){
    return (
        <>
        <div className="row col-12"> 
            <div className="col-1"></div>  
            <div className="col-10">
                <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/admin-dashboard">Home</a>                
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Course Here..." aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reports
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/create-course">Create Course</a></li>
                                <li><a className="dropdown-item" href="#">School</a></li>
                                <li><a className="dropdown-item" href="#">Faculty Staff</a></li>
                                <li><a className="dropdown-item" href="#">Student</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>  
            <div className="col-1"></div>        
            <div className="col-1"></div>      
            <div className="col-10 p-1">
                <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                    <th scope="col">Course Code</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">CSD-4553-01</th>
                    <td>Cloud Computing</td>
                    <td className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td className="text-center">                          
                        <a href="/update-course" className="btn btn-info">Update</a>
                        <br/>
                        <a href="#" className="btn btn-danger">Delete</a>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-3301-01</th>
                    <td>Full Stack JavaScript</td>
                    <td className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td className="text-center">                          
                        <a href="/update-course" className="btn btn-info">Update</a>
                        <br/>
                        <a href="#" className="btn btn-danger">Delete</a>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">CSD-4202-01</th>
                    <td>DevOps: Tools and Practices</td>
                    <td className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td className="text-center">                        
                        <a href="/update-course" className="btn btn-info">Update</a>
                        <br/>
                        <a href="#" className="btn btn-danger">Delete</a>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>      
            <div className="col-1"></div>
        </div>
        </>
    );
}