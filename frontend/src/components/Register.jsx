export default function Register(){
    return (
        <>
            <div class="col-12 bg-primary-subtle text-primary-emphasis vh-100  d-flex align-items-center justify-content-center">
            <div class="row col-12">        
                <div class="col-4"></div>
                <div class="text-center col-4 border-bottom"> 
                <h1>Create New User</h1>
                </div>
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4 p-3 position-flex top-0 start-50">
                    <form class="row g-3">
                        <div class="row g-3 col-12">
                            <div class="col-md-12">
                                <label for="inputName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" required/>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <label for="inputDateOfBirth" class="form-label">Date of Birth</label>
                            <input type="date" class="form-control" id="inputDateOfBirth" required/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputRole" class="form-label">Role</label>
                            <select id="inputRole" class="form-select">
                            <option selected>Admin</option>
                            <option>Faculty Staff</option>
                            <option>Student</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" required/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" required/>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" required/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" required/>
                                <label class="form-check-label text-start" for="gridCheck">
                                    By registering an account, you agree to SMRS Conditions of Use and Privacy Notice.
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <a href="/" class="btn btn-primary">Submit</a>
                        </div>
                    </form>
                </div>        
                <div class="col-4"></div>
            </div>
            </div>
        </>
    );
}