export default function Course(){
    return(
        <>
        <div className="row col-12">        
            <div className="col-4"></div>
            <div className="text-center col-4 border-bottom"> 
            <h1>Create New Course</h1>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4 p-3 position-flex top-0 start-50">
                <form action="/course-report" className="row g-3">
                    <div className="row g-3 col-12">
                        <div className="col-md-12">
                            <label for="inputCourseName" className="form-label">Course Name</label>
                            <input type="text" className="form-control" id="inputCourseName" placeholder="Course Name"/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputCourseCode" className="form-label">Course Code</label>
                            <input type="text" className="form-control" id="inputCourseCode" placeholder="Course Code"/>
                        </div>
                    </div>               
                    <div className="col-md-12">
                    <label for="inputDescription" className="form-label">Description</label>
                    <textarea className="form-control vh" id="inputDescription" placeholder="Write description here..."></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>        
            <div className="col-4"></div>
        </div>
        </>
    );
}