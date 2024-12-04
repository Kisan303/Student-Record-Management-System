from app import flask_app, render_template

@flask_app.route("/")
def home():
    return render_template("index.html")