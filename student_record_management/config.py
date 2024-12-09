import os

class Config:
    # Correct MongoDB URI with your actual cluster URL and database name
    MONGO_URI = "mongodb+srv://root:ZOKW1BKK0MwcEN9H@cluster0.onoha.mongodb.net/student_db?retryWrites=true&w=majority"
    SECRET_KEY = os.urandom(24)  # You can set a fixed key or use environment variables for production
