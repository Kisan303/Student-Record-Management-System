from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

class Config:
    """Base configuration with default settings."""

    # Secret Key for Flask app (used for sessions, CSRF protection, etc.)
    SECRET_KEY = os.environ.get('SECRET_KEY', 'fallback_secret_key')  # Fallback if SECRET_KEY is missing

    # Database URI for SQLAlchemy (supports both dev and production environments)
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///student_records.db')  # SQLite for dev, PostgreSQL/MySQL for production
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking for performance

    # CSRF Protection (enabled by default in Flask-WTF)
    WTF_CSRF_ENABLED = True  # Enable CSRF protection (important for forms)
    WTF_CSRF_SECRET_KEY = os.environ.get('CSRF_SECRET_KEY', 'fallback_csrf_secret_key')  # Fallback for CSRF secret key

    # Session Cookie settings
    SESSION_COOKIE_SECURE = True  # Secure cookies (use only in production)
    PERMANENT_SESSION_LIFETIME = 3600  # 1 hour session timeout
    REMEMBER_COOKIE_DURATION = 86400  # 24 hours for "remember me" feature

    # Email configuration (optional)
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = os.environ.get('MAIL_PORT', 587)  # Default port for TLS
    MAIL_USE_TLS = True  # Enable TLS
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER', 'no-reply@example.com')

    # Flask-Migrate configuration for database migrations
    MIGRATION_DIRECTORY = 'migrations'  # Directory for migration scripts
    
    # Optional: Caching settings for better performance (e.g., for frequently accessed data)
    CACHE_TYPE = "SimpleCache"  # Use simple caching for development (can be replaced with more complex cache in production)
    CACHE_DEFAULT_TIMEOUT = 300  # Default cache timeout (5 minutes)

    # Logging settings (log levels can be adjusted for different environments)
    LOGGING_LEVEL = 'DEBUG' if os.environ.get('FLASK_ENV') == 'development' else 'WARNING'

    # Password hashing method (bcrypt recommended for production)
    PASSWORD_HASHING_METHOD = os.environ.get('PASSWORD_HASHING_METHOD', 'bcrypt')

class DevelopmentConfig(Config):
    """Development configuration with specific settings for local development."""
    
    # Enable debugging and show detailed error pages
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///student_records.db'  # Use SQLite for local development
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking
    MAIL_SERVER = 'smtp.mailtrap.io'  # Example SMTP server for development emails
    MAIL_PORT = 587
    MAIL_USE_TLS = True

class ProductionConfig(Config):
    """Production configuration with optimized settings for live applications."""
    
    DEBUG = False
    FLASK_ENV = 'production'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')  # Production DB URL (PostgreSQL/MySQL)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_COOKIE_SECURE = True  # Secure cookies in production environment
    SQLALCHEMY_ECHO = False  # Disable SQLAlchemy logging for performance
    MAIL_SERVER = 'smtp.mailtrap.io'  # Use real SMTP server in production
    MAIL_PORT = 587
    MAIL_USE_TLS = True

class TestingConfig(Config):
    """Testing configuration with settings for unit testing."""
    
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test_student_records.db'  # Use a separate database for testing
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DEBUG = True

# Dictionary to easily switch between configurations
config_by_name = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig
}

# Load the correct configuration based on FLASK_ENV environment variable
current_config = config_by_name[os.getenv('FLASK_ENV', 'development')]
