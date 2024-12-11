import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # MongoDB URI and SECRET_KEY are fetched securely from the environment
    MONGO_URI = os.getenv("MONGO_URI")
    SECRET_KEY = os.getenv("SECRET_KEY")

    # Admin credentials loaded from the .env file
    ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
    ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")
