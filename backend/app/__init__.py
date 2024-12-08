from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

flask_app = Flask(__name__, template_folder='../templates', static_folder='../static')
CORS(flask_app)

from app import routes  