from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, login_user, login_required, logout_user
from flask_mail import Mail
from config import Config
from routes.admin_routes import admin_bp
from routes.teacher_routes import teacher_bp
from routes.student_routes import student_bp
from models import User, Teacher, Class, StudentRecord, Grade, Attendance, Notification  # Absolute import
from forms import LoginForm  # Import the LoginForm from forms.py
from werkzeug.security import check_password_hash  # To check hashed passwords

# Initialize the app and extensions
app = Flask(__name__)
app.config.from_object(Config)  # Load configuration from Config class

# Database setup
db = SQLAlchemy(app)  
migrate = Migrate(app, db)

# User authentication setup
login_manager = LoginManager(app)
login_manager.login_view = 'auth.login'  # Redirect to login if not authenticated

# Email setup
mail = Mail(app)

# Register blueprints
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(teacher_bp, url_prefix='/teacher')
app.register_blueprint(student_bp, url_prefix='/student')

# Root route
@app.route('/')
def home():
    return render_template('home.html')

# User login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()  # Instantiate the login form
    
    if form.validate_on_submit():
        # Get user by username or email
        user = User.query.filter(
            (User.username == form.username_or_email.data) | 
            (User.email == form.username_or_email.data)
        ).first()
        
        if user and check_password_hash(user.password, form.password.data):  # Validate password
            login_user(user, remember=form.remember.data)  # Log the user in
            
            # Redirect to the user's dashboard based on role
            if user.role == 'Admin':
                return redirect(url_for('admin.dashboard'))
            elif user.role == 'Teacher':
                return redirect(url_for('teacher.dashboard'))
            elif user.role == 'Student':
                return redirect(url_for('student.dashboard'))
            else:
                flash('Role not recognized', 'danger')
                return redirect(url_for('login'))
        
        else:
            flash('Login Unsuccessful. Check your username/email and password', 'danger')

    return render_template('auth/login.html', form=form)

# User logout route
@app.route('/logout')
@login_required
def logout():
    logout_user()  # Log the user out
    return redirect(url_for('home'))

# Error handling routes
@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()  # Rollback any database changes in case of error
    return render_template('errors/500.html'), 500

# Initialize Flask extensions and app context
if __name__ == "__main__":
    app.run(debug=True)  # Set debug=False for production

# Flask-Login user loader function
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
