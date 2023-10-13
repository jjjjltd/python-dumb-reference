import React, {useEffect, useState} from 'react';
import endPoints from './api';

export default function WordSample() {

    let [sample, setSample] =  useState("")

    useEffect(() => {
        loadSample()
    }, [])

const loadSample = async () => {
    const data = await endPoints.sample();
    setSample(sample=data)
    console.log(sample)
}
    return (
        <div className="wordsample">
            <h2 classname="ctlheader">Word Sample</h2>
            <p>Type (or paste) the word sample that you would like to generate sci-fi names from</p>
            <textarea placeholder={sample}></textarea>
            <br />
            <button>Generate<br/> names</button>
        </div>
    )
}