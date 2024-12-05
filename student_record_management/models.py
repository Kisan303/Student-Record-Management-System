from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime

db = SQLAlchemy()
bcrypt = Bcrypt()

# User Model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), nullable=False)  # Admin, Teacher, Student
    email = db.Column(db.String(150), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=True)
    
    # Relationships
    notifications = db.relationship('Notification', backref='recipient', lazy=True)
    classes = db.relationship('Class', backref='teacher', lazy=True, foreign_keys='Class.teacher_id')
    student_records = db.relationship('StudentRecord', backref='student', lazy=True, foreign_keys='StudentRecord.student_id')

    def set_password(self, password):
        """Encrypts and sets the password."""
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        """Checks if the password matches."""
        return bcrypt.check_password_hash(self.password, password)


# Teacher Model (added)
class Teacher(db.Model):
    __tablename__ = 'teachers'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Link to User
    department = db.Column(db.String(100), nullable=True)
    
    # Relationship with User
    user = db.relationship('User', backref='teacher', uselist=False)
    
    # Optional: Add unique constraints or additional fields for teacher-specific data

    def __repr__(self):
        return f'<Teacher {self.user.username}, Department: {self.department}>'


# Class Model
class Class(db.Model):
    __tablename__ = 'classes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Teacher assigned to the class
    
    # Relationships
    students = db.relationship('StudentRecord', backref='class_info', lazy=True)

    # Optional: Add unique constraint for class name per teacher
    __table_args__ = (db.UniqueConstraint('name', 'teacher_id', name='uix_1'),)


# Student Record Model
class StudentRecord(db.Model):
    __tablename__ = 'student_records'
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Reference to Student
    class_id = db.Column(db.Integer, db.ForeignKey('classes.id'), nullable=False)  # Reference to Class
    grades = db.Column(db.String(10), nullable=True)  # Optional grades
    notes = db.Column(db.Text, nullable=True)  # Optional additional notes

    # Relationships to Class and User
    student = db.relationship('User', backref='student_records')
    class_info = db.relationship('Class', backref='student_records')


# Grade Model (added)
class Grade(db.Model):
    __tablename__ = 'grades'
    id = db.Column(db.Integer, primary_key=True)
    grade = db.Column(db.String(2), nullable=False)  # e.g. A, B, C, etc.
    student_record_id = db.Column(db.Integer, db.ForeignKey('student_records.id'), nullable=False)  # Link to Student Record
    student_record = db.relationship('StudentRecord', backref='grades')  # Relationship with Student Record

    def __repr__(self):
        return f'<Grade {self.grade} for StudentRecord {self.student_record_id}>'
    
# Attendance Model (added)
class Attendance(db.Model):
    __tablename__ = 'attendance'
    id = db.Column(db.Integer, primary_key=True)
    student_record_id = db.Column(db.Integer, db.ForeignKey('student_records.id'), nullable=False)  # Link to Student Record
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)  # Date of the attendance
    status = db.Column(db.String(50), nullable=False)  # e.g., "Present", "Absent", "Late"

    # Relationship with StudentRecord
    student_record = db.relationship('StudentRecord', backref='attendance')

    def __repr__(self):
        return f'<Attendance {self.status} for StudentRecord {self.student_record_id} on {self.date}>'



# Notification Model
class Notification(db.Model):
    __tablename__ = 'notifications'
    id = db.Column(db.Integer, primary_key=True)
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Reference to User
    message = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationship to User
    recipient = db.relationship('User', backref='notifications')
