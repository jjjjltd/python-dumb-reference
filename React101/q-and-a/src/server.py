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
    dicse.clear()
    with open ("./Spanish English.csv", "r") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        for row in reader:
            dicse[f"{row[0]}"] = row[1]

def read_dict():
    dicse.clear()
    for k, v in qanda.items():
        dicse[k] = v

        
@app.route("/")
def home():
    read_csv()
    return("Welcome to (TBA) Flash Card Quiz")


@app.get("/dict")
def rdict():
    print("dict hit")
    print("homeq hit" )
    read_dict()
    
    return pop_dict()

@app.get("/csv")
def rcsv():
    print("csv hit")
    read_csv()

    return pop_dict()

def pop_dict():

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

    return retdict


if __name__ == "__main__":
    app.run(debug=True)