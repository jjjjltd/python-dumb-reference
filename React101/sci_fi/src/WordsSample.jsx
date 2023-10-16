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

function handleClick() {
    console.log("Hit handleClick.")
    const data = endPoints.genwords();
    console.log(data)
}


    return (
        <div className="wordsample">
            <form>
                <div className="ctlheader">
                    <h1>Word Sample</h1>
                </div>
                <p>Type (or paste) the word sample that you would like to generate sci-fi names from</p>
                <textarea placeholder={sample} id="w"></textarea>
                <br />
                <button type="submit" onClick={handleClick} name="genwords">
                    Names
                </button>
            </form>
        </div>
    )
}