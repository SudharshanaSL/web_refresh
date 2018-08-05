from flask import Flask, send_file, send_from_directory, request

app = Flask(__name__)

@app.route("/flaskserver/hi")
def hi():
    return "Namaskara!"

@app.route("/flaskserver/logo")
def logo():
    return send_file("images/horizon.png", mimetype="image/gif")

app.run()