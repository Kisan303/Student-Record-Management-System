from flask import Flask
from flask_pymongo import PyMongo
import bcrypt
from config import Config

# Setup Flask and MongoDB
app = Flask(__name__)
app.config["MONGO_URI"] = Config.MONGO_URI
mongo = PyMongo(app)

def create_admin():
    # Load admin credentials from Config
    username = Config.ADMIN_USERNAME
    password = Config.ADMIN_PASSWORD

    # Check if admin already exists
    if mongo.db.admins.find_one({"username": username}):
        print("Admin user already exists!")
        return

    # Hash the password using bcrypt
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Prepare admin data
    admin_data = {
        "username": username,
        "password": hashed_password.decode('utf-8')  # Store the hashed password as a string
    }

    # Insert the admin data into the 'admins' collection
    mongo.db.admins.insert_one(admin_data)
    print("Admin created successfully with username '{}'!".format(username))

if __name__ == "__main__":
    with app.app_context():
        create_admin()
