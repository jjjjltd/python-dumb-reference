from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def root():
    return jsonify(dict(message="Root directory."))

@app.route("/api/test")
def test():
    return jsonify(dict(message='hello'))

@app.route("/api/2parms/<p1>/<p2>")
def parms2(p1, p2):
    """ Return 2 parameters to Flask front end.  Example:  http://127.0.0.1:5000/api/2parms/any%20value/parameter2 """
    if p1 != "0":
        retstr = f"Printing parameter1: {p1}"
    else:
        retstr = "Parameter 1 not populated"
    
    if len(p2)>0:
        retstr = retstr + f"\nPrinting parameter2: {p2}"

    return retstr

if __name__ == "__main__":
    app.run(debug=True)