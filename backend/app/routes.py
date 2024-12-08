from bson import ObjectId
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
# users_collection.drop()

# To add data to MongoDB we can use the client and the functions insert_many() or insert_one()
# insert_many() allows you to add a list of JSONs
# insert_one() allows you to add a single JSON

# mock_data = [{"role": "admin", "firstname": "Kisan", "lastname": "Rai", "username": "test_admin", "email": "test_admin@gmail.com", "password": "admin1234"},
#              {"role": "teacher", "firstname": "Mahan", "lastname": "Timalsena", "username": "test_teacher", "email": "test_teacher@gmail.com",  "password": "teacher1234"},
#              {"role": "student", "firstname": "Ralph", "lastname": "Ompoc", "username": "test_student", "email": "test_student@gmail.com",  "password": "student1234"}]

# users_collection.insert_many(mock_data)

@flask_app.route("/<string:user_id>", methods=['GET'])
def home(user_id):
    #data = request.get_json()
    #user_id = id
    print(user_id)
    user = users_collection.find_one({"_id": ObjectId(str(user_id))})
    return json.dumps(user, default=str)

@flask_app.route("/get_all_users", methods=['GET'])
def get_all_users():
    try:
        users = list(users_collection.find({}, {"_id": 0}))
        print(users)
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@flask_app.route("/register", methods=['POST'])
def register():
    register_user = request.get_json()
    users_collection.insert_one(register_user)
    print(register_user)
    return json.dumps({"message": "Successfully registered!"}, default=str), 200

@flask_app.route("/login", methods=['GET','POST'])
def login():
    data = request.get_json()
    email_user = data.get('email')
    password_user = data.get('password')
    print(data)
    print(email_user)
    print(password_user)
    email_search = email_user
    password_search = password_user
    user = users_collection.find_one({"email": email_search})
    if user:
        email = str(user.get("email"))
        password = str(user.get("password"))
        print(f"Email: {email}")
        if str(email_search) == str(email) and str(password_search) == str(password):
            print("Success")
            print(str(user))
            print(str(user.get("_id")))
            return json.dumps(user, default=str), 200
        else:
            print("Failed")
            return json.dumps({"message": "Fail to Login!"}, default=str), 401
    else:
        print("User not registered!")
        return json.dumps({"message": "User not registered!"}, default=str), 401

@flask_app.route("/mongo_conn")
def mongo_conn():
    client = mongodb_client
    client.users.command('ping')
    return jsonify({"status": "Successfully Connected to MongoDB"}), 200

def db_collection():
    dbs = mongodb_client["smrs_app"]
    users_collections = dbs["users"]
    return jsonify(users_collections)