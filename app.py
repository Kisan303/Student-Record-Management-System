from flask import Flask
from extensions import mongo
from routes.admin_routes import admin_routes
from routes.teacher_routes import teacher_routes
from routes.student_routes import student_routes
from config import Config  # Import the Config class

# Create the Flask app
app = Flask(__name__)

# Apply configuration from the Config class
app.config.from_object(Config)

# Initialize the PyMongo instance with the app
mongo.init_app(app)

# Test route to check MongoDB connection
@app.route('/test_db')
def test_db():
    try:
        # Try to access the MongoDB database
        db = mongo.db  # Get the database instance from the PyMongo object
        # Check if the 'students' collection exists (as an example)
        students_collection = db.students
        count = students_collection.count_documents({})  # Count documents in the 'students' collection
        return f"MongoDB connection successful! Found {count} students in the database."
    except Exception as e:
        return f"Error connecting to MongoDB: {str(e)}"

# Register Blueprints
app.register_blueprint(admin_routes, url_prefix='/admin')
app.register_blueprint(teacher_routes, url_prefix='/teacher')
app.register_blueprint(student_routes, url_prefix='/student')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
