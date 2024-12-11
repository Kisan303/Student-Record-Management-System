import pytest
from flask import jsonify

from app import app
import unittest

# MongoDB mock test
from dotenv import load_dotenv
from pymongo import MongoClient
import pymongo
import os

#Read the .env file
load_dotenv()
app.debug = True
# Username and Password

# Creates the Mongodb Client
# mongodb_client = MongoClient(f"mongodb+srv://{db_username}:{db_password}@cluster0.dr7cs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

# Reference: https://www.mongodb.com/developer/products/mongodb/pytest-fixtures-and-pypi/
@pytest.fixture(scope="session")
def mongodb():
    client = pymongo.MongoClient(f"mongodb+srv://root:zY0LvTV8HZLdDIB8@cluster0.onoha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    assert client.admin.command("ping")["ok"] != 0.0  # Check that the connection is okay.
    return client
#
# def test_mongodb_fixture(mongodb):
#     """ This test will pass if MDB_URI is set to a valid connection string. """
#     assert mongodb.admin.command("ping")["ok"] > 0
#
# @pytest.fixture
# def rollback_session(mongodb):
#     session = mongodb.start_session()
#     session.start_transaction()
#     try:
#         yield session
#     finally:
#         session.abort_transaction()
#
# # Testing inserting data by adding new data and check in database if the is successful
# # def test_insert_mongodb(mongodb, rollback_session):
# #     new_data = {"name": "Pen", "tag": "Office Supply", "price": 23.99}
# #     db = mongodb["flask_app"]
# #     products_coll = db["products"]
# #     products_coll.insert_one(new_data, session=rollback_session,)
# #     assert (products_coll.find_one({"tag": "Office Supply"}, session=rollback_session)!= None)
#
# class FlaskTestCase(unittest.TestCase):
#
#     def setUp(self):
#         self.app = app.test_client()
#         self.app.testing = True
#
#     #Testing the index if post is implemented
#     def test_index_get(self):
#         response = self.app.post("/")
#         print("The received status code: ", response.status_code)
#         print("The expected status code: ", 405)
#         self.assertEqual(first=response.status_code, second = 405)
#
#     #Testing the index if get is implemented
#     def test_index_post(self):
#         response = self.app.get("/")
#         print("The received status code: ", response.status_code)
#         print("The expected status code: ", 200)
#         self.assertEqual(first=response.status_code, second = 200)
#
#     #Testing the index if the "Welcome to Dalmart" is found inside the page
#     def test_index_data(self):
#         response = self.app.get("/")
#         print("Searching for: ", "Welcome to Dalmart")
#         print("Found data for: ", response.data)
#         self.assertIn(b'Welcome to Dalmart', response.data)
#
#     #Testing the connection of MongoDB
#     def test_mongo_conn(self):
#         response = self.app.get("/mongo_conn")
#         print(response.json)
#         self.assertEqual(first=response.json, second={"status": "Successfully Connected to MongoDB"})