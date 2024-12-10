from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from extensions import mongo  # Import mongo from extensions.py
from bson.objectid import ObjectId  # Import ObjectId
import bcrypt  # For password hashing

student_routes = Blueprint('student_routes', __name__)

# Student registration route
@student_routes.route('/student_register', methods=['GET', 'POST'])
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
        existing_student = mongo.db.students.find_one({"email": email})
        if existing_student:
            flash("Email already exists. Please use a different email.", "danger")
            return redirect(url_for('student_routes.register'))

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # Create the student data
        student_data = {
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
        mongo.db.students.insert_one(student_data)
        flash("Registration successful! Please log in.", "success")
        return redirect(url_for('student_routes.login'))

    return render_template('student/student_register.html')


# Student login route
@student_routes.route('/student_login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Find the student by email
        student = mongo.db.students.find_one({"email": email})
        if student and bcrypt.checkpw(password.encode('utf-8'), student['password'].encode('utf-8')):
            # Store student's ID in session
            session['student_id'] = str(student['_id'])
            flash("Login successful!", "success")
            return redirect(url_for('student_routes.student_dashboard'))

        flash("Invalid email or password. Please try again.", "danger")
    return render_template('student/student_login.html')


# Student dashboard route
@student_routes.route('/student_dashboard')
def student_dashboard():
    if 'student_id' not in session:
        flash("Please log in first.", "warning")
        return redirect(url_for('student_routes.login'))

    student = mongo.db.students.find_one({"_id": ObjectId(session['student_id'])})
    if not student:
        flash("Student not found.", "danger")
        return redirect(url_for('student_routes.login'))

    return render_template('student/student_dashboard.html', student=student)


# Student logout route
@student_routes.route('/student_logout')
def logout():
    session.pop('student_id', None)
    flash("You have been logged out.", "info")
    return redirect(url_for('student_routes.login'))
