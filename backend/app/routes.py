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
classSection_collection = db["class"]
classRecord_collection = db["record"]


# Empty table
# users_collection.drop()
# classSection_collection.drop()
# classRecord_collection.drop()
# To add data to MongoDB we can use the client and the functions insert_many() or insert_one()
# insert_many() allows you to add a list of JSONs
# insert_one() allows you to add a single JSON

# mock_data = [{"role": "admin", "firstname": "Kisan", "lastname": "Rai", "username": "test_admin", "email": "test_admin@gmail.com", "password": "admin1234"}]
# mock_section = [{"section": 1, "course_code": "CSD-3103", "course_name": "Full Stack Java Script"},
#                 {"section": 1, "course_code": "CSD-4303", "course_name": "Cloud Computing"},
#                 {"section": 2, "course_code": "CSD-4453", "course_name": "Programming Java EE"},
#                 {"section": 2, "course_code": "CSD-2456", "course_name": "Front-End Web Development"}]
# mock_record = [{"section_id": "67563424aa3190014545e37c", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755e852e3d3fa95f412bcf9", "grade": 3.2},
#                {"section_id": "67563424aa3190014545e37c", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755f0bec5e20a4282cce633", "grade": 3.6},
#                {"section_id": "67563424aa3190014545e37c", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755f87638d16dce2c95a62a", "grade": 3.9},
#                {"section_id": "67563424aa3190014545e37d", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755e852e3d3fa95f412bcf9", "grade": 3.0},
#                {"section_id": "67563424aa3190014545e37d", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755f0bec5e20a4282cce633", "grade": 2.8},
#                {"section_id": "67563424aa3190014545e37d", "teacher_id": "6755f80c38d16dce2c95a629", "student_id": "6755f87638d16dce2c95a62a", "grade": 3.1}]

# users_collection.insert_many(mock_data)
# classSection_collection.insert_many(mock_section)
# classRecord_collection.insert_many(mock_record)

@flask_app.route("/<string:user_id>", methods=['GET'])
def get_user(user_id):
    #data = request.get_json()
    #user_id = id
    # print(user_id)
    user = users_collection.find_one({"_id": ObjectId(str(user_id))})
    print(user)
    return json.dumps(user, default=str), 200

@flask_app.route("/delete_user/<string:email>", methods=['DELETE'])
def delete_user(email):
    #data = request.get_json()
    #user_id = id
    # print(user_id)
    user = users_collection.delete_one({"email": str(email)})
    print(user)
    return json.dumps(user, default=str), 200

@flask_app.route("/update_user/<string:user_id>", methods=['PUT'])
def update_user(user_id):
    edit_user = request.json
    print(edit_user)
    user = users_collection.replace_one({"_id": ObjectId(str(user_id))},{"$set": edit_user})
    print(user)
    return json.dumps(user, default=str), 200

@flask_app.route("/get_class", methods=['GET'])
def get_class():
    try:
        documents = classSection_collection.find()
        # Convert the cursor to a list of dictionaries
        classes = []
        for document in documents:
            # Convert _id to string to make it JSON serializable
            document["_id"] = str(document["_id"])
            classes.append(document)
        #classes = list(classSection_collection.find({}, {"_id": "_id"}))
        print(classes)
        return jsonify(classes), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@flask_app.route("/get_all_users", methods=['GET'])
def get_all_users():
    try:
        documents = users_collection.find()
        users = []
        for document in documents:
            document["_id"] = str(document["_id"])
            users.append(document)
        #users = list(users_collection.find({}, {"_id": 0}))
        print(users)
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@flask_app.route("/get_record", methods=['GET'])
def get_record():
    try:
        documents = classRecord_collection.find()
        records =[]
        for document in documents:
            document["_id"] = str(document["_id"])
            records.append(document)
        #records = list(classRecord_collection.find({}, {"_id": 0}))
        print(records)
        return jsonify(records), 200
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