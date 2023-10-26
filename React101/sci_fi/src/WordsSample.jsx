import React, {useEffect, useState} from 'react';
import endPoints from './api';
import axios from 'axios';

export default function WordSample(props) {

    let [sample, setWordSample] =  useState("")

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    let data = []
    data = await endPoints.sample();
    setWordSample(sample=data)
}


function SendSample( props ) {
    let send = {}
    send['words'] =  sample

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";

    axios.post('/genwords', send, {
         headers: {
           'Content-Type': 'application/json',
         }
       }).then(res => {
            props.dowords(res.data)     
       }).catch(err=>console.log("Error found:  " + err))


       return(
        <>
        <h2>Literal</h2>

        </>
       )

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
                <button type="submit" onClick={()=>SendSample(props)} name="genwords" id="genword">Generate Names</button>
            </form>                  
        </div>
    )
}