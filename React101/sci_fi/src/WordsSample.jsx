import React, {useEffect, useState} from 'react';
import endPoints from './api';

export default function WordSample() {

    let [sample, setWordSample] =  useState("")

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    const data = await endPoints.sample();
    setWordSample(sample=data)
}

function sendSample() {
    console.log("Hit sendSample:")
    const data = endPoints.genwords();
    console.log(data)
}


    return (
        <div className="wordsample">
            
                <div className="ctlheader">
                    <h1>Word Sample</h1>
                </div>
                <p>Type (or paste) the word sample that you would like to generate sci-fi names from</p>
            <form id="wordform" action="post">
                <textarea placeholder={sample} id="w" name="words"></textarea>
                <br />
                <button type="submit" onClick={sendSample()} name="genwords">Names</button>
            </form>
        </div>
    )
}