import React, {useEffect, useState} from 'react';
import endPoints from './api';
import axios from 'axios';

export default function WordSample( ) {

    let [sample, setWordSample] =  useState("")
    let [words, setWords] = useState([])

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    const data = await endPoints.sample();
    setWordSample(sample=data)
}


function sendSample( ) {

    console.log("Hit send sample")
    let send = {}
    send['words'] =  sample
    let word_list = ""

    alert(JSON.stringify(send))
    
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
    axios.post('/genwords', send, {
         headers: {
           'Content-Type': 'application/json',
         }
       }).then(res => {
            console.log("Response words:" + JSON.stringify(res.data))
            let strwords = JSON.stringify(res.data)
            word_list = strwords.split(",")
            console.log("Array words:" + typeof(word_list))
            word_list.forEach((word, i)=>console.log(word))
       }).catch(err=>console.log("Error found:  " + err))

    //    return(
    //     word_list.forEach((word, i)=><h2>{word}</h2>)
    //    )

    }
    

    return (
        <div className="wordsample">
            
                <div className="ctlheader">
                    <h1>Word Sample</h1>
                </div>
                <p>Type (or paste) the word sample that you would like to generate sci-fi names from</p>
            <form id="form" method="POST">
                <textarea placeholder={sample} id="word" name="words" required
                onChange={(e)=>setWordSample(sample=e.target.value)}></textarea>
                <br />
                <button type="submit" onClick={sendSample} name="genwords" id="genword">Names</button>
            </form>                  
        </div>
    )
}