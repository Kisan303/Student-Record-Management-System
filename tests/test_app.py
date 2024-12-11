import pytest
from flask import jsonify

from app import app
import unittest

# MongoDB mock test
from dotenv import load_dotenv
from pymongo import MongoClient
import pymongo
import os


# Reference: https://www.mongodb.com/developer/products/mongodb/pytest-fixtures-and-pypi/
@pytest.fixture(scope="session")
def mongodb():
    # Read the .env file
    load_dotenv()
    # Username and Password
    # db_username = os.environ.get("MONGODB_USERNAME")
    # db_password = os.environ.get("MONGODB_PASSWORD")
    client_url = os.environ.get("MONGO_URI")
    client = pymongo.MongoClient(client_url)
    assert client.admin.command("ping")["ok"] != 0.0  # Check that the connection is okay.
    return client


def test_mongodb_fixture(mongodb):
    """ This test will pass if MDB_URI is set to a valid connection string. """
    assert mongodb.admin.command("ping")["ok"] > 0


@pytest.fixture
def rollback_session(mongodb):
    session = mongodb.start_session()
    session.start_transaction()
    try:
        yield session
    finally:
        session.abort_transaction()


# Testing inserting data by adding new data and check in database if the is successful
def test_insert_mongodb(mongodb, rollback_session):
    new_data = {"name": "Penny Sheldon", "dob": "1996-01-25", "address": "Sarnia, ON, CANADA", "course": "Mobile Application", "gender": "Female", "email": "penny@hotmail.com", "password": "test1234"}
    db = mongodb["student_db"]
    students_coll = db["students"]
    students_coll.insert_one(new_data, session=rollback_session, )
    assert (students_coll.find_one({"email": "penny@hotmail.com"}, session=rollback_session) != None)


class FlaskTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    # Testing the index if post is implemented
    def test_unknown_route(self):
        response = self.app.get("/new-account")
        print("The received status code: ", response.status_code)
        print("The expected status code: ", 404)
        self.assertEqual(first=response.status_code, second=404)

    # Testing the index if get is implemented
    def test_home_page_route(self):
        response = self.app.get("/")
        print("The received status code: ", response.status_code)
        print("The expected status code: ", 200)
        self.assertEqual(first=response.status_code, second=200)

    # Testing the index if the "Welcome to Dalmart" is found inside the page
    def test_admin_login_route(self):
        response = self.app.get("/admin/login")
        print("Searching for: ", "Admin Login")
        print("Found data for: ", response.data)
        self.assertIn(b'Admin Login', response.data)

    # Testing the index if the "Welcome to Dalmart" is found inside the page
    def test_student_login_route(self):
        response = self.app.get("/student/student_login")
        print("Searching for: ", "Student Login")
        print("Found data for: ", response.data)
        self.assertIn(b'Student Login', response.data)

    # Testing the index if the "Welcome to Dalmart" is found inside the page
    def test_teacher_login_route(self):
        response = self.app.get("/teacher/teacher_login")
        print("Searching for: ", "Teacher Login")
        print("Found data for: ", response.data)
        self.assertIn(b'Teacher Login', response.data)