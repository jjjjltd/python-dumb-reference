import React, {useEffect, useState} from 'react';
import endPoints from './api';
import axios from 'axios';

export default function WordSample() {

    let [sample, setWordSample] =  useState("")

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    const data = await endPoints.sample();
    setWordSample(sample=data)
}


function sendSample(props) {

    console.log("Hit send sample")
    
    alert("sendSample" + sample)
    let send = {}
    send['words'] =  sample

    alert(send)

    
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
    axios.post('/genwords', send, {
         headers: {
           'Content-Type': 'application/json',
         }
       })

    }


    return (
        <div className="wordsample">
            
                <div className="ctlheader">
                    <h1>Word Sample</h1>
                </div>
                <p>Type (or paste) the word sample that you would like to generate sci-fi names from</p>
            <form id="form">
                <textarea placeholder={sample} id="word" name="words" required
                onChange={(e)=>setWordSample(sample=e.target.value)}></textarea>
                <br />
                <button type="submit" onClick={sendSample} name="genwords" id="genword">Names</button>
            </form>
        </div>
    )
}