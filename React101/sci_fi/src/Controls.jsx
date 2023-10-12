import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls() {
    let [controls, setControls] = useState("");

    // Render the screen - one TimeRanges.
    useEffect(() => {
        console.log("Controls.jsx rendered");
        loadControl()
    }, [])

const loadControl = async () => {
    const data = await endPoints.control();
    console.log(data)
    setControls(controls=data)
    console.log(controls)
}


    return (
        <div className="ctlheader">
                    <h2>Word Controls</h2>
            <div class="controls">
                <p>Maximum word length:  {controls["maxwordlen"]} </p>
                <p>Minimum word length:  {controls["minwordlen"]} </p>
                <p>Minimum vowels:  {controls["minvowels"]} </p>
                <p>Number of words:  {controls["numwords"]} </p>
            </div>
        </div>
    )
}