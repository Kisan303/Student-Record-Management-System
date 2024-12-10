from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, Length, EqualTo, Optional
from models import User, Class  # Import MongoDB models

# Login Form
class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(), Length(min=3, max=150)])
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Login")

# Registration Form
class RegistrationForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(), Length(min=3, max=150)])
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField("Confirm Password", validators=[DataRequired(), EqualTo('password')])
    role = SelectField("Role", choices=[('Admin', 'Admin'), ('Teacher', 'Teacher'), ('Student', 'Student')], validators=[DataRequired()])
    submit = SubmitField("Register")

# Profile Update Form (Student)
class UpdateProfileForm(FlaskForm):
    email = StringField("Email", validators=[Optional(), Email()])
    phone = StringField("Phone", validators=[Optional(), Length(min=10, max=15)])
    address = StringField("Address", validators=[Optional(), Length(max=255)])
    username = StringField("Username", validators=[Optional(), Length(min=3, max=150)])
    password = PasswordField("Password", validators=[Optional(), Length(min=6)])
    confirm_password = PasswordField("Confirm Password", validators=[Optional(), EqualTo('password')])
    submit = SubmitField("Update Profile")

# Add or Update Student Record Form (Admin/Teacher)
class StudentRecordForm(FlaskForm):
    student_id = SelectField("Student", coerce=int, validators=[DataRequired()])
    class_id = SelectField("Class", coerce=int, validators=[DataRequired()])
    grades = StringField("Grades", validators=[Optional(), Length(max=10)])
    submit = SubmitField("Save Record")

    def __init__(self, *args, **kwargs):
        super(StudentRecordForm, self).__init__(*args, **kwargs)
        
        # Dynamically populate SelectField for students and classes from MongoDB
        self.student_id.choices = [(str(student['_id']), student['username']) for student in mongo.db.users.find({'role': 'Student'})]
        self.class_id.choices = [(str(cls['_id']), cls['name']) for cls in mongo.db.classes.find()]

# Filter Student Records Form
class FilterRecordsForm(FlaskForm):
    class_id = IntegerField("Class ID", validators=[Optional()])
    grade = StringField("Grade", validators=[Optional(), Length(max=10)])
    teacher_id = IntegerField("Teacher ID", validators=[Optional()])
    submit = SubmitField("Filter Records")

# Notification Form
class NotificationForm(FlaskForm):
    recipient_id = IntegerField("Recipient ID", validators=[DataRequired()])
    message = TextAreaField("Message", validators=[DataRequired(), Length(max=500)])
    submit = SubmitField("Send Notification")
