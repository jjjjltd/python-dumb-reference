from flask import Flask, json, request
from flask_cors import CORS
from sf_words import WORDS_SAMPLE
import logging
import sf_names2 as sf


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
model = []

@app.get("/")
def root():
    return "Home/landing page"

@app.get("/control")
def control():
    return {"maxwordlen": 15,
            "minwordlen": 3,
            "minvowels": 2,
            "numwords": 10,
            "db_on": 0}

@app.get("/sample")
def sample():
    return WORDS_SAMPLE.lower()

@app.route('/genwords', methods=['POST'])
def genwords():
    dic={}
    print("form data, ", request.data)
    dic = request.json
    try: 
        print(f"print key,  {dic['words']}")
    except KeyError:
        print("Unable to unpick dictionary")

    sf.Our_Words.words_sample = dic['words']
    final_words = []
    final_words = sf.proc_words()

    print(f"final words: {final_words}")
    
    return final_words
    # return json.dumps({'sample': request.form['sample']})


if __name__ == "__main__":
    app.run(debug=True)