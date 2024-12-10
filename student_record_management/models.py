from datetime import datetime
from flask import current_app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

# User Model (MongoDB Version)
class User:
    def __init__(self, username, password, role, email, phone=None):
        self.username = username
        self.password = password
        self.role = role
        self.email = email
        self.phone = phone

    def set_password(self, password):
        """Encrypts and sets the password."""
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        """Checks if the password matches."""
        return bcrypt.check_password_hash(self.password, password)

# Teacher Model (MongoDB Version)
class Teacher:
    def __init__(self, user_id, department=None):
        self.user_id = user_id
        self.department = department

# Class Model (MongoDB Version)
class Class:
    def __init__(self, name, teacher_id):
        self.name = name
        self.teacher_id = teacher_id

# Student Record Model (MongoDB Version)
class StudentRecord:
    def __init__(self, student_id, class_id, grades=None, notes=None):
        self.student_id = student_id
        self.class_id = class_id
        self.grades = grades
        self.notes = notes

# Grade Model (MongoDB Version)
class Grade:
    def __init__(self, grade, student_record_id):
        self.grade = grade
        self.student_record_id = student_record_id

# Attendance Model (MongoDB Version)
class Attendance:
    def __init__(self, student_record_id, date=None, status=None):
        self.student_record_id = student_record_id
        self.date = date or datetime.utcnow()
        self.status = status

# Notification Model (MongoDB Version)
class Notification:
    def __init__(self, recipient_id, message, timestamp=None):
        self.recipient_id = recipient_id
        self.message = message
        self.timestamp = timestamp or datetime.utcnow()
