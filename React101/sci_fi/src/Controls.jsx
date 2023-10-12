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
                <table>
                    <tr>
                        <th>Maximum word length</th>
                        <th>Minimum word length</th>
                        <th>Minimum vowels</th>
                        <th>Number of words</th>
                    </tr>
                    <tr>
                        <td><input type="number" value={controls["maxwordlen"]}/> </td>
                        <td><input type="number" value={controls["minwordlen"]} /></td>
                        <td><input type="number" value={controls["minvowels"]} /></td>
                        <td><input type="number" value={controls["numwords"]} /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}