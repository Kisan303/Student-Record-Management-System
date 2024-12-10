from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from extensions import mongo  # Import mongo from extensions.py
from bson.objectid import ObjectId  # Import ObjectId
import bcrypt  # For password hashing

teacher_routes = Blueprint('teacher_routes', __name__)

# Teacher registration route
@teacher_routes.route('/teacher_register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Retrieve form data
        name = request.form['name']
        dob = request.form['dob']
        address = request.form['address']
        course = request.form['course']
        gender = request.form['gender']
        phone = request.form['phone']
        email = request.form['email']
        password = request.form['password']

        # Check if email already exists
        existing_teacher = mongo.db.teachers.find_one({"email": email})
        if existing_teacher:
            flash("Email already exists. Please use a different email.", "danger")
            return redirect(url_for('teacher_routes.register'))

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Create the teacher data
        teacher_data = {
            "name": name,
            "dob": dob,
            "address": address,
            "course": course,
            "gender": gender,
            "phone": phone,
            "email": email,
            "password": hashed_password  # Store hashed password
        }

        # Insert into the database
        mongo.db.teachers.insert_one(teacher_data)
        flash("Registration successful! Please log in.", "success")
        return redirect(url_for('teacher_routes.login'))

    return render_template('teacher/teacher_register.html')


# Teacher login route
@teacher_routes.route('/teacher_login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Find the teacher by email
        teacher = mongo.db.teachers.find_one({"email": email})
        if teacher and bcrypt.checkpw(password.encode('utf-8'), teacher['password'].encode('utf-8')):
            # Store teacher's ID in session
            session['teacher_id'] = str(teacher['_id'])
            flash("Login successful!", "success")
            return redirect(url_for('teacher_routes.teacher_dashboard'))

        flash("Invalid email or password. Please try again.", "danger")
    return render_template('teacher/teacher_login.html')

# Teacher dashboard route
@teacher_routes.route('/teacher_dashboard')
def teacher_dashboard():
    if 'teacher_id' not in session:
        flash("Please log in first.", "warning")
        return redirect(url_for('teacher_routes.login'))

    teacher = mongo.db.teachers.find_one({"_id": ObjectId(session['teacher_id'])})
    if not teacher:
        flash("Teacher not found.", "danger")
        return redirect(url_for('teacher_routes.login'))

    # Fetch students enrolled in the same course
    students_in_course_cursor = mongo.db.students.find({"course": teacher['course']})

    # Get the count of students without loading all into memory
    student_count = len(list(students_in_course_cursor))  # Use len() on the list of students

    # Re-fetch the cursor to reset it before iteration
    students_in_course_cursor = mongo.db.students.find({"course": teacher['course']})

    # Fetch student details for display
    student_details = []
    for student in students_in_course_cursor:
        student_details.append({
            "id": str(student['_id']),
            "name": student.get("name"),
            "email": student.get("email"),
            "dob": student.get("dob"),
            "gender": student.get("gender"),
            "phone": student.get("phone"),
            "address": student.get("address"),
        })

    # Debugging: Check the list of students
    print(student_details)

    return render_template('teacher/teacher_dashboard.html', teacher=teacher, student_count=student_count, student_details=student_details)




# View student details route
@teacher_routes.route('/view_student/<student_id>')
def view_student(student_id):
    student = mongo.db.students.find_one({"_id": ObjectId(student_id)})
    if not student:
        flash("Student not found.", "danger")
        return redirect(url_for('teacher_routes.teacher_dashboard'))

    return render_template('teacher/view_student.html', student=student)


# Teacher logout route
@teacher_routes.route('/teacher_logout')
def logout():
    session.pop('teacher_id', None)
    flash("You have been logged out.", "info")
    return redirect(url_for('teacher_routes.login'))
