from flask import Flask, json, request
from flask_cors import CORS
from sf_words import WORDS_SAMPLE
import logging


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
            "numwords": 10,
            "db_on": 1}

@app.get("/sample")
def sample():
    return WORDS_SAMPLE.lower()

@app.route('/genwords', methods=['POST'])
def genwords():
    print("form data, ", request.data)
    dic = json.loads(request.data)
    try: 
        print("form data, ", dic['words'])
    except KeyError:
        pass 
    
    return "Random list of words"
    # return json.dumps({'sample': request.form['sample']})


if __name__ == "__main__":
    app.run(debug=True)