from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
model = []

@app.get("/control")
def control():
    return {"control1": "control variables"}

if __name__ == "__main__":
    app.run(debug=True)