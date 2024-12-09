from flask import Blueprint, render_template, request, redirect, url_for, flash, session, send_file
from extensions import mongo  # Import mongo from extensions.py
import bcrypt  # Import bcrypt for password hashing
from bson import ObjectId  # Import ObjectId from bson
import io
import csv

admin_routes = Blueprint('admin_routes', __name__)

# Admin login route
@admin_routes.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Find the admin user in the database
        admin = mongo.db.admins.find_one({"username": username})

        # Check if admin exists and password matches (hashed comparison)
        if admin and bcrypt.checkpw(password.encode('utf-8'), admin['password'].encode('utf-8')):
            # Store admin's ObjectId as a string in the session
            session['admin'] = str(admin['_id'])
            return redirect(url_for('admin_routes.admin_dashboard'))

        flash("Invalid credentials", "danger")
    return render_template('admin/login.html')


# Admin dashboard route
@admin_routes.route('/admin_dashboard')
def admin_dashboard():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    return render_template('admin/admin_dashboard.html')

# Add student route
@admin_routes.route('/add_student', methods=['GET', 'POST'])
def add_student():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    if request.method == 'POST':
        student_data = {
            "name": request.form["name"],
            "dob": request.form["dob"],
            "address": request.form["address"],
            "course": request.form["course"],
            "gender": request.form["gender"],
            "phone": request.form["phone"],
            "email": request.form["email"],
            "password": bcrypt.hashpw(request.form["password"].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')  # Password hashing
        }
        mongo.db.students.insert_one(student_data)
        flash("Student added successfully!", "success")
        return redirect(url_for('admin_routes.manage_students'))
    return render_template('admin/add_student.html')


# Update student route
@admin_routes.route('/update_student/<student_id>', methods=['GET', 'POST'])
def update_student(student_id):
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    student = mongo.db.students.find_one({"_id": ObjectId(student_id)})
    
    if not student:
        flash("Student not found.", "danger")
        return redirect(url_for('admin_routes.manage_students'))

    if request.method == 'POST':
        updated_data = {
            "name": request.form["name"],
            "dob": request.form["dob"],
            "address": request.form["address"],
            "course": request.form["course"],
            "gender": request.form["gender"],
            "phone": request.form["phone"],
            "email": request.form["email"]
        }
        mongo.db.students.update_one({"_id": ObjectId(student_id)}, {"$set": updated_data})
        flash("Student updated successfully!", "success")
        return redirect(url_for('admin_routes.manage_students'))

    return render_template('admin/update_student.html', student=student)


# Delete student route
@admin_routes.route('/delete_student/<student_id>', methods=['POST'])
def delete_student(student_id):
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    mongo.db.students.delete_one({"_id": ObjectId(student_id)})
    flash("Student deleted successfully!", "success")
    return redirect(url_for('admin_routes.manage_students'))


# Manage students route
@admin_routes.route('/manage_students')
def manage_students():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    students = mongo.db.students.find()
    return render_template('admin/manage_students.html', students=students)


# Generate report route
@admin_routes.route('/generate_report')
def generate_report():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))

    students = mongo.db.students.find()  
    student_list = list(students)
    
    if len(student_list) == 0:
        flash("No students found to generate report.", "warning")
        return redirect(url_for('admin_routes.manage_students'))

    output = io.BytesIO()
    csv_writer = csv.writer(io.TextIOWrapper(output, encoding='utf-8', newline=''))

    csv_writer.writerow(["Name", "DOB", "Address", "Course", "Gender", "Phone", "Email"])

    for student in student_list:
        csv_writer.writerow([
            student.get('name', ''),
            student.get('dob', ''),
            student.get('address', ''),
            student.get('course', ''),
            student.get('gender', ''),
            student.get('phone', ''),
            student.get('email', '')
        ])

    output.seek(0)
    return send_file(output, mimetype='text/csv', as_attachment=True, download_name="students_report.csv")


# Add teacher route
@admin_routes.route('/add_teacher', methods=['GET', 'POST'])
def add_teacher():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    if request.method == 'POST':
        teacher_data = {
            "name": request.form["name"],
            "dob": request.form["dob"],
            "address": request.form["address"],
            "course": request.form["course"],
            "phone": request.form["phone"],
            "email": request.form["email"],
            "password": bcrypt.hashpw(request.form["password"].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')  # Password hashing
        }
        mongo.db.teachers.insert_one(teacher_data)
        flash("Teacher added successfully!", "success")
        return redirect(url_for('admin_routes.manage_teachers'))
    return render_template('admin/add_teacher.html')

# Update teacher route
@admin_routes.route('/update_teacher/<teacher_id>', methods=['GET', 'POST'])
def update_teacher(teacher_id):
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    teacher = mongo.db.teachers.find_one({"_id": ObjectId(teacher_id)})
    
    if not teacher:
        flash("Teacher not found.", "danger")
        return redirect(url_for('admin_routes.manage_teachers'))

    if request.method == 'POST':
        updated_data = {
            "name": request.form["name"],
            "dob": request.form["dob"],
            "address": request.form["address"],
            "course": request.form["course"],
            "phone": request.form["phone"],
            "email": request.form["email"]
        }
        mongo.db.teachers.update_one({"_id": ObjectId(teacher_id)}, {"$set": updated_data})
        flash("Teacher updated successfully!", "success")
        return redirect(url_for('admin_routes.manage_teachers'))

    return render_template('admin/update_teacher.html', teacher=teacher)

# Delete teacher route
@admin_routes.route('/delete_teacher/<teacher_id>', methods=['POST'])
def delete_teacher(teacher_id):
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    mongo.db.teachers.delete_one({"_id": ObjectId(teacher_id)})
    flash("Teacher deleted successfully!", "success")
    return redirect(url_for('admin_routes.manage_teachers'))

# Manage teachers route
@admin_routes.route('/manage_teachers')
def manage_teachers():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))
    
    teachers = mongo.db.teachers.find()
    return render_template('admin/manage_teachers.html', teachers=teachers)

# Generate report route for teachers
@admin_routes.route('/generate_teacher_report')
def generate_teacher_report():
    if 'admin' not in session:
        return redirect(url_for('admin_routes.login'))

    teachers = mongo.db.teachers.find()
    teacher_list = list(teachers)
    
    if len(teacher_list) == 0:
        flash("No teachers found to generate report.", "warning")
        return redirect(url_for('admin_routes.manage_teachers'))

    output = io.BytesIO()
    csv_writer = csv.writer(io.TextIOWrapper(output, encoding='utf-8', newline=''))

    csv_writer.writerow(["Name", "DOB", "Address", "Department", "Phone", "Email"])

    for teacher in teacher_list:
        csv_writer.writerow([
            teacher.get('name', ''),
            teacher.get('dob', ''),
            teacher.get('address', ''),
            teacher.get('course', ''),
            teacher.get('phone', ''),
            teacher.get('email', '')
        ])

    output.seek(0)
    return send_file(output, mimetype='text/csv', as_attachment=True, download_name="teachers_report.csv")


# Logout route
@admin_routes.route('/logout')
def logout():
    session.pop('admin', None)
    flash("You have been logged out.", "info")
    return redirect(url_for('admin_routes.login'))
