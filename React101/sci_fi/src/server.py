from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
model = []

@app.get("/")
def root():
    return "Home/landing page"

@app.get("/control")
def control():
    return {"maxwordlen": 10,
            "minwordlen": 3,
            "minvowels": 2,
            "numwords": 10}


if __name__ == "__main__":
    app.run(debug=True)