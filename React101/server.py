from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
model = []

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

@app.get('/friend')
def get_friends():
    return model

@app.get('/friend/<int:id>')
def get_one_friend(id):
    return model[id], 200

@app.post('/friend')
def create_friend():
    request_data = request.get_json()
    new_friend = {"name": request_data["name"], "id": len(model), "aob": "any other bollocks"}
    model.append(new_friend)
    return new_friend, 201

@app.delete('/friend/<int:id>')
def delete_friend(id):
    del model[id]
    return {"success": "data successfully deleted from the server"}, 200

# @app.route("/body", methods=["POST"])
# def body():

#     data = request.json()
#     print(data)
#     name = request.form["name"]
#     location = request.form["location"]

#     ret_dict = {}
#     ret_dict = {
#         "name": name,
#         "location": location
#     }

#     return f"The data you passed in was {ret_dict}"

if __name__ == "__main__":
    app.run(debug=True)