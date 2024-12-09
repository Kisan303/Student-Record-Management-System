from flask_pymongo import PyMongo

# Initialize the PyMongo object
mongo = PyMongo()

# Function to initialize mongo with the app
def init_app(app):
    mongo.init_app(app)
