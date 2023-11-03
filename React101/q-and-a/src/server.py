import csv
from qandadict import qanda
from flask import Flask
from flask_cors import CORS
import random
import os

dicse = {};
app = Flask(__name__)
CORS(app)

def read_csv():

    with open ("./Spanish English.csv", "r") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        for row in reader:

            dicse[f"{row[0]}"] = row[1]

def read_dict():

    for k, v in qanda.items():
        dicse[k] = v
    
    print(f"read_dict: {dicse}")

        
@app.route("/")
def home():
    read_csv()
    return("Welcome to (CSV) Flash Card Quiz")


@app.route("/q")
def homeq():
    print("homeq hit" )
    read_dict()
    return("Welcome to (Dictionary) Flash Card Quiz")

@app.get("/qa")
def qa():
    qlist = []
    retdict = {}
    idx = 0

    qlist = list(dicse.keys())
    alist = list(dicse.values())

    question = random.choice(qlist)
    idx = qlist.index(question)
    answer = alist[idx]

    retdict["front"] =  question
    retdict["back"] = answer

    print(retdict)
    return retdict


if __name__ == "__main__":
    app.run(debug=True)