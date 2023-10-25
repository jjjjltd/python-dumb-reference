import React, {useEffect, useState, useCallback} from 'react';
import endPoints from './api';
import axios from 'axios';

export default function WordSample(props) {

    let [sample, setWordSample] =  useState("")

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    const data = await endPoints.sample();
    setWordSample(sample=data)
}


function SendSample( props ) {
    console.log("Props value: " + typeof(props.dowords))
    console.log("Props value: " + props.dowords)

    let send = {}
    send['words'] =  sample

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";

    axios.post('/genwords', send, {
         headers: {
           'Content-Type': 'application/json',
         }
       }).then(res => {
            // console.log("Response words:" + JSON.stringify(res.data))
            let strwords = JSON.stringify(res.data)
            // strwords = strwords.split(",")
            props.dowords(strwords)     
            console.log("In theory we have done the function" + props.word_list)

            // word_list.forEach((word, i)=>console.log(word))
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
                <button type="submit" onClick={()=>SendSample(props)} name="genwords" id="genword">Names</button>
            </form>                  
        </div>
    )
}