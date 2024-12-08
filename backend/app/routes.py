from flask import Flask, jsonify, request
import json

from app import flask_app, render_template, jsonify

from dotenv import load_dotenv
from pymongo import MongoClient
import os

#Read the .env file
load_dotenv()

# Username and Password
db_username = os.environ.get("MONGODB_USERNAME")
db_password = os.environ.get("MONGODB_PASSWORD")

# Creates the Mongodb Client
mongodb_client = MongoClient(f"mongodb+srv://{db_username}:{db_password}@cluster0.dr7cs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

# To access database from the client
db = mongodb_client["smrs_app"]
users_collection = db["users"]

# Empty table
users_collection.drop()

# To add data to MongoDB we can use the client and the functions insert_many() or insert_one()
# insert_many() allows you to add a list of JSONs
# insert_one() allows you to add a single JSON

mock_data = [{"role": "admin", "username": "test_admin", "email": "test_admin@gmail.com", "password": "admin1234"},
             {"role": "teacher", "username": "test_teacher", "email": "test_teacher@gmail.com",  "password": "teacher1234"},
             {"role": "student", "username": "test_student", "email": "test_student@gmail.com",  "password": "student1234"},
             {"role": "admin", "username": "test_admin1", "email": "test_admin1@gmail.com",  "password": "admin12345"},
             {"role": "teacher", "username": "test_teacher1", "email": "test_teacher1@gmail.com",  "password": "teacher12345"},
             {"role": "student", "username": "test_student1", "email": "test_student1@gmail.com",  "password": "student12345"}]

users_collection.insert_many(mock_data)

@flask_app.route("/", methods=['GET'])
def home():
    email_search = "test_admin@gmail.com"
    user = users_collection.find_one({"email": email_search})
    return json.dumps(user, default=str)

@flask_app.route("/users", methods=['GET','POST'])
def users():
    data = request.get_json()
    email_pass = data.get('email')
    print(data)
    print(email_pass)
    email_search = email_pass
    password_search = "admin1234"
    user = users_collection.find_one({"email": email_search})
    if user:
        email = str(user.get("email"))
        password = str(user.get("password"))
        print(f"Email: {email}")
        if str(email_search) == str(email) and str(password_search) == str(password):
            print("Success")
            return str(user)
        else:
            print("Failed")
            return str({"message": "Fail to Login!"})
    else:
        print("User not registered!")
        return str({"message": "User not registered!"})

@flask_app.route("/mongo_conn")
def mongo_conn():
    client = mongodb_client
    client.users.command('ping')
    return jsonify({"status": "Successfully Connected to MongoDB"}), 200

def db_collection():
    dbs = mongodb_client["smrs_app"]
    users_collections = dbs["users"]
    return jsonify(users_collections)