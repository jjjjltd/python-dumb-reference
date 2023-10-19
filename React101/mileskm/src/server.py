from flask import Flask, json, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
model = []

@app.route("/calc/<amount>")
def calc(amount):
    print(type(amount), amount)
    return f'"kms:" {int(amount) * 1.62}'

@app.route("/calc")
def calconly():
    return "all good"

if __name__ == "__main__":
    app.run(debug=True)