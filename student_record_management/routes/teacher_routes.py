from flask import Blueprint, render_template, flash, redirect, url_for
from flask_login import login_required, current_user
from models import User, StudentRecord, Class  # Absolute import
from forms import StudentRecordForm  # Importing the form

teacher_bp = Blueprint('teacher', __name__, url_prefix='/teacher')

# Teacher dashboard
@teacher_bp.route('/')
@login_required
def dashboard():
    if current_user.role != 'Teacher':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    # Import db locally to avoid circular import
    from app import db  
    
    # Get the classes assigned to the teacher
    classes = Class.query.filter_by(teacher_id=current_user.id).all()
    return render_template('teacher/dashboard.html', classes=classes)

# Manage grades for assigned students
@teacher_bp.route('/manage_grades/<int:class_id>', methods=['GET', 'POST'])
@login_required
def manage_grades(class_id):
    if current_user.role != 'Teacher':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    # Import db locally to avoid circular import
    from app import db  
    
    # Get students enrolled in the class
    students = User.query.filter_by(class_id=class_id, role='Student').all()
    return render_template('teacher/manage_grades.html', students=students, class_id=class_id)

# Edit grade for a student
@teacher_bp.route('/edit_grade/<int:student_id>', methods=['GET', 'POST'])
@login_required
def edit_grade(student_id):
    if current_user.role != 'Teacher':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    # Import db locally to avoid circular import
    from app import db  
    
    # Get the student record
    record = StudentRecord.query.filter_by(student_id=student_id).first()
    
    # If no record found, redirect with a flash message
    if not record:
        flash('Student record not found.', 'danger')
        return redirect(url_for('teacher.manage_grades', class_id=record.class_id))

    # Instantiate the form with the existing record
    form = StudentRecordForm(obj=record)
    if form.validate_on_submit():
        # Update the grade
        record.grades = form.grades.data
        db.session.commit()
        flash('Grade updated successfully!', 'success')
        return redirect(url_for('teacher.manage_grades', class_id=record.class_id))

    # Render the template for editing grade
    return render_template('teacher/edit_grade.html', form=form, record=record)
