from flask import Blueprint, render_template, flash, redirect, url_for
from flask_login import login_required, current_user
from models import User, StudentRecord, Class  # Absolute import
from forms import StudentRecordForm  # Import StudentRecordForm from forms.py

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

# Admin Dashboard
@admin_bp.route('/')
@login_required
def dashboard():
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    from app import db  # Import db locally to avoid circular import
    
    total_students = User.query.filter_by(role='Student').count()
    total_teachers = User.query.filter_by(role='Teacher').count()
    total_classes = Class.query.count()
    return render_template('admin/dashboard.html', total_students=total_students, total_teachers=total_teachers, total_classes=total_classes)

# Manage users (Add, Update, Delete)
@admin_bp.route('/manage_users', methods=['GET', 'POST'])
@login_required
def manage_users():
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    from app import db  # Import db locally to avoid circular import
    
    users = User.query.all()
    return render_template('admin/manage_users.html', users=users)

@admin_bp.route('/add_user', methods=['GET', 'POST'])
@login_required
def add_user():
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    form = StudentRecordForm()  # Instantiate the form from forms.py
    if form.validate_on_submit():
        from app import db  # Import db locally to avoid circular import
        
        # StudentRecordForm contains student_id, class_id, and grades
        user = User(username=form.username.data, email=form.email.data, role=form.role.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('User added successfully!', 'success')
        return redirect(url_for('admin.manage_users'))
    
    return render_template('admin/add_user.html', form=form)

@admin_bp.route('/edit_user/<int:user_id>', methods=['GET', 'POST'])
@login_required
def edit_user(user_id):
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    user = User.query.get_or_404(user_id)
    form = StudentRecordForm(obj=user)  # Instantiate the form and bind it to the user
    if form.validate_on_submit():
        from app import db  # Import db locally to avoid circular import
        
        user.username = form.username.data
        user.email = form.email.data
        user.role = form.role.data
        if form.password.data:
            user.set_password(form.password.data)
        db.session.commit()
        flash('User updated successfully!', 'success')
        return redirect(url_for('admin.manage_users'))
    
    return render_template('admin/edit_user.html', form=form, user=user)

@admin_bp.route('/delete_user/<int:user_id>', methods=['GET', 'POST'])
@login_required
def delete_user(user_id):
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    from app import db  # Import db locally to avoid circular import
    
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    flash('User deleted successfully!', 'success')
    return redirect(url_for('admin.manage_users'))

# Manage student records
@admin_bp.route('/manage_records', methods=['GET', 'POST'])
@login_required
def manage_records():
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    from app import db  # Import db locally to avoid circular import
    
    records = StudentRecord.query.all()
    return render_template('admin/manage_records.html', records=records)

@admin_bp.route('/edit_record/<int:record_id>', methods=['GET', 'POST'])
@login_required
def edit_record(record_id):
    if current_user.role != 'Admin':
        flash('Access Denied!', 'danger')
        return redirect(url_for('auth.login'))
    
    record = StudentRecord.query.get_or_404(record_id)
    form = StudentRecordForm(obj=record)  # Instantiate the form and bind it to the record
    if form.validate_on_submit():
        from app import db  # Import db locally to avoid circular import
        
        record.student_id = form.student_id.data
        record.class_id = form.class_id.data
        record.grades = form.grades.data
        db.session.commit()
        flash('Record updated successfully!', 'success')
        return redirect(url_for('admin.manage_records'))
    
    return render_template('admin/edit_record.html', form=form, record=record)
