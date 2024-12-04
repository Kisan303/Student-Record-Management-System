from flask import Flask, render_template, jsonify

flask_app = Flask(__name__, template_folder='../templates', static_folder='../static')

from app import routes