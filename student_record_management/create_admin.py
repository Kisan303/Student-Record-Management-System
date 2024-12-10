from flask import Flask
from flask_pymongo import PyMongo
import bcrypt

# Setup Flask and MongoDB
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://root:ZOKW1BKK0MwcEN9H@cluster0.onoha.mongodb.net/student_db?retryWrites=true&w=majority"
mongo = PyMongo(app)

# Admin credentials
username = "admin"
password = "admin123"  # Plaintext password

# Hash the password using bcrypt
hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Prepare admin data
admin_data = {
    "username": username,
    "password": hashed_password.decode('utf-8')  # Store the hashed password as a string
}

# Insert the admin data into the 'admins' collection
mongo.db.admins.insert_one(admin_data)

print("Admin created successfully with username 'admin' and password 'admin123'!")
