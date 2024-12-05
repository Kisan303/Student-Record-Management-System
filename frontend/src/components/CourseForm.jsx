export default function Course(){
    return(
        <>
        <div class="row col-12">        
            <div class="col-4"></div>
            <div class="text-center col-4 border-bottom"> 
            <h1>Create New Course</h1>
            </div>
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4 p-3 position-flex top-0 start-50">
                <form action="/course-report" class="row g-3">
                    <div class="row g-3 col-12">
                        <div class="col-md-12">
                            <label for="inputCourseName" class="form-label">Course Name</label>
                            <input type="text" class="form-control" id="inputCourseName" placeholder="Course Name"/>
                        </div>
                        <div class="col-md-12">
                            <label for="inputCourseCode" class="form-label">Course Code</label>
                            <input type="text" class="form-control" id="inputCourseCode" placeholder="Course Code"/>
                        </div>
                    </div>               
                    <div class="col-md-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea class="form-control vh" id="inputDescription" placeholder="Write description here..."></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>        
            <div class="col-4"></div>
        </div>
        </>
    );
}