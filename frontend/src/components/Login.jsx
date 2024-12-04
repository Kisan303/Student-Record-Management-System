export default function Login(){
    return (
        <>
        <div>      
            <div class="col-12 bg-primary-subtle text-primary-emphasis">
                <div class="row col-12">          
                    <div class="col-4"></div>
                    <div class="text-center col-4 border-bottom"> 
                        <h1>Admin</h1>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4 p-3">
                        <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-10 offset-sm-2 text-start">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                Remember Me
                                </label>
                            </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">Log in</a>
                        </form>
                    </div>        
                    <div class="col-4"></div>
                </div>
                <div class="col-6 bg-body-tertiary position-absolute bottom-0 start-0 p-3">
                    <h1 class="p-3">Log in as Admin</h1>
                </div>
            </div>
        </div>
        </>
    );
}