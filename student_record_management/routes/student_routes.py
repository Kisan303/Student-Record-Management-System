from flask import Blueprint, render_template, flash, redirect, url_for, request, Response
from flask_login import login_required, current_user
from models import Grade, Class, Teacher, Notification, Attendance  # Absolute import
from forms import UpdateProfileForm
from sqlalchemy import or_

student_bp = Blueprint('student', __name__, url_prefix='/student')

# Student Dashboard
@student_bp.route('/')
@login_required
def dashboard():
    # Import db locally to avoid circular import
    from app import db  
    
    student_classes = Class.query.join(Grade).filter(Grade.student_id == current_user.id).all()
    grades = Grade.query.filter_by(student_id=current_user.id).all()
    teachers = Teacher.query.join(Class).filter(Class.student_id == current_user.id).all()
    notifications = Notification.query.filter_by(user_id=current_user.id).all()

    return render_template('student/dashboard.html', 
                           student_classes=student_classes, 
                           grades=grades, 
                           teachers=teachers,
                           notifications=notifications)

# View Personal Information
@student_bp.route('/profile')
@login_required
def profile():
    student = current_user
    return render_template('student/profile.html', student=student)

# Update Personal Information
@student_bp.route('/update_profile', methods=['GET', 'POST'])
@login_required
def update_profile():
    form = UpdateProfileForm()
    if form.validate_on_submit():
        current_user.address = form.address.data
        current_user.phone_number = form.phone_number.data
        current_user.save() 
        flash('Profile updated successfully!', 'success')
        return redirect(url_for('student.profile'))
    return render_template('student/update_profile.html', form=form)

# View Grades
@student_bp.route('/grades')
@login_required
def view_grades():
    # Import db locally to avoid circular import
    from app import db  
    grades = Grade.query.filter_by(student_id=current_user.id).all()
    return render_template('student/grades.html', grades=grades)

# Search for Grades
@student_bp.route('/grades/search')
@login_required
def search_grades():
    query = request.args.get('query')
    grades = Grade.query.filter(Grade.subject.like(f'%{query}%')).all()
    return render_template('student/grades.html', grades=grades)

# Export Grades to CSV
@student_bp.route('/grades/export')
@login_required
def export_grades():
    # Import db locally to avoid circular import
    from app import db  

    grades = Grade.query.filter_by(student_id=current_user.id).all()
    grades_data = [['Subject', 'Grade']]

    for grade in grades:
        grades_data.append([grade.subject, grade.grade])

    def generate():
        for row in grades_data:
            yield ','.join(row) + '\n'

    return Response(generate(), mimetype='text/csv', headers={'Content-Disposition': 'attachment; filename=grades.csv'})

# Attendance Tracking
@student_bp.route('/attendance')
@login_required
def view_attendance():
    # Import db locally to avoid circular import
    from app import db  

    attendance = Attendance.query.filter_by(student_id=current_user.id).all()
    return render_template('student/attendance.html', attendance=attendance)
